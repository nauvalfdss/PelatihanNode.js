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
    const [error, setError] = useState("");

    const getDataMahasiswa = async () => {
        try {
            setLoading(true);
            setError("");

            console.log("ID yang akan diambil:", id);

            const response = await axios.get(
                `http://localhost:3000/api/mahasiswa/${id}`
            );

            console.log("Data dari backend:", response.data);

            const data = response.data;

            setForm({
                nama: data.nama,
                kelas: data.kelas,
                email: data.email,
            });

        } catch (error) {
            console.error("Gagal mengambil data:", error);

            setError(
                error.response?.data?.message ||
                "Data mahasiswa gagal diambil"
            );
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getDataMahasiswa();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            console.log("Update ID:", id);
            console.log("Data update:", form);

            const response = await axios.put(
                `http://localhost:3000/api/mahasiswa/${id}`,
                form
            );

            console.log("Response update:", response.data);

            alert("Data berhasil diupdate!");

            navigate("/mahasiswa");

        } catch (error) {
            console.error("Gagal update:", error);

            alert(
                error.response?.data?.message ||
                "Data gagal diupdate!"
            );
        }
    };

    if (loading) {
        return (
            <div className="text-center mt-4">
                <div
                    className="spinner-border text-primary"
                    role="status"
                >
                    <span className="visually-hidden">
                        Loading...
                    </span>
                </div>

                <p>Loading data mahasiswa...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger mt-4">
                {error}
            </div>
        );
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
                        id="floatingKelas"
                        placeholder="Kelas"
                        name="kelas"
                        value={form.kelas}
                        onChange={handleChange}
                    />

                    <label htmlFor="floatingKelas">
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