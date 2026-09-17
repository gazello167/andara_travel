import { Render } from "@measured/puck";
import { config } from "@/lib/puck-config";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

// Mencegah SSG mencoba membuat halaman saat build time
export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

export default async function PublicPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;

  try {
    const page = await prisma.page.findUnique({
      where: { slug: resolvedParams.slug },
    });

    if (!page || !page.published) {
      notFound();
    }

    return <Render config={config} data={page.content as any} />;
  } catch (error) {
    // Jika database belum terhubung atau bermasalah saat request, kembalikan 404 agar tidak merusak server
    notFound();
  }
}