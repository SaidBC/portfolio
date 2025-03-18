import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function ErrorText({
  children,
  className,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) {
  return (
    <div>
      <p
        className={[className || "", "text-red-500 font-bold"].join(" ")}
        {...props}
      >
        {children}
      </p>
    </div>
  );
}
