import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInButton from "./components/SignInButton";
import SignInSuccess from "./components/SignInSuccess";

// TODO: Cleanup, fix styles
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<SignInButton />} />
          <Route path="/success" element={<SignInSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
