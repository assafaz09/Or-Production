"use client";
import Image from "next/image";

export default function InfiniteCarousel({
  images = [],
  speedSec = 50,
  height = 60,
  gap = 32,
}) {
  const trackStyle = { animation: `ic-scroll ${speedSec}s linear infinite` };

  const handleImageClick = (image) => {
    if (image.link) {
      // עקוב אחרי לחיצה על ריל באינסטגרם
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "CustomEvent", {
          event_name: "InstagramReelClick",
          reel_alt: image.alt,
          reel_src: image.src,
          destination: "instagram_profile",
        });
      }

      window.open(image.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div className="ic-wrap">
        <div className="ic-track" style={{ ...trackStyle, gap: `${gap}px` }}>
          {images.map((img, i) => (
            <div
              key={"a-" + i}
              className="carousel-item"
              style={{ width: height * 0.75, height: height }}
              onClick={() => handleImageClick(img)}
            >
              <Image
                src={img.src}
                alt={img.alt ?? ""}
                width={height * 0.75}
                height={height}
                className={`carousel-image ${!img.link ? "no-link" : ""}`}
                style={{
                  height: height,
                  width: height * 0.75,
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
          {images.map((img, i) => (
            <div
              key={"b-" + i}
              className="carousel-item"
              style={{ width: height * 0.75, height: height }}
              onClick={() => handleImageClick(img)}
            >
              <Image
                src={img.src}
                alt={img.alt ?? ""}
                width={height * 0.75}
                height={height}
                className={`carousel-image ${!img.link ? "no-link" : ""}`}
                style={{
                  height: height,
                  width: height * 0.75,
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
