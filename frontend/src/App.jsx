import { useEffect, useState } from "react";
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import Dog from "./assets/Dog.jpg";

function App() {
  return (
    <div className="container">
      <Header />
      <TodoItem
        title="выучить React"
        description="Выучить основы React и создать простое приложение."
        image={Dog}
      />
      <TodoItem
        title="пройти курс по Python"
        description="Пройти курс по Python и создать простое приложение."
      />
    </div>
  );
}

export default App;
