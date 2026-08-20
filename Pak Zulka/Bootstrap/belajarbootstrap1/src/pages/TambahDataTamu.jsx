import axios from "axios"
import { useState } from "react"
// import { useState, useEffect } from "react"



function TambahDataTamu() {
    // kita siapkan state untuk wadahnya
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    const [form, setForm] = useState({
        nama_tamu : "",
        email_tamu : "",
        komentar_tamu : "",
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
                .post("https://mytechs.my.id/data-siswa-api/api-buku-tamu.php", form)
                .then((response) => {
                    console.log(response);
                })
                .catch ((error) => {
                    console.error(error);
                }) 
                .finally(() => {
                    alert('done')
                })
    }


    return (
        <>
        <h1>Tambah Data Tamu</h1>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className="form-floating my-3">
                <input type="text" className="form-control" id="floatingName" placeholder="Nama" name="nama_tamu" value={form.nama_tamu} onChange={handleChange}/>
                <label htmlFor="floatingInput">Nama Tamu</label>
            </div>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" name="email_tamu" value={form.email_tamu} onChange={handleChange}/>
                <label htmlFor="floatingInput">Email Tamu</label>
            </div>

            
            <div className="form-floating my-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name="komentar_tamu" value={form.komentar_tamu} onChange={handleChange} ></textarea>
                <label htmlFor="floatingTextarea2">Komentar Tamu</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default TambahDataTamu