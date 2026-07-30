import type { MetadataRoute } from "next";

const publicPaths = [
  "/",
  "/federacao",
  "/federacao/organizacao",
  "/federacao/estatuto",
  "/wushu",
  "/wushu/modalidades",
  "/onde-treinar",
  "/noticias",
  "/eventos",
  "/documentos",
  "/transparencia",
  "/ouvidoria",
  "/filie-se",
  "/filie-se/entidade",
  "/filie-se/pessoa",
  "/faq",
  "/contato",
  "/privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const lastModified = new Date();

  return publicPaths.map((path) => ({
    url: `${site}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
