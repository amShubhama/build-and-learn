import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './App.css';

function App() {

  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState({});

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo App</h1>
      <div className="bg-gray-900 shadow-lg rounded-2xl p-6 w-full max-w-md">
        <AddTodo isEdit={isEdit} setIsEdit={setIsEdit} id={id} />
        <hr className="my-4" />
        <Todos setId={setId} isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>
    </div>
  );
}

export default App