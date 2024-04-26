export default function Button({
  text,
  className,
  onClick,
  type,
  disabled,
}: {
  text: string;
  type: "submit" | "reset" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className: string;
  disabled?: boolean;
}) {
  return (
    <button
      className={`${className} flex items-center justify-center rounded-3xl`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
