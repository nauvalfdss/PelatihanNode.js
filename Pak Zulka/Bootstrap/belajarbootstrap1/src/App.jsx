import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import BukuTamu from "./pages/BukuTamu";
import Galleri from "./pages/Galleri";
import DataUser from "./pages/DataUser";
import Coffee from "./pages/Coffee";
import DataTamu from "./pages/DataTamu";
import TambahDataTamu from "./pages/TambahDataTamu";
import EditDataTamu from "./pages/EditDataTamu";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/buku-tamu" element={<BukuTamu />} />
        <Route path="/galleri" element={<Galleri />} />
        <Route path="/data-user" element={<DataUser />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/data-tamu" element={<DataTamu />} />
        <Route path="/tambah-data-tamu" element={<TambahDataTamu />} />
        <Route path="/edit-data-tamu/:id" element={<EditDataTamu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
