type TextBlockProps = {
  content: string;
  maxWidth: number;
};

export function TextBlock({ content, maxWidth }: TextBlockProps) {
  return (
    <div
      style={{ maxWidth, margin: "0 auto", padding: "24px", lineHeight: 1.7 }}
      // content ditulis lewat rich-text field di editor, bukan hardcode
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
