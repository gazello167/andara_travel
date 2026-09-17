import type { Config } from "@measured/puck";
import { Hero } from "@/components/blocks/Hero";
import { TextBlock } from "@/components/blocks/TextBlock";
import { ButtonBlock } from "@/components/blocks/ButtonBlock";
import { ImageBlock } from "@/components/blocks/ImageBlock";
import { Features } from "@/components/blocks/Features";
import { CTA } from "@/components/blocks/CTA";
import { Footer } from "@/components/blocks/Footer";
import { Testimonial } from "@/components/blocks/Testimonial";

// ============================================================
// REGISTRY KOMPONEN. Nambah blok baru = nambah 1 entry di sini
// + 1 file komponen di components/blocks/. Tidak pernah edit
// halaman satu-satu lagi.
// ============================================================

export type Props = {
  Hero: {
    title: string;
    subtitle: string;
    align: "left" | "center" | "right";
    backgroundColor: string;
    backgroundImage: string;
    overlayOpacity: number;
    textColor: string;
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
  Features: {
    heading: string;
    items: { icon: string; title: string; description: string }[];
  };
  CTA: {
    heading: string;
    subheading: string;
    buttonLabel: string;
    buttonHref: string;
    backgroundColor: string;
    textColor: string;
  };
  Footer: {
    companyName: string;
    year: string;
    backgroundColor: string;
  };
  Testimonial: {
    quote: string;
    author: string;
    role: string;
  };
};

export const config: Config<Props> = {
  categories: {
    layout: { components: ["Hero", "Footer"] },
    content: {
      components: ["TextBlock", "ImageBlock", "Features", "Testimonial"],
    },
    action: { components: ["ButtonBlock", "CTA"] },
  },

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
        backgroundImage: { type: "text" }, // isi URL gambar
        overlayOpacity: { type: "number", min: 0, max: 1, step: 0.1 },
        textColor: { type: "text" },
      },
      defaultProps: {
        title: "Judul Hero",
        subtitle: "Deskripsi singkat di bawah judul",
        align: "center",
        backgroundColor: "#f9fafb",
        backgroundImage: "",
        overlayOpacity: 0.4,
        textColor: "#ffffff",
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
        rounded: {
          type: "radio",
          options: [
            { label: "Ya", value: true },
            { label: "Tidak", value: false },
          ],
        },
      },
      defaultProps: {
        src: "",
        alt: "",
        rounded: false,
      },
      render: (props) => <ImageBlock {...props} />,
    },

    Features: {
      fields: {
        heading: { type: "text" },
        items: {
          type: "array",
          arrayFields: {
            icon: { type: "text" },
            title: { type: "text" },
            description: { type: "textarea" },
          },
          defaultItemProps: {
            icon: "✨",
            title: "Fitur Baru",
            description: "Deskripsi singkat fitur ini.",
          },
        },
      },
      defaultProps: {
        heading: "Kenapa Pilih Kami",
        items: [
          { icon: "🚀", title: "Cepat", description: "Performa maksimal." },
          { icon: "🔒", title: "Aman", description: "Data selalu terlindungi." },
          { icon: "💡", title: "Fleksibel", description: "Mudah disesuaikan." },
        ],
      },
      render: (props) => <Features {...props} />,
    },

    CTA: {
      fields: {
        heading: { type: "text" },
        subheading: { type: "text" },
        buttonLabel: { type: "text" },
        buttonHref: { type: "text" },
        backgroundColor: { type: "text" },
        textColor: { type: "text" },
      },
      defaultProps: {
        heading: "Siap Mulai?",
        subheading: "Daftar sekarang dan rasakan bedanya.",
        buttonLabel: "Daftar Sekarang",
        buttonHref: "#",
        backgroundColor: "#111827",
        textColor: "#ffffff",
      },
      render: (props) => <CTA {...props} />,
    },

    Footer: {
      fields: {
        companyName: { type: "text" },
        year: { type: "text" },
        backgroundColor: { type: "text" },
      },
      defaultProps: {
        companyName: "Nama Perusahaan",
        year: "2026",
        backgroundColor: "#f3f4f6",
      },
      render: (props) => <Footer {...props} />,
    },

    Testimonial: {
      fields: {
        quote: { type: "textarea" },
        author: { type: "text" },
        role: { type: "text" },
      },
      defaultProps: {
        quote: "Produk ini luar biasa, sangat membantu bisnis kami!",
        author: "Nama Pelanggan",
        role: "Jabatan, Perusahaan",
      },
      render: (props) => <Testimonial {...props} />,
    },
  },
};

export default config;
