import { cn } from "@/lib/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, id, className, ...props }: InputProps) {
  const inputId = id ?? props.name;
  const errorId = error && inputId ? `${inputId}-error` : undefined;

  return (
    <label className="flex flex-col gap-1.5 text-sm" htmlFor={inputId}>
      <span className="font-medium text-ink">{label}</span>
      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn(
          "rounded-[var(--radius-md)] border border-line bg-surface px-3 py-2.5 text-ink",
          "placeholder:text-muted/70",
          error && "border-danger",
          className,
        )}
        {...props}
      />
      {error ? (
        <span id={errorId} className="text-danger" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
