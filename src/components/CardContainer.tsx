import Card from "./Card";
// import CodeSnippet from "./CodeSnippet";
import styles from "../styles/CardContainer.module.css";

export default function CardContainer() {
  return (
    <section className="d-flex flex-col g1 p1">

      <h2 className={`size2 color-primary margin0 padding0 ${styles.subheader} ${styles.first}`}>
        Section Header
      </h2>

      <div className={`d-grid g1 ${styles.section}`}>
        <Card command="hello" description="test"/>
        <Card command="world" description="test"/>
      </div>

      <h2 className={`size2 color-primary margin0 padding0 ${styles.subheader}`}>
        Section Header
      </h2>

      <div className={`d-grid g1 ${styles.section}`}>
        <Card command="hello" description="test"/>
        <Card command="world" description="test"/>
      </div>

    </section>
  );
}
