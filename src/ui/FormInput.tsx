import {
  ChangeEventHandler,
  DetailedHTMLProps,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useCallback,
} from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string | React.ReactNode;
  setInput: Dispatch<SetStateAction<any>>;
};

export default function FormInput({
  label,
  setInput,
  className,
  ...props
}: InputProps) {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setInput(e.target.value);
    },
    []
  );
  return (
    <label className="flex flex-col-reverse gap-1 relative">
      <input
        onChange={handleChange}
        className={
          "bg-[#3f3f3f] rounded-lg px-4 py-3 border-2 border-[#555]  focus:outline-4 focus:outline-white/5"
        }
        {...props}
      />
      {/* <span className={""}>{label}</span> */}
    </label>
  );
}
