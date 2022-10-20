import { useState } from 'react';

export default function CreateTodo({ onEnterTodo }) {
  const [reminder, setReminder] = useState('');
  return (
    <>
      <input
        placeholder="New Reminder"
        value={reminder}
        onChange={e => setReminder(e.target.value)}
      />
      <button onClick={() => {
        setReminder('');
        onEnterTodo(reminder);
      }}>Enter</button>
    </>
  )
}