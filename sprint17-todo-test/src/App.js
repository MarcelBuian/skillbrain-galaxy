import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';
import './App.css';

let nextId = 246;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
  { id: 245, title: 'Invtam react', done: true },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title, done) {
    setTodos(
      [
        {
          id: nextId,
          title: title,
          done: done,
        },
        ...todos,
      ]
    );

    nextId++;
  }

  function handleChangeTodo(nextTodo) {
    const newTodos = todos.map(todo => {
      if (todo.id === nextTodo.id) {
        return {...nextTodo};
      } else {
        return todo;
      }
    });

    setTodos(newTodos);

    // setTodos(todos.map(t => t.id === nextTodo.id ? {...nextTodo} : t));
  }

  function handleDeleteTodo(todoId) {
    const nextTodos = todos.filter(todo => {
      return todo.id !== todoId;
    })

    setTodos(nextTodos);

    // setTodos(todos.filter(t => t.id !== todoId));
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
