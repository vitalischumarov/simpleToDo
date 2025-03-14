import { useState } from "react";
import "./App.scss";
import InputField from "./components/InputField";
import SaveButton from "./components/SaveButton";
import ToDo from "./components/ToDo";

function App() {
  function createRandomID() {
    return Math.floor(Math.random() * (1000 - 1 + 1) + 1);
  }

  const [listOfAllToDos, setNewToDo] = useState([]);

  function deleteTask(id) {
    console.log(id);
  }

  function pressedSaveButton() {
    if (input !== "") {
      const todo = {
        task: input,
        id: createRandomID(),
      };

      setNewToDo([...listOfAllToDos, todo]);
      setInput("");
      console.log(listOfAllToDos);
    }
  }

  const [input, setInput] = useState("");
  function handleInput(event) {
    const newInput = event.target.value;
    setInput(newInput);
  }

  return (
    <div className="app">
      <h1 className="title">To Do App</h1>
      <div className="topSection">
        <InputField text={input} action={handleInput} />
        <SaveButton action={pressedSaveButton} />
      </div>
      <div className="todoBlock">
        {listOfAllToDos.map((element) => {
          return (
            <ToDo
              task={element.task}
              id={element.id}
              action={deleteTask}
            ></ToDo>
          );
        })}
      </div>
    </div>
  );
}

export default App;
