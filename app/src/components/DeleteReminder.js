import { useState } from 'react';

export default function DeleteReminder({ onDeleteReminder }) {
    const [reminder, setReminder] = useState('');
    return (
        <button onClick={() => {
            setReminder('');
            onDeleteReminder(reminder);
        }}></button>
    )
}