import { useEffect, useState } from "react";
import TodoItems from "./components/TodoItems";
import EditTodo from "./components/EditTodo";
import Todo from "./components/Todo";
import "./components/App.css";

const App = () => {
  const [currentTodoText, setCurrentTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUpdate, setCurrentUpdate] = useState("");

  useEffect(() => {
    let storage = JSON.parse(window.localStorage.getItem("todos"));

    if (storage) {
      setTodos(storage);
    } else {
      setTodos([]);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    let id = new Date().getTime();
    let todoText = currentTodoText;
    let completed = false;

    if (todoText === "") {
      alert(`Please enter a task!`);
      return;
    }
    setTodos((prevTodos) => {
      let updatedTodos = [
        ...todos,
        { id: id, text: todoText, completed: completed },
      ];
      window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });

    setCurrentTodoText("");
  }

  // function toggleCompleted(todoItem) {
  //   let updatedTodos = [...todos];
  //   updatedTodos[todoItem].completed = !updatedTodos[todoItem].completed;
  //   setTodos(updatedTodos);
  //   window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  //   return updatedTodos;
  // }

  function toggleCompleted(todoItem) {
    let updatedTodos = [...todos].map((item) => {
      if (item.id === todoItem.id) {
        todoItem.completed = !todoItem.completed;
        alert(`Task completed`);
      }
      return item;
    });
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return updatedTodos;
  }

  // function toggleCompleted(todoItem) {
  //   let updatedTodos = JSON.parse(localStorage.getItem("todos"));
  //   for (let i = 0; i < updatedTodos.length; i++) {
  //     if (updatedTodos[i].todoItem === todoItem) {
  //       if (updatedTodos[i].completed === "") {
  //         updatedTodos[i].completed = "done";
  //       } else {
  //         updatedTodos[i].completed = "";
  //       }
  //       break;
  //     }
  //   }
  //   setTodos(updatedTodos);
  // }

  function handleDelete(todoItem) {
    alert(`Deleting Task`);
    setTodos((prevTodos) => {
      let updatedTodos = [...todos].filter((item) => item.id !== todoItem.id);

      window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  function handleEdit(todoItem) {
    setIsEditing(true);
    setCurrentTodoText(todoItem.text);

    setCurrentUpdate(todoItem.id);
    alert(`You are about to edit this task`);
  }

  function updateSave(e) {
    e.preventDefault();

    let updatedTodoText = currentTodoText;
    let updatedTodos = todos.map((item) => {
      if (item.id === currentUpdate) {
        item.text = updatedTodoText;
        alert(`Task updated and saved`);
      }
      return item;
    });

    setTodos([...updatedTodos]);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setIsEditing(false);
    setCurrentTodoText("");
  }
  function cancel(e) {
    e.preventDefault();
    setIsEditing(false);
    setCurrentTodoText("");
    alert(`Task update canceled`);
  }

  return (
    <div className="App">
      <h2 className="todo-heading">Hey, Let's Get Some Tasks Done!</h2>

      {!isEditing && (
        <Todo
          currentTodoText={currentTodoText}
          handleSubmit={handleSubmit}
          setCurrentTodoText={setCurrentTodoText}
          isEditing={isEditing}
        />
      )}

      {isEditing && (
        <EditTodo
          currentTodoText={currentTodoText}
          updateSave={updateSave}
          setCurrentTodoText={setCurrentTodoText}
          cancel={cancel}
        />
      )}

      {todos.map((item) => {
        return (
          <TodoItems
            key={item.id}
            todoItem={item}
            handleDelete={handleDelete}
            toggleCompleted={toggleCompleted}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
};
export default App;
