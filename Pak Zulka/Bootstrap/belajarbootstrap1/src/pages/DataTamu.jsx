import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";


function DataTamu() {
    // kita siapkan state untuk wadahnya
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getData();
        
    }, [])

    const getData = () => {
        axios
            // URL dari Endpooint Website resminya
            .get("https://mytechs.my.id/data-siswa-api/api-buku-tamu.php")
            // Jika Berhasil Mendapatkan Respone
            .then((response) => {
                console.log(response.data)
                setPosts(response.data);
            })
            // Jika Gagal Mendapatkan Respone
            .catch((error) => {
                setError(error.message);

            })
            // Jika selesai (Berhasil atau gagal tetap dijalankan)
            .finally(() => {
                setLoading(false);

            })
    }

    const handleDelete = async (id) => {
        const konfirmasi = window.confirm (
            "Apakah Anda Yakin Ingin Menghapus Data Ini?"
        );
        // kalau kotak konfirmasinya bernilai false maka tidak akan melakukan apa2
        if (!konfirmasi) {
            return;
        }
        axios 
            .delete(`https://mytechs.my.id/data-siswa-api/api-buku-tamu.php?id=${id}`)
                .then((response) => {
                    alert("Data Berhasil di Hapus")
                    getData()
                })
                .catch((error) => {
                    alert("Data Gagal di Hapus")
                })
                .finally(() =>{
                })
            
    }

    return(
        <>

        <h1>Data Tamu dan Komentar atau Pesannya</h1>
        <hr />
        <Link type="button" ClassName="btn btn-primary col-12 my-3" to="/tambah-data-tamu">
        Tambah
        </Link>
            {
                loading && (
                    <div>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">
                                Loading...
                            </span>
                        </div>
                        <p>Loading...</p>
                    </div>
                )
            }
            {
                error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )
            }

            {
                !loading && !error && (
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nama Tamu</th>
                            <th scope="col">Email Tamu</th>
                            <th scope="col">Komentar Tamu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id_tamu}>
                                    <td>{post.id_tamu} </td>
                                    <td>{post.nama_tamu} </td>
                                    <td>{post.email_tamu} </td>
                                    <td>{post.komentar_tamu} </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDelete(post.id_tamu)}>
                                            Hapus
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                )
            }
            
        </>
    )
}

export default DataTamu