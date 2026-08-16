function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title} </h3>
      {children}
    </div>
  );
}

Card.defaultProps = { title: "Tanpa Judul" };

// Pemakaian:
<Card title="Materi 1">
  <p>Isi Konten...</p>
</Card>;
