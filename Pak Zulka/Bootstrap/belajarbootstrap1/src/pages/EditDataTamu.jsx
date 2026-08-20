import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditDataTamu() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nama_tamu: "",
        email_tamu: "",
        komentar_tamu: "",
    });

    const [loading, setLoading] = useState(true);

    // Ambil data tamu berdasarkan ID
    const getDataTamu = async () => {
        try {
            const response = await axios.get(
                `https://mytechs.my.id/data-siswa-api/api-buku-tamu.php?id=${id}`
            );

            console.log("Response:", response.data);

            const data = response.data[0];

            setForm({
                nama_tamu: data.nama_tamu,
                email_tamu: data.email_tamu,
                komentar_tamu: data.komentar_tamu,
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Jalankan ketika halaman Edit dibuka
    useEffect(() => {
        getDataTamu();
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
                `https://mytechs.my.id/data-siswa-api/api-buku-tamu.php?id=${id}`,
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
            <h1>Edit Data Tamu</h1>
            <hr />

            <form onSubmit={handleUpdate}>

                <div className="form-floating my-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingName"
                        placeholder="Nama"
                        name="nama_tamu"
                        value={form.nama_tamu}
                        onChange={handleChange}
                    />

                    <label htmlFor="floatingName">
                        Nama Tamu
                    </label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="name@example.com"
                        name="email_tamu"
                        value={form.email_tamu}
                        onChange={handleChange}
                    />    

                    <label htmlFor="floatingEmail">
                        Email Tamu
                    </label>
                </div>

                <div className="form-floating my-3">
                    <textarea
                        className="form-control"
                        placeholder="Komentar"
                        id="floatingTextarea2"
                        name="komentar_tamu"
                        value={form.komentar_tamu}
                        onChange={handleChange}
                    ></textarea>

                    <label htmlFor="floatingTextarea2">
                        Komentar Tamu
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
                    onClick={() => navigate("/")}
                >
                    Batal
                </button>

            </form>
        </>
    );
}

export default EditDataTamu;
