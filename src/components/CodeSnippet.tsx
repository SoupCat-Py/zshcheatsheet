type SnippetProp = {
  i: React.ReactNode;
};

export default function CodeSnippet({ i }: SnippetProp) {
  return (
    <code className="code inline-code r05 bg-dark-select color-primary size5">
      {i}
    </code>
  );
}
