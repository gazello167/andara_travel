"use client";

import { useEffect, useState } from "react";
import { Puck, type Data } from "@measured/puck";
import "@measured/puck/puck.css";
import { config } from "@/lib/puck-config";

// Halaman ini adalah EDITOR-nya: sidebar komponen (kiri), canvas
// drag & drop (tengah), panel properti (kanan) — semua disediakan
// oleh <Puck />. Kita cuma perlu load data awal & simpan saat "Publish".

export default function EditPage({ params }: { params: { slug: string } }) {
  const [initialData, setInitialData] = useState<Data | null>(null);

  useEffect(() => {
    fetch(`/api/pages/${params.slug}`)
      .then((res) => res.json())
      .then((page) => setInitialData(page.content));
  }, [params.slug]);

  if (!initialData) {
    return <div style={{ padding: 40 }}>Memuat editor...</div>;
  }

  return (
    <Puck
      config={config}
      data={initialData}
      onPublish={async (data: Data) => {
        await fetch(`/api/pages/${params.slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: data, published: true }),
        });
        alert("Halaman berhasil disimpan!");
      }}
    />
  );
}
