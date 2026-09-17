import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Mencegah Next.js melakukan prerender statis halaman ini saat proses npm run build
export const dynamic = "force-dynamic";

// GET  /api/pages/[slug]  -> ambil data JSON halaman (untuk editor & publik)
// PUT  /api/pages/[slug]  -> simpan hasil drag & drop dari editor

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const page = await prisma.page.findUnique({ where: { slug: params.slug } });

  if (!page) {
    // Kalau belum ada, kembalikan struktur kosong biar editor tetap jalan
    return NextResponse.json({
      slug: params.slug,
      title: "Untitled Page",
      content: { content: [], root: { props: {} } },
      published: false,
    });
  }

  return NextResponse.json(page);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const body = await req.json();
  // body: { title?: string, content: <puck data>, published?: boolean }

  const page = await prisma.page.upsert({
    where: { slug: params.slug },
    update: {
      title: body.title ?? undefined,
      content: body.content,
      published: body.published ?? undefined,
    },
    create: {
      slug: params.slug,
      title: body.title ?? "Untitled Page",
      content: body.content,
      published: body.published ?? false,
    },
  });

  return NextResponse.json(page);
}
