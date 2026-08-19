import { useState, useEffect } from "react"
import axios from "axios";

function Coffee() {
    // kita siapkan state untuk wadahnya
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
        // URL dari Endpooint Website resminya
            .get("https://api.sampleapis.com/coffee/iced")
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
    }, [])

    return(
        <>
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
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Ingredients</th>
                            <th scope="col">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.description}</td>
                                    <td>{post.ingredients}</td>
                                    <td>
                                        <img
                                            src={post.image}
                                            width="150"
                                        />
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

export default Coffee