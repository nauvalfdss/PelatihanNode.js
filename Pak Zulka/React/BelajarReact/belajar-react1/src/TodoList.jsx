const todos = [
  { id: 1, text: "Belajar JSX" },
  { id: 2, text: "Belajar Hooks" },
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text} </li>
      ))}
    </ul>
  );
}
