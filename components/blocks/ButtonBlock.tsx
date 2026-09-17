type ButtonBlockProps = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export function ButtonBlock({ label, href, variant }: ButtonBlockProps) {
  const isPrimary = variant === "primary";
  return (
    <div style={{ textAlign: "center", padding: "16px" }}>
      <a
        href={href}
        style={{
          display: "inline-block",
          padding: "12px 28px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
          backgroundColor: isPrimary ? "#111827" : "transparent",
          color: isPrimary ? "#fff" : "#111827",
          border: isPrimary ? "none" : "2px solid #111827",
        }}
      >
        {label}
      </a>
    </div>
  );
}
