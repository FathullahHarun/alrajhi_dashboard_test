import "./App.css";
import { usePeriodicRefresh } from "./hooks/usePeriodicRefresh";
import Slider from "./Slider";

function App() {
  usePeriodicRefresh();
  return (
    <div className="App">
      <Slider />
    </div>
  );
}

export default App;
