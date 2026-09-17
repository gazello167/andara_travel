type CTAProps = {
  heading: string;
  subheading: string;
  buttonLabel: string;
  buttonHref: string;
  backgroundColor: string;
  textColor: string;
};

export function CTA({
  heading,
  subheading,
  buttonLabel,
  buttonHref,
  backgroundColor,
  textColor,
}: CTAProps) {
  return (
    <section
      style={{
        padding: "72px 24px",
        textAlign: "center",
        backgroundColor,
        color: textColor,
      }}
    >
      <h2 style={{ fontSize: 32, margin: 0 }}>{heading}</h2>
      <p style={{ fontSize: 16, opacity: 0.85, marginTop: 12 }}>
        {subheading}
      </p>
      <a
        href={buttonHref}
        style={{
          display: "inline-block",
          marginTop: 24,
          padding: "12px 32px",
          borderRadius: 8,
          fontWeight: 600,
          textDecoration: "none",
          backgroundColor: textColor,
          color: backgroundColor,
        }}
      >
        {buttonLabel}
      </a>
    </section>
  );
}
