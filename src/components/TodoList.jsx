function TodoList({ todos, deleteTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default TodoList;