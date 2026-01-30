import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={`d-grid ${styles.app}`}>
      <Header />
      <BodyContainer />
    </div>
  );
}

export default App;
