import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [done, setDone] = useState(false);

  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="checkbox"
        checked={done}
        onChange={e => {
          console.log(e);
          setDone(e.target.checked);
        }}
      />
      <button onClick={() => {
        setTitle('');
        setDone(false);
        onAddTodo(title, done);
      }}>Add</button>
    </>
  )
}
