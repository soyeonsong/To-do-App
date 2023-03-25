import React, { useState } from 'react';
import AddTodo from '../AddtTodo/AddTodo';
import Todo from '../Todo/Todo'; 

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t))); /*6*/
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id)); /*7*/
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo /*1*/
            key={item.id} /*2*/
            todo={item} /*3*/
            onUpdate={handleUpdate} /*4*/
            onDelete={handleDelete} /*5*/
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}



