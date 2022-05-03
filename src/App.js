import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Selection from "./component/selection/Selection";
import Configure from "./component/configure/Configure";
import Signup from "./component/signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/Configure" element={<Configure />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;
