import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DataMahasiswa() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get("http://localhost:3000/api/mahasiswa")
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleDelete = async (id) => {
        const konfirmasi = window.confirm(
            "Apakah Anda Yakin Ingin Menghapus Data Ini?"
        );

        if (!konfirmasi) {
            return;
        }

        axios
            .delete(
                `http://localhost:3000/api/mahasiswa/${id}`
            )
            .then((response) => {
                alert("Data Berhasil di Hapus");
                getData();
            })
            .catch((error) => {
                console.error(error);
                alert("Data Gagal di Hapus");
            });
    };

    return (
        <>
            <h1>Data Mahasiswa</h1>
            <hr />

            <Link
                className="btn btn-primary col-12 my-3"
                to="/tambah-data-mahasiswa"
            >
                Tambah
            </Link>

            {loading && (
                <div>
                    <div
                        className="spinner-border text-primary"
                        role="status"
                    >
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </div>

                    <p>Loading...</p>
                </div>
            )}

            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}

            {!loading && !error && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama Mahasiswa</th>
                            <th>Kelas Mahasiswa</th>
                            <th>Email Mahasiswa</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.nama}</td>
                                <td>{post.kelas}</td>
                                <td>{post.email}</td>

                                <td>
                                    <Link
                                        className="btn btn-success me-2 my-2"
                                        to={`/edit-data-mahasiswa/${post.id}`}
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger "
                                        onClick={() =>
                                            handleDelete(post.id)
                                        }
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default DataMahasiswa;
