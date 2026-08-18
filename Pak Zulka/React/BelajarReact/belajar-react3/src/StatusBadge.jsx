function StatusBadge({ isLogin }) {
  if (isLogin) {
    return <p>Selamat datang Kembali</p>;
  }
  return <p>Silahkan Login Dahulu.</p>;
}

// Alternatif tenary didalam jsx:
{
  isLogin ? <Dashboard /> : <LoginForm />;
}

// Alternatif && ntuk tampil/sembunyi:
{
  errorMsg && <p className="error"> {errorMsg}</p>;
}
