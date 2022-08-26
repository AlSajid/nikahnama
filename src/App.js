import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./Pages/register/Registration";
import Filter from "./Pages/Filter";
import NikahNama from "./Pages/NikahNama";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NikahNama />} />
        <Route path="/register" element={<Navigate to="1" replace={true} />} />
        <Route path="/register/:level" element={<Registration />} />
        {/* <Route path="/register/1" element={<Registration />} /> */}
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </div>
  );
}

export default App;
