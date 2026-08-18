import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import BukuTamu from "./pages/BukuTamu";
import Galleri from "./pages/Galleri";

function App() {
  return (
    // <BrowserRouter>
    //   <div className="countainer-fluid">
    //       <Navbar/>
    //   </div>
    //   <div className="container">
    //     <Route path="/" element={<Beranda />}/>
    //   </div>
    // </BrowserRouter>

    <BrowserRouter>
      <nav>
        <Link to="/">Beranda</Link>
        <Link to="/buku-tamu">BukuTamu</Link>
        <Link to="/galleri">Galleri</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Beranda />}/>
        <Route path="/buku-tamu" element={<BukuTamu />}/>
        <Route path="/galleri" element={<Galleri />}/>
        
      </Routes>
    </BrowserRouter>

    
  
    

  )
}

export default App





