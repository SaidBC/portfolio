import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type ImageLayerProps = Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  "src" | "width" | "height"
> & {
  src: string;
  index: number;
};

export default function ImageLayer({
  index,
  className,
  ...props
}: ImageLayerProps) {
  return (
    <div
      style={{
        rotate: index * 6 + 6 + "deg",
        left: index * 50 + "px",
      }}
      className={[
        "absolute rounded-3xl bg-[#303030] shadow-xl",
        className || "",
      ].join(" ")}
    >
      <Image
        className="rounded-3xl"
        alt="Collection Item Image"
        width={400}
        height={400}
        fetchPriority="low"
        {...props}
      />
    </div>
  );
}
