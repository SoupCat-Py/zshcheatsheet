import Card from "./Card";
import CodeSnippet from "./CodeSnippet";
import styles from "../styles/CardContainer.module.css";

export default function CardContainer() {
  return (
    <div className={`d-grid g1 ${styles.container}`}>
      <Card
        command="mv FILE DESTINATION"
        description={
          <>
            Move <CodeSnippet i="FILE" /> to <CodeSnippet i="DESTINATION" />
            <br />
            Use the same directory in <CodeSnippet i="FILE" /> and{" "}
            <CodeSnippet i="DESTINATION" /> to rename <CodeSnippet i="FILE" />
            <br />
            <br />
            Examples: <br />
            move <CodeSnippet i="mv ~/file.txt ~/dir/file.txt" />
            <br />
            rename <CodeSnippet i="mv ~/file.txt ~/file2.txt" />
          </>
        }
      />
      <Card
        command="cp FILE DESTINATION"
        description={
          <>
            Copy <CodeSnippet i="FILE" /> to <CodeSnippet i="DESTINATION" />
          </>
        }
      />
      <Card
        command="rm [-rfvi] FILE"
        description={
          <>
            Delete <CodeSnippet i="FILE" />
            <br />
            <CodeSnippet i="-r" /> deletes recursively (for non-empty
            directories)
            <br />
            <CodeSnippet i="-f" /> force deletion
            <br />
            <CodeSnippet i="-v" /> verbose (print out files as they get deleted)
            <br />
            <CodeSnippet i="-i" /> request confirmation before deleting each
            file (must type "y" or "n")
            <br />
            Note that <CodeSnippet i="-i" /> overrides <CodeSnippet i="-f" />
          </>
        }
      />
      <Card
        command="rmdir DIR"
        description={
          <>
            Delete <CodeSnippet i="DIR" />
            <br />
            Note that <CodeSnippet i="DIR" /> must be <strong>empty</strong>.
          </>
        }
      />
    </div>
  );
}
