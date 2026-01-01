import React from "react";
import MiniHeaderRight from "./miniheader-right";

function RightSidebar() {
  return (
    <aside className="right-sidebar-container">
      <header className="right-sidebar-header-wrapper">
        <MiniHeaderRight />
      </header>
      <div className="firstRsidebar"></div>
    </aside>
  );
}

export default RightSidebar;
