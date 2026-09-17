type FooterProps = {
  companyName: string;
  year: string;
  backgroundColor: string;
};

export function Footer({ companyName, year, backgroundColor }: FooterProps) {
  return (
    <footer
      style={{
        padding: "32px 24px",
        textAlign: "center",
        backgroundColor,
        fontSize: 14,
        opacity: 0.8,
      }}
    >
      © {year} {companyName}. All rights reserved.
    </footer>
  );
}
