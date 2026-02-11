import Card from "./Card";
import CodeSnippet from "./CodeSnippet";
import styles from "../styles/CardContainer.module.css";

export default function CardContainer() {
  return (
    <section className={`d-flex flex-col d1 r1 ${styles.container}`}>
      <h2
        className={`size2 color-primary m0 p0 ${styles.subheader} ${styles.first}`}
        id="navigate-display"
      >
        Navigate & Display
      </h2>

      <div className={`d-grid g2 ${styles.section}`}>
        <Card command="pwd" description={<>Print the working directory</>} />
        <Card
          command="cat FILE"
          description={
            <>
              Print the contents of <CodeSnippet i="FILE" />
            </>
          }
        />
        <Card
          command="cd DIR"
          description={
            <>
              Move to <CodeSnippet i="DIR" />
              <br />
              <CodeSnippet i="DIR" /> can be an absolute or relative path
              <br />
              <br />
              A few shortcuts you can use:
              <br />
              <CodeSnippet i= "cd" /> go to root (<CodeSnippet i="~" />).
              <br />
              <CodeSnippet i= "cd -" /> go back to the previous dir.
              <br />
              <CodeSnippet i= "cd ../" /> go back one step in the file tree.
            </>
          }
        />
        <Card
          command="ls [DIR]"
          description={
            <>
              List the contents of a directory
              <br />
              If you don't provide <CodeSnippet i="DIR" />, it will list the
              working dir
              <br />
              There are a <strong>lot</strong> other arguments you can use, so I
              recommend running <CodeSnippet i="man ls" /> to see what they all
              do.
            </>
          }
        />
        <Card
          command="head [-n] [-c] NUM FILE"
          description={
            <>
              Print the first <CodeSnippet i="NUM" /> lines or bytes of <CodeSnippet i="FILE" />
              <br />
              <CodeSnippet i="-n" /> lines mode
              <br />
              <CodeSnippet i="-c" /> bytes mode
              <br />
            </>
          }
        />
        <Card
          command="tail [-n] [-c] NUM FILE"
          description={
            <>
              Print the last <CodeSnippet i="NUM" /> lines or bytes of <CodeSnippet i="FILE" />
              <br />
              <CodeSnippet i="-n" /> lines mode
              <br />
              <CodeSnippet i="-c" /> bytes mode
              <br />
            </>
          }
        />
        <Card
          command="open FILE [-a APP]"
          description={
            <>
              Open <CodeSnippet i="FILE" />
              <br />
              It also works with directories.
              <br />
              You can optionally use <CodeSnippet i="-a" /> to specify which app to use. Leaving this out uses the file/dir's default app.
              <br />
              Example: <CodeSnippet i='open index.html -a "VS Code"' />
            </>
          }
        />
        <Card
          command="wc [-clw] FILE"
          description={
            <>
              Print the word and character count of <CodeSnippet i="FILE" />
              <br />
              <CodeSnippet i="-c" /> print the amount of bytes
              <br />
              <CodeSnippet i="-l" /> print the amount of lines
              <br />
              <CodeSnippet i="-w" /> print the amount of words
            </>
          }
        />
      </div>

      <hr className={styles.hr} />

      <h2
        className={`size2 color-primary m0 p0 ${styles.subheader}`}
        id="dir-file-creation"
      >
        Dir & File Creation
      </h2>

      <div className={`d-grid g2 ${styles.section}`}>
        <Card
          command="mkdir NAME"
          description={
            <>
              Create a directory called <CodeSnippet i="NAME" />
              <br />
              <CodeSnippet i="NAME" /> can be an absolute or relative path]
            </>
          }
        />
        <Card
          command="touch FILENAME"
          description={
            <>
              Create a file called <CodeSnippet i="FILENAME" />
              <br />
              <CodeSnippet i="FILENAME" /> can be an absolute or relative path
              <br />
              Remember to include the extension (such as .txt)
            </>
          }
        />
      </div>

      <hr className={styles.hr} />

      <h2
        className={`size2 color-primary m0 p0 ${styles.subheader}`}
        id="move-copy-delete"
      >
        Move, Copy, Delete
      </h2>

      <div className={`d-grid g2 ${styles.section}`}>
        <Card
          command="mv [-n] FILE DESTINATION"
          description={
            <>
              Move <CodeSnippet i="FILE" /> to <CodeSnippet i="DESTINATION" />
              <br />
              Use the same directory in <CodeSnippet i="FILE" /> and <CodeSnippet i="DESTINATION" /> to rename <CodeSnippet i="FILE" />
              <br />
              <CodeSnippet i="-n" /> prevents overwriting existing files.
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
              <CodeSnippet i="-v" /> verbose (print out files as they get
              deleted)
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

      <hr className={styles.hr} />

      <h2
        className={`size2 color-primary m0 p0 ${styles.subheader}`}
        id="combining-commands"
      >
        Combining Commands
      </h2>

      <div className={`d-grid g2 ${styles.section}`}>
        <Card
          command="COMMAND > FILE"
          description={
            <>
              Pipe the output of <CodeSnippet i="COMMAND" /> into <CodeSnippet i="FILE" />
              <br />
              Note that this writes at the <strong>beginning</strong> of the file and replaces any content.
              <br />
              Example: <CodeSnippet i='echo "hello world" > file.txt' />
              <br />
              <br />
              If you want to <strong>append</strong> to the end of the file, use <CodeSnippet i=">>" /> instead.
              <br />
              Example: <CodeSnippet i='echo "foo bar" >> list.md' />
            </>
          }
        />
        <Card
          command="COMMAND_1 | COMMAND_2"
          description={
            <>
              Pipe the output of <CodeSnippet i="COMMAND_1" /> into <CodeSnippet i="COMMAND_2" />
              <br />
              Basically run <CodeSnippet i="COMMAND_1" /> with <CodeSnippet i="COMMAND_2" /> as input.
              <br />
              Example: <CodeSnippet i="head -n 5 file.txt | tail -n 2" />
            </>
          }
        />
      </div>

      <hr className={styles.hr} />

      <h2
        className={`size2 color-primary m0 p0 ${styles.subheader}`}
        id="miscellaneous"
      >
        Miscellaneous
      </h2>

      <div className={`d-grid g2 ${styles.section}`}>
        <Card
          command="man COMMAND"
          description={
            <>
              Show the manual for <CodeSnippet i="COMMAND" />
              <br />
              This is pretty handy to see what all the parameters do.
            </>
          }
        />
        <Card
          command="alias ALIAS=COMMAND"
          description={
            <>
              Make an alias for a <CodeSnippet i="COMMAND" />
              <br />
              <CodeSnippet i= "COMMAND" /> may have parameters, but you'll need to use quotations.
              <br />
              While this method is viable, I recommend opening <CodeSnippet i="./zshrc" /> and adding your alias there (it's the same format).
              <br />
              <br />
              Examples:
              <br />
              <CodeSnippet i='alias fetch=fastfetch'/>
              <br />
              <CodeSnippet i='alias config="open ~/.zshrc"'/>
              <br />
              <CodeSnippet i='alias reload="source ~/.zshrc"'/>
            </>
          }
        />
        <Card
          command="export VARNAME = VALUE"
          description={
            <>
              Make a variable for your current zsh session.
              <br />
              You can use <CodeSnippet i="echo $VARNAME" /> to print out your variable.
              <br />
              Example: <CodeSnippet i='export path="~/downloads/data.json"' />
            </>
          }
        />
      </div>

    </section>
  );
}
