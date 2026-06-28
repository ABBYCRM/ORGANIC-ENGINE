// Component that renders a JSON-LD script block safely.
// Strips JSON-unsafe characters and uses dangerouslySetInnerHTML with a
// serialized string so the markup is not parsed as HTML.

type JsonLdProps = {
  data: object | object[];
};

export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}