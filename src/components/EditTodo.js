import "./EditTodo.css";

const EditTodo = ({
  setCurrentTodoText,
  currentTodoText,
  updateSave,
  cancel,
}) => {
  return (
    <div className="todo-container">
      <form onSubmit={updateSave}>
        <input
          className="text-input todo-text save-texts"
          type="text"
          placeholder="What's the new task?"
          value={currentTodoText}
          onChange={(e) => setCurrentTodoText(e.target.value)}
          autoFocus
        />
        <button
          className="save-btn"
          type="submit"
          onClick={(e) => updateSave(e)}
        >
          Save
        </button>
        <button className="cancel-btn" type="submit" onClick={(e) => cancel(e)}>
          X
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
