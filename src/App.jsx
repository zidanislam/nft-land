import AnimatedCursor from "react-animated-cursor";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={6}
        outerSize={25}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "2px solid var(--cursor-color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
