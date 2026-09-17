type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <div style={{ padding: 40, textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
      <p style={{ fontSize: 22, fontStyle: "italic" }}>"{quote}"</p>
      <p style={{ fontWeight: 600, marginTop: 16 }}>{author}</p>
      <p style={{ opacity: 0.6 }}>{role}</p>
    </div>
  );
}