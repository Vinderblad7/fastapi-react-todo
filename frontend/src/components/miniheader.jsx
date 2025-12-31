import React from "react";

function MiniHeader() {
  return (
    <header className="mini-header">
      <nav className="mini-header-title">
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

export default MiniHeader;
