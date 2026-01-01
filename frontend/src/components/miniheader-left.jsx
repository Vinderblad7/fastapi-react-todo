import React from "react";

function MiniHeaderLeft() {
  return (
    <header className="mini-header-left">
      <nav className="mini-header-left-title">
        <a className="remind-btn" href="/notifications">
          Уведомления
        </a>
        <a className="done-tasks-btn" href="/donetasks">
          Выполненные задачи
        </a>
      </nav>
    </header>
  );
}

export default MiniHeaderLeft;
