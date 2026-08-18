function UserCard(props) {
  return (
    <div className="card">
      <h3> {props.nama} </h3>
      <p>{props.jabatan} </p>
    </div>
  );
}

// pemakaain :
<UserCard nama="Ali" jabatan="Instruktur" />;
