import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './components/context/DarkModeContext';

const filters = ['all','active','completed'];
function App() {

  const [filter,SetFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filter={filter} filters={filters} onFilterChange={SetFilter}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
