import Card from "./Card";
import CodeSnippet from "./CodeSnippet";

export default function CardContainer() {
  return (
    <div className="d-flex flex-col g1">
      <Card
        command="mv ORIGINAL_PATH DESTINATION_PATH"
        description={
          <>
            This example has many lines of text
            <br />
            <ul>
              <li>It takes JSX instead of a string</li>
              <li>I think it can take strings too</li>
              <li>Explain what <CodeSnippet i="args"/> does</li>
              <li>move <CodeSnippet i="ORIGINAL_PATH"/> to <CodeSnippet i="DESTINATION_PATH"/></li>
            </ul>
          </>
        }
      />
    </div>
  );
}
