import React from "react";
import logo from "../assets/Logo.png";
import logo2x from "../assets/Logo@2x.png";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img
            src={logo}
            srcSet={`${logo} 1x, ${logo2x} 2x`}
            alt="Logo"
            className="logo-image"
          />
        </a>
        <span className="logo-text">To Do</span>
      </div>
      <nav className="title">
        <a href="/">Мои Задачи</a>
        <a className="add-btn" href="/createtasks">
          Добавить Задачу
        </a>
      </nav>
    </header>
  );
}

export default Header;
