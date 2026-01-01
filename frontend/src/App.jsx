import { useEffect, useState } from "react";
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import PSP from "./assets/PSP.jpg";
import SH from "./assets/SH.jpg";
import LeftSidebar from "./components/leftsidebar";
import RightSidebar from "./components/rightsidebar";

function App() {
  return (
    <div className="main-layout">
      <LeftSidebar />

      <main className="content-center">
        <div className="header-container">
          <Header />
        </div>
        <div className="content-container">
          <TodoItem
            title="выучить React"
            description="Выучить основы React и создать простое приложение."
            image={PSP}
          />
          <TodoItem
            title="пройти курс по Python"
            description="Пройти курс по Python и создать простое приложение."
            image={SH}
          />
        </div>
      </main>

      <RightSidebar />
    </div>
  );
}

export default App;
