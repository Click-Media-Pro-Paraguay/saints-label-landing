import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import type { Img } from "imagetools-core";
import { EditorialImage } from "./EditorialImage";

const fakeImage: Img = {
  src: "/assets/fake.webp",
  srcset: "/assets/fake.webp 720w, /assets/fake@2x.webp 1280w",
  w: 1280,
  h: 960,
} as unknown as Img;

describe("EditorialImage", () => {
  it("renders without an anchor when href is not provided", () => {
    const { container } = render(
      <EditorialImage image={fakeImage} alt="Test image" />,
    );
    expect(container.querySelector("a")).toBeNull();
    const img = container.querySelector("img");
    expect(img).not.toBeNull();
    expect(img?.getAttribute("alt")).toBe("Test image");
  });

  it("wraps in an outbound anchor when href is provided", () => {
    const { container } = render(
      <EditorialImage
        image={fakeImage}
        alt="Product photo"
        href="https://promopage.net/click"
      />,
    );
    const anchor = container.querySelector("a");
    expect(anchor).not.toBeNull();
    expect(anchor?.getAttribute("href")).toBe("https://promopage.net/click");
    expect(anchor?.getAttribute("target")).toBe("_blank");
    expect(anchor?.getAttribute("rel")).toMatch(/noopener/);
    expect(anchor?.getAttribute("rel")).toMatch(/noreferrer/);
    expect(anchor?.getAttribute("data-cta")).toBe("image-outbound");
    expect(anchor?.getAttribute("aria-label")).toBe("Product photo");
    expect(anchor?.querySelector("img")).not.toBeNull();
  });

  it("respects a custom dataCta value", () => {
    const { container } = render(
      <EditorialImage
        image={fakeImage}
        alt="Custom"
        href="https://promopage.net/click"
        dataCta="hero-outbound"
      />,
    );
    expect(container.querySelector("a")?.getAttribute("data-cta")).toBe(
      "hero-outbound",
    );
  });
});
