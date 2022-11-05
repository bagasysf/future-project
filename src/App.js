import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./containers/Landing";

function App() {
  return (
    <>
      <div className="font-inter">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
