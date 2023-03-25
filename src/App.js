import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const filters=['all','active','completed'];
function App() {

  const [filter,Setfilter] = useState(filters[0]);
  return (
    <>
      <Header filter={filter} filters={filters} onFilterChange={Setfilter}/>
      <TodoList filter={filter}/>
    </>
  );
}

export default App;
