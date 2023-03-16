import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DragDropImage from "./Drag-drop-image-project/drag-drop-files";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drag-drop-image" element={<DragDropImage />} />
      </Routes>
    </div>
  );
}
export default App;
