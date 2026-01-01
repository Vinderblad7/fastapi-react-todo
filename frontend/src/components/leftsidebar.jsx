import React from "react";
import MiniHeaderLeft from "./miniheader-left";

function LeftSidebar() {
  return (
    <aside className="left-sidebar-container">
      <header className="left-sidebar-header-wrapper">
        <MiniHeaderLeft />
      </header>
      <div className="firstLsidebar"></div>
      <div className="secondLsidebar"></div>
      <div className="thirdLsidebar"></div>
    </aside>
  );
}

export default LeftSidebar;
