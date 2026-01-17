type SnippetProp = {
  i: React.ReactNode;
};

export default function CodeSnippet({ i }: SnippetProp) {
  return <span className="code inline-code r05 bg-dark-select color-primary">{i}</span>;
}
