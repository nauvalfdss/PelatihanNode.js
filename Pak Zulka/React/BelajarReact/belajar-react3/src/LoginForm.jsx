const { useState } = require("react");

function LoginForm() {
    const [email, setEmail] = useState(" ");
}

function handleSubmit(e) {
    e.preventDefault();
    console.log("Kirim:", email);
}

    return (
        <form onSubmit={handleSubmit}>
            <input value={email}
            onChange={ (e) => setEmail(e.target.value)}
             />
             <button type="submit">Kirim</button>
        </form>
    )