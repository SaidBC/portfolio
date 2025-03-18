import Image from "next/image";
import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

interface LanguageItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
  backdropColor: string;
  delayFactor: number;
}

export default function LanguageItem({
  src,
  backdropColor,
  delayFactor,
  className,
  ...props
}: LanguageItemProps) {
  return (
    <div
      {...props}
      style={
        {
          "--delayFactor": delayFactor,
        } as CSSProperties
      }
      className={["relative animate-opacity", className || ""].join(" ")}
    >
      <div
        style={{
          backgroundColor: backdropColor,
        }}
        className="absolute blur-xl opacity-40 inset-0 -z-1 rounded-full "
      ></div>
      <Image
        src={src}
        className="min-w-12"
        alt="Programming Technology logo"
        width={48}
        height={48}
      />
    </div>
  );
}
