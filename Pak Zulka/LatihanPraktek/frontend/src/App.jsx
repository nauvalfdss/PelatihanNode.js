import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import DataMahasiswa from "./pages/DataMahasiswa";
import EditDataMahasiswa from "./pages/EditDataMahasiswa";
import TambahDataMahasiswa from "./pages/TambahDataMahasiswa";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/mahasiswa" element={<DataMahasiswa />} />
        <Route path="/edit-data-mahasiswa/:id" element={<EditDataMahasiswa />} />
        <Route path="/tambah-data-mahasiswa" element={<TambahDataMahasiswa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
