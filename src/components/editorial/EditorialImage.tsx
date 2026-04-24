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
};

export const EditorialImage = ({
  image,
  alt,
  className = "",
  imgClassName = "aspect-[4/3] w-full object-cover",
  unframed = false,
  priority = false,
  layout = "full",
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
  return unframed ? (
    <img {...common} className={`${imgClassName} ${className}`.trim()} />
  ) : (
    <div
      className={`overflow-hidden rounded-sm border ${className}`}
      style={{ borderColor: COLORS.softBorder, background: COLORS.surface }}
    >
      <img {...common} className={imgClassName} />
    </div>
  );
};

export default EditorialImage;
