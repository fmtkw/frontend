import { PageHeader } from "@/components/ui/page-header";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="mx-auto max-w-[var(--content-max)] px-4 py-10 md:px-6 md:py-14">
      <PageHeader title={title} description={description} />
      <p className="rounded-[var(--radius-lg)] border border-dashed border-line bg-surface px-4 py-6 text-sm text-muted">
        Conteúdo será conectado à API Django (`/api/v1/...`) nas próximas iterações.
      </p>
    </div>
  );
}
