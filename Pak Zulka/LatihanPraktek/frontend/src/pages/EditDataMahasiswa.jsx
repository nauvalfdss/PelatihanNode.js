import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditDataMahasiswa() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nama: "",
        kelas: "",
        email: "",
    });

    const [loading, setLoading] = useState(true);

    // Ambil data tamu berdasarkan ID
    const getDataMahasiswa = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/mahasiswa?id=${id}`
            );

            console.log("Response:", response.data);

            const data = response.data[0];

            setForm({
                nama: data.nama,
                kelas: data.kelas,
                email: data.email,
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Jalankan ketika halaman Edit dibuka
    useEffect(() => {
        getDataMahasiswa();
    }, [id]);

    // Menangani perubahan input
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Menyimpan perubahan
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `http://localhost:3000/api/mahasiswa?id=${id}`,
                form
            );

            console.log(response.data);

            alert("Data berhasil diupdate!");

            navigate("/");
        } catch (error) {
            console.error(error);

            alert("Data gagal diupdate!");
        }
    };

    if (loading) {
        return <p>Loading data...</p>;
    }

    return (
        <>
            <h1>Edit Data Mahasiswa</h1>
            <hr />

            <form onSubmit={handleUpdate}>

                <div className="form-floating my-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingName"
                        placeholder="Nama"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                    />

                    <label htmlFor="floatingName">
                        Nama Mahasiswa
                    </label>
                </div>

                <div className="form-floating my-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingName"
                        placeholder="Kelas"
                        name="kelas"
                        value={form.kelas}
                        onChange={handleChange}
                    />

                    <label htmlFor="floatingName">
                        Kelas Mahasiswa
                    </label>
                </div>

                

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="name@example.com"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />    

                    <label htmlFor="floatingEmail">
                        Email Mahasiswa
                    </label>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary me-2"
                >
                    Update
                </button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/mahasiswa")}
                >
                    Batal
                </button>

            </form>
        </>
    );
}

export default EditDataMahasiswa;
