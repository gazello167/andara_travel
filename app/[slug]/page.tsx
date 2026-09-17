import { Render } from "@measured/puck";
import { config } from "@/lib/puck-config";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

// Ini halaman yang dilihat pengunjung biasa. Tidak ada JSX hardcode
// per halaman di sini — satu file ini melayani SEMUA slug, karena
// isinya diambil dari database (hasil drag & drop di /edit/[slug]).

export const dynamic = "force-dynamic"; // selalu ambil data terbaru

export default async function PublicPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await prisma.page.findUnique({ where: { slug: params.slug } });

  if (!page || !page.published) {
    notFound();
  }

  return <Render config={config} data={page.content as any} />;
}
