import axios from "axios"
import { useState } from "react"
// import { useState, useEffect } from "react"



function TambahDataMahasiswa() {
    // kita siapkan state untuk wadahnya
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    const [form, setForm] = useState({
        nama : "",
        kelas : "",
        email : "",
    })

    // fungsi untuk menyimpan data inputan ke state
    const handleChange = (e) => {
        // alert(e.target.value)
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    // fungsi untuk menyimpan ke api
    const handleSubmit = async (e) => {
        e.preventDefault();
            await 
                axios
                .post("http://localhost:3000/api/mahasiswa", form)
                .then((response) => {
                    console.log(response);
                })
                .catch ((error) => {
                    console.error(error);
                }) 
                .finally(() => {
                    alert('Data Berhasil di Simpan')
                })
    }


    return (
        <>
        <h1>Tambah Data Mahasiswa</h1>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className="form-floating my-3">
                <input type="text" className="form-control" id="floatingName" placeholder="Nama" name="nama" value={form.nama} onChange={handleChange}/>
                <label htmlFor="floatingInput">Nama Mahasiwa</label>
            </div>

            <div className="form-floating my-3">
                <input type="text" className="form-control" id="floatingName" placeholder="Kelas" name="kelas" value={form.kelas} onChange={handleChange}/>
                <label htmlFor="floatingInput">Kelas Mahasiwa</label>
            </div>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" name="email" value={form.email} onChange={handleChange}/>
                <label htmlFor="floatingInput">Email Mahasiswa</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default TambahDataMahasiswa;