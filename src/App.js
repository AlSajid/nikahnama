import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./Pages/register/Registration";
import NikahNama from "./Pages/NikahNama";
import Blockchain from "./Pages/NikahInfo/Blockchain";
import Search from "./Pages/NikahInfo/Search";
import LookUp from "./Pages/NikahInfo/LookUp";
import KajiLogin from "./Pages/KajiLogin/KajiLogin";
import KajiSignUp from "./Pages/KajiSignUp/KajiSignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NikahNama />} />
        <Route path="/register" element={<Navigate to="1" replace={true} />} />
        <Route path="/register/:level" element={<Registration />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:nid" element={<LookUp />} />
        <Route path="/login" element={<KajiLogin />} />
        <Route path="/signup" element={<KajiSignUp />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
