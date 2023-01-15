import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
