import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active'; /*12*/
    onUpdate({ ...todo, status }); /*13*/
  };
  const handleDelete = () => onDelete(todo); /*14*/
  return (
    <li>
      <input
        type='checkbox'
        id='checkbox'
        checked={status === 'completed'} /*10*/
        onChange={handleChange} /*11*/
      />
      <label htmlFor='checkbox'>{todo.text}</label> /*8*/
      <span>
        <button onClick={handleDelete}>
          <FaTrashAlt /> /*9*/
        </button>
      </span>
    </li>
  );
}
