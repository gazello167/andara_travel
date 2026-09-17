import type { Config } from "@measured/puck";
import { Hero } from "@/components/blocks/Hero";
import { TextBlock } from "@/components/blocks/TextBlock";
import { ButtonBlock } from "@/components/blocks/ButtonBlock";
import { ImageBlock } from "@/components/blocks/ImageBlock";
import { Testimonial } from "@/components/blocks/Testimonial";

// ============================================================
// INI FILE UTAMANYA.
// Setiap kali kamu mau nambah blok baru yang bisa di-drag di
// editor, kamu HANYA nambah entry di sini (dan bikin 1 file
// komponen di components/blocks/). Kamu TIDAK PERNAH ngedit
// halaman satu-satu lagi — semua halaman render lewat data JSON
// yang dibentuk oleh registry ini.
// ============================================================

export type Props = {
  Hero: {
    title: string;
    subtitle: string;
    align: "left" | "center" | "right";
    backgroundColor: string;
  };
  TextBlock: {
    content: string;
    maxWidth: number;
  };
  ButtonBlock: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
  };
  ImageBlock: {
    src: string;
    alt: string;
    rounded: boolean;
  };
  Testimonial: {
  quote: string;
  author: string;
  role: string;
  };
};

export const config: Config<Props> = {
  components: {
    Hero: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        align: {
          type: "select",
          options: [
            { label: "Kiri", value: "left" },
            { label: "Tengah", value: "center" },
            { label: "Kanan", value: "right" },
          ],
        },
        backgroundColor: { type: "text" },
      },
      defaultProps: {
        title: "Judul Hero",
        subtitle: "Deskripsi singkat di bawah judul",
        align: "center",
        backgroundColor: "#f9fafb",
      },
      render: (props) => <Hero {...props} />,
    },

    TextBlock: {
      fields: {
        content: { type: "textarea" },
        maxWidth: { type: "number" },
      },
      defaultProps: {
        content: "<p>Tulis konten di sini...</p>",
        maxWidth: 720,
      },
      render: (props) => <TextBlock {...props} />,
    },

    ButtonBlock: {
      fields: {
        label: { type: "text" },
        href: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
        },
      },
      defaultProps: {
        label: "Klik di sini",
        href: "#",
        variant: "primary",
      },
      render: (props) => <ButtonBlock {...props} />,
    },

    ImageBlock: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
        rounded: { type: "radio", options: [{ label: "Ya", value: true }, { label: "Tidak", value: false }] },
      },
      defaultProps: {
        src: "",
        alt: "",
        rounded: false,
      },
      render: (props) => <ImageBlock {...props} />,
    },
  },
  
  Testimonial: {
    fields: {
      quote: { type: "textarea" },
      author: { type: "text" },
      role: { type: "text" },
    },
    defaultProps: {
      quote: "Produk ini luar biasa!",
      author: "Nama Pelanggan",
      role: "Jabatan, Perusahaan",
    },
    render: (props) => <Testimonial {...props} />,
  },
};

export default config;
