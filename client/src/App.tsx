import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router basename="/portfolio">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Router>
  );
}

export default App;
