import InputMask from "react-input-mask";

export default function Input({
  label,
  type,
  mask,
  className,
  onChange,
  onFocus,
  value,
  error,
}: {
  label: string;
  type: string;
  mask?: string;
  className: string;
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
    <div className="flex items-center justify-center">
      <label className="w-1/6 text-xl leading-none" htmlFor={label}>
        {label}
      </label>
      {type !== "textarea" ? (
        <InputMask
          className={`px-4 border-2 border-solid w-1/2 h-10 rounded-3xl ${className} ${
            error ? "border-red" : "border-black"
          }`}
          type={type}
          mask={mask ? mask : ""}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
        />
      ) : (
        <textarea
          className={`px-4 border-2 border-solid w-1/2 rounded-3xl resize-none ${className} ${
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
