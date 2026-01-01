import React from "react";
import avatarPlaceholder from "../assets/placeholder-avatar.png";

function MiniHeaderRight({ userAvatar = null }) {
  return (
    <header className="mini-header-right">
      <nav className="mini-header-right-title">
        <a className="account-btn" href="/account">
          Учетная запись
        </a>
        <a className="user-wrapper" href="/account">
          <div className="avatar-wrapper">
            <img
              src={userAvatar || avatarPlaceholder}
              alt="Avatar"
              className="avatar-img"
            />
          </div>
        </a>
      </nav>
    </header>
  );
}

export default MiniHeaderRight;
