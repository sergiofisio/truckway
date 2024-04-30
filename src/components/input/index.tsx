import InputMask from "react-input-mask";

export default function Input({
  label,
  type,
  mask,
  className,
  placeholder,
  onChange,
  onFocus,
  value,
  error,
}: {
  label: string;
  type: string;
  mask?: string;
  className: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  error?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <label
        className="w-full text-center text-xl leading-none"
        htmlFor={label}
      >
        {label}
      </label>
      {type !== "textarea" ? (
        <InputMask
          className={`px-4 border-2 border-solid w-full h-10 rounded-3xl $ ${
            error ? "border-red" : "border-black"
          }`}
          type={type}
          mask={mask ? mask : ""}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          placeholder={mask || placeholder || label}
        />
      ) : (
        <textarea
          className={`px-4 border-2 border-solid w-1/2 rounded-3xl resize-none  ${className} ${
            error ? "border-red" : "border-black"
          }`}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          rows={5}
          cols={30}
        ></textarea>
      )}
    </div>
  );
}
