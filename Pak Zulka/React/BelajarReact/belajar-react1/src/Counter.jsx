import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Jumlah: {count} </p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}
