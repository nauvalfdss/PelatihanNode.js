const { useState } = require("react");

function LoginForm() {
    const [email, setEmail] = useState(" ");
}

function handleSubmit(e) {
    e.preventDefault();
    console.log("Kirim:", email);
}

    return (
        form
    )