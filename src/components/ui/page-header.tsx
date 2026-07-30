type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-8 max-w-3xl">
      <h1 className="text-3xl font-black uppercase tracking-[-0.04em] text-ink md:text-5xl">
        {title}
      </h1>
      {description ? <p className="mt-3 text-base text-muted md:text-lg">{description}</p> : null}
    </header>
  );
}
