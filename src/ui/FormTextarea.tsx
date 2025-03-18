import {
  ChangeEventHandler,
  DetailedHTMLProps,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useCallback,
} from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string | React.ReactNode;
  setInput: Dispatch<SetStateAction<any>>;
};

export default function FormTextarea({
  label,
  setInput,
  className,
  ...props
}: InputProps) {
  const handleChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (e) => {
      setInput(e.target.value);
    },
    []
  );
  return (
    <label className="flex flex-col-reverse gap-1 relative">
      <textarea
        className="bg-[#3f3f3f] rounded-lg min-h-40 max-h-60 px-4 py-3 resize-y min-w-full border-2 border-[#555]  focus:outline-4 focus:outline-white/5"
        onChange={handleChange}
        {...props}
      ></textarea>
      {/* <span className={""}>{label}</span> */}
    </label>
  );
}
