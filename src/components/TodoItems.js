import "./TodoItems.css";
const TodoItems = ({
  todoItem,
  handleDelete,
  toggleCompleted,
  handleEdit,
  setCurrentTodoText,
}) => {
  return (
    <div className="todo-list">
      <input
        // className="text-input"
        className={`text-input ${todoItem.completed ? "done" : ""}`}
        type="text"
        key={todoItem.id}
        value={todoItem.text}
        onChange={(e) =>
          setCurrentTodoText({ text: e.target.value, completed: false })
        }
        readOnly
      />

      <input
        // className={`check-btn done ${todoItem.completed ? "done" : ""}`}
        className="check-btn done"
        type="checkbox"
        defaultChecked={todoItem.completed}
        onClick={() => toggleCompleted(todoItem)}
      />

      <button
        className="edit-btn"
        type="submit"
        onClick={() => handleEdit(todoItem)}
      >
        Edit
      </button>

      <button
        className="delete-btn"
        type="submit"
        onClick={() => handleDelete(todoItem)}
      >
        Delete
      </button>
    </div>
  );
};
export default TodoItems;
