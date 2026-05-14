import type { Img } from "imagetools-core";
import {
  COLORS,
  IMAGE_SIZES_FULL,
  IMAGE_SIZES_HALF,
} from "@/lib/editorial-tokens";

// ============================================================
// EditorialImage — renders a responsive WebP from vite-imagetools.
//
// Usage:
//   import hero from "@/assets/foo.png?w=360;720;1280&quality=84&format=webp&as=img";
//   <EditorialImage image={hero} alt="..." priority layout="full" />
//
// Pair with layout="half" inside sm:grid-cols-2 sections so the
// sizes attribute stays accurate for the 680px editorial column.
// ============================================================

type EditorialImageProps = {
  image: Img;
  alt: string;
  className?: string;
  imgClassName?: string;
  unframed?: boolean;
  /** Mark the first hero image for LCP preload */
  priority?: boolean;
  layout?: "full" | "half";
  /** When set, wraps the image in an outbound <a> (target=_blank). */
  href?: string;
  /** data-cta marker for tracking. Defaults to "image-outbound" when href is set. */
  dataCta?: string;
};

export const EditorialImage = ({
  image,
  alt,
  className = "",
  imgClassName = "aspect-[4/3] w-full object-cover",
  unframed = false,
  priority = false,
  layout = "full",
  href,
  dataCta,
}: EditorialImageProps) => {
  const sizes = layout === "half" ? IMAGE_SIZES_HALF : IMAGE_SIZES_FULL;
  const loading: "eager" | "lazy" = priority ? "eager" : "lazy";
  const fetchPriority: "high" | "low" = priority ? "high" : "low";
  const common = {
    src: image.src,
    ...(image.srcset ? { srcSet: image.srcset } : {}),
    alt,
    sizes,
    width: image.w,
    height: image.h,
    loading,
    decoding: "async" as const,
    fetchPriority,
  };
  const rendered = unframed ? (
    <img {...common} className={`${imgClassName} ${className}`.trim()} />
  ) : (
    <div
      className={`overflow-hidden rounded-sm border ${className}`}
      style={{ borderColor: COLORS.softBorder, background: COLORS.surface }}
    >
      <img {...common} className={imgClassName} />
    </div>
  );
  if (!href) return rendered;
  return (
    <a
      href={href}
      data-cta={dataCta ?? "image-outbound"}
      target="_blank"
      rel="sponsored noopener noreferrer"
      aria-label={alt}
      className="block cursor-pointer"
    >
      {rendered}
    </a>
  );
};

export default EditorialImage;
