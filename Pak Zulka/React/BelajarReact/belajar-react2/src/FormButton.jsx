function FormButton() {
  function handleClick(e) {
    console.log("Tombol diklik", e);
  }

  return <button onClick={handleClick}>Klik Saya</button>;
}

export default FormButton;
