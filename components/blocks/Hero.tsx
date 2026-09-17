type HeroProps = {
  title: string;
  subtitle: string;
  align: "left" | "center" | "right";
  backgroundColor: string;
  backgroundImage: string;
  overlayOpacity: number;
  textColor: string;
};

export function Hero({
  title,
  subtitle,
  align,
  backgroundColor,
  backgroundImage,
  overlayOpacity,
  textColor,
}: HeroProps) {
  const hasImage = Boolean(backgroundImage);

  return (
    <section
      style={{
        position: "relative",
        padding: "100px 24px",
        textAlign: align,
        backgroundColor: hasImage ? undefined : backgroundColor,
        backgroundImage: hasImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* overlay gelap biar teks tetap kebaca di atas foto */}
      {hasImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#000",
            opacity: overlayOpacity,
          }}
        />
      )}

      <div style={{ position: "relative", color: hasImage ? textColor : undefined }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, margin: 0 }}>{title}</h1>
        <p style={{ fontSize: 20, opacity: 0.85, marginTop: 12 }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
