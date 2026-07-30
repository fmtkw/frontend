import { PageHeader } from "@/components/ui/page-header";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div
      className="mx-auto pt-28 pb-16 md:pb-20 md:pt-32"
      style={{ paddingInline: "var(--page-pad)", maxWidth: "var(--content-max)" }}
    >
      <PageHeader title={title} description={description} />
      <p className="border border-dashed border-line bg-surface px-4 py-6 text-sm text-muted">
        Conteúdo será conectado à API Django (`/api/v1/...`) nas próximas iterações.
      </p>
    </div>
  );
}
