import "./Todo.css";

const Todo = ({ handleSubmit, currentTodoText, setCurrentTodoText }) => {
  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <input
          className="todo-text"
          type="text"
          placeholder="What's up for today?"
          value={currentTodoText}
          onChange={(e) => setCurrentTodoText(e.target.value)}
          autoFocus
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Todo;
