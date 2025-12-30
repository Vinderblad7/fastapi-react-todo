import React from "react";
import Task from "../assets/Task.png";
function TodoItem({ title, description, image }) {
  return (
    <div className="task-card">
      <div className="task-content">
        <h3 className="task-title">{title}</h3>
        <p className="task-description">{description}</p>
        <button className="complete-btn">Выполнить</button>
      </div>
      <div className="task-image">
        <img src={image || Task} alt={title} />
      </div>
    </div>
  );
}

export default TodoItem;
