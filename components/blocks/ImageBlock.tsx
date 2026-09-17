type ImageBlockProps = {
  src: string;
  alt: string;
  rounded: boolean;
};

export function ImageBlock({ src, alt, rounded }: ImageBlockProps) {
  if (!src) {
    return (
      <div
        style={{
          padding: 40,
          textAlign: "center",
          background: "#f3f4f6",
          color: "#9ca3af",
        }}
      >
        (belum ada gambar — isi URL di panel kanan)
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        display: "block",
        borderRadius: rounded ? 16 : 0,
      }}
    />
  );
}
