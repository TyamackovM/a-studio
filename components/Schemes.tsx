import React, { useEffect, useState } from "react";
import { Image } from "antd";

export default function Schemes() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isSmallScreen = windowWidth <= 900;
  const imageCount = 20;
  const imageNames = Array.from(
    { length: imageCount },
    (_, index) => `${index + 1}.webp`
  );
  const imageItems = imageNames.map((imageName) => ({
    src: `/schemes/${imageName}`,
  }));

  return (
    <div className="flex items-center justify-center flex-col max-sm:h-[70%] h-[100%] max">
      <span className="text-[28px] max-sm:text-[22px] font-[#D35400]">
        Рабочая документация
      </span>
      <Image.PreviewGroup
        items={imageItems}
        preview={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <Image
          width={isSmallScreen ? "95%" : "60vw"}
          alt="image"
          src={imageItems[0].src}
        />
      </Image.PreviewGroup>
    </div>
  );
}
