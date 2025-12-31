import React from "react";
import MiniHeader from "./miniheader";

function LeftSidebar() {
  return (
    <aside className="left-sidebar-container">
      <div className="sidebar-header-wrapper">
        <MiniHeader />
      </div>
      <div className="firstLsidebar"></div>
      <div className="secondLsidebar"></div>
      <div className="thirdLsidebar"></div>
    </aside>
  );
}

export default LeftSidebar;
