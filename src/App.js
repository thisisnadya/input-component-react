import "./styles.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Inputs from "./Components/Inputs/Inputs";

export default function App() {
  return (
    <div className="main d-flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="inputs p-5">
        <h5>Inputs</h5>
        <Inputs />
      </div>
    </div>
  );
}
