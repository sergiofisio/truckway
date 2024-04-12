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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  error: boolean;
}) {
  return (
    <div className="flex items-center justify-center">
      <label className="w-1/6 text-xl" htmlFor={label}>
        {label}
      </label>
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
    </div>
  );
}
