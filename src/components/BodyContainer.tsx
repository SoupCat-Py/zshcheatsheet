import CardContainer from "./CardContainer";
import Aside from "./Aside";
import styles from "../styles/BodyContainer.module.css";

export default function BodyContainer() {
  return (
    <div className={`d-grid g1 ${styles.container}`}>
      <div className={styles.aside}>
        <Aside />
      </div>
      <CardContainer />
    </div>
  );
}
