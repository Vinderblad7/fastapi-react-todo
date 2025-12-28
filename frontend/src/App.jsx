import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Загрузка...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.msg))
      .catch((err) => setMessage("Ошибка: бэкенд не запущен или CORS тупит"));
  }, []);

  return (
    <div
      style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}
    >
      <h1>Связь с бэкендом:</h1>
      <h2 style={{ color: "green" }}>{message}</h2>
    </div>
  );
}

export default App;
