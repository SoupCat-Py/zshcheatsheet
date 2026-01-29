import Card from "./Card";
// import CodeSnippet from "./CodeSnippet";
import styles from "../styles/CardContainer.module.css";

export default function CardContainer() {
  return (
    <section className={`d-flex flex-col d1 r1 ${styles.container}`}>
      <h2
        className={`size2 color-primary margin0 padding0 ${styles.subheader} ${styles.first}`}
        id="section1"
      >
        Section Header
      </h2>

      <div className={`d-grid g2 ${styles.section}`}>
        <Card command="hello" description="test" />
        <Card command="world" description="test" />
        <Card command="hello" description="test" />
        <Card command="world" description="test" />
        <Card command="hello" description="test" />
        <Card command="world" description="test" />
        <Card command="hello" description="test" />
        <Card command="world" description="test" />
        <Card command="hello" description="test" />
        <Card command="world" description="test" />
        <Card command="hello" description="test" />
        <Card command="world" description="test" />
        <Card command="hello" description="test" />
        <Card command="world" description="test" />
        <Card command="hello" description="test" />
        <Card command="world" description="test" />
        <Card command="hello" description="test" />
        <Card command="world" description="test" />
      </div>

      <h2
        className={`size2 color-primary margin0 padding0 ${styles.subheader}`}
        id="section2"
      >
        Section Header
      </h2>

      <div className={`d-grid g2 ${styles.section}`}>
        <Card command="hello" description="test" />
        <Card command="world" description="test" />
      </div>
    </section>
  );
}
