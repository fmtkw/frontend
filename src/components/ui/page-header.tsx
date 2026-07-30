type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-8 max-w-3xl">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-brand-strong md:text-4xl">
        {title}
      </h1>
      {description ? <p className="mt-3 text-base text-muted md:text-lg">{description}</p> : null}
    </header>
  );
}
