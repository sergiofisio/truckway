export default function Button({
  text,
  className,
  onClick,
  type,
  disabled,
}: {
  text: string;
  className: string;
  onClick: () => void;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
}) {
  return (
    <button
      className={`${className} flex items-center justify-center w-full rounded-3xl`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
