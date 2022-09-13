import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./Pages/register/Registration";
import Filter from "./Pages/Filter";
import NikahNama from "./Pages/NikahNama";
import Blockchain from "./Pages/NikahInfo/Blockchain";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NikahNama />} />
        <Route path="/register" element={<Navigate to="1" replace={true} />} />
        <Route path="/register/:level" element={<Registration />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/blockchain" element={<Blockchain />} />
      </Routes>
    </div>
  );
}

export default App;
