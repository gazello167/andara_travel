import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Paksa Next.js untuk BUKAN merender rute ini secara statis saat build
export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  try {
    const resolvedParams = await params;
    
    // Jika slug kosong atau tidak valid saat build
    if (!resolvedParams?.slug) {
      return NextResponse.json({
        slug: "",
        title: "Untitled Page",
        content: { content: [], root: { props: {} } },
        published: false,
      });
    }

    const page = await prisma.page.findUnique({
      where: { slug: resolvedParams.slug },
    });

    if (!page) {
      return NextResponse.json({
        slug: resolvedParams.slug,
        title: "Untitled Page",
        content: { content: [], root: { props: {} } },
        published: false,
      });
    }

    return NextResponse.json(page);
  } catch (error) {
    // Return fallback JSON agar proses build/runtime tidak crashing saat DB disconnect
    return NextResponse.json(
      {
        slug: "error",
        title: "Untitled Page",
        content: { content: [], root: { props: {} } },
        published: false,
      },
      { status: 200 }
    );
  }
}