import React, { useState } from "react";
import "./ToDo.scss";

function ToDo({ task, id, action }) {
  const [checked, setCheck] = useState(false);

  function deleteTask() {
    action(id);
  }

  function checkStatus() {
    // const element = document.querySelector(`[checkbox-data="${id}"]`);
    if (checked) {
      setCheck(false);
      document.querySelector(`[text-data="${id}"]`).classList.remove("done");
    } else {
      setCheck(true);
      document.querySelector(`[text-data="${id}"]`).classList.add("done");
    }
  }

  return (
    <div className="singleTodoBox">
      <input type="checkbox" onChange={checkStatus} checkbox-data={id} />
      <h3 className="todoMessage" text-data={id}>
        {task}
      </h3>
      <button className="deleteButton" id={id} onClick={deleteTask}>
        delete
      </button>
    </div>
  );
}

export default ToDo;
