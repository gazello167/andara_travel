type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

type FeaturesProps = {
  heading: string;
  items: FeatureItem[];
};

export function Features({ heading, items }: FeaturesProps) {
  return (
    <section style={{ padding: "64px 24px", textAlign: "center" }}>
      {heading && (
        <h2 style={{ fontSize: 32, marginBottom: 40 }}>{heading}</h2>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 32,
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {items?.map((item, i) => (
          <div key={i}>
            <div style={{ fontSize: 36 }}>{item.icon}</div>
            <h3 style={{ fontSize: 18, margin: "12px 0 8px" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.6 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
