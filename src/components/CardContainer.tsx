import Card from "./Card";
import CodeSnippet from "./CodeSnippet";
import styles from "../styles/CardContainer.module.css";

export default function CardContainer() {
  return (
    <div className={`d-grid g1 ${styles.container}`}>

      <Card
        command="mv FILE DESTINATION_PATH"
        description={
          <>
            This example has many lines of text
            <br />
            <ul>
              <li>It takes JSX instead of a string</li>
              <li>I think it can take strings too</li>
              <li>
                Explain what <CodeSnippet i="args" /> does
              </li>
              <li>
                move <CodeSnippet i="FILE" /> to{" "}
                <CodeSnippet i="DESTINATION_PATH" />
              </li>
            </ul>
          </>
        }
      />

    </div>
  );
}
