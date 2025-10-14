import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, completedTodo } from '../features/todo/todoSlice';
import {
    CheckCircleIcon,
    PencilSquareIcon,
    TrashIcon,
} from '@heroicons/react/24/solid';

const Todos = ({ isEdit, setIsEdit, setId }) => {

    const completedTodos = useSelector((state) => state.completedTodos);
    const pendingTodos = useSelector((state) => state.pendingTodos);
    const dispatch = useDispatch();
    const totalTodos = [...completedTodos, ...pendingTodos];
    totalTodos.reverse();
    return (
        <div className="flex flex-col gap-3">
            {totalTodos.length === 0 ? (
                <p className="text-center text-gray-300 italic">No todos yet. Add one!</p>
            ) : (
                totalTodos.map((todo) => (
                    <div
                        key={todo.id}
                        className={`flex flex-col sm:flex-row justify-between items-start sm:items-center 
                        bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 
                        hover:shadow-lg hover:border-gray-300 transition-all duration-200 
                        ${todo.status ? 'opacity-80' : ''}`}
                    >
                        {/* Todo Text */}
                        <span
                            className={`text-gray-800 text-base sm:text-lg font-medium ${todo.status ? 'line-through text-gray-500' : ''
                                }`}
                        >
                            {todo.text}
                        </span>

                        {/* Buttons */}
                        <div className="flex gap-2 mt-3 sm:mt-0">
                            <button
                                onClick={() => { dispatch(completedTodo(todo.id)); setIsEdit(false) }}
                                className={`flex items-center gap-1 bg-green-500 hover:bg-green-600 
                            text-white text-sm font-semibold px-3 py-1.5 rounded-lg 
                            shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95`}
                            >
                                <CheckCircleIcon className="h-4 w-4 text-white" />
                                <span>Complete</span>
                            </button>

                            <button
                                onClick={() => {
                                    setIsEdit(!isEdit);
                                    setId({ id: todo.id, text: todo.text });
                                }}
                                className={`flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 
                            text-white text-sm font-semibold px-3 py-1.5 rounded-lg 
                            shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95`}
                            >
                                <PencilSquareIcon className="h-4 w-4 text-white" />
                                <span>Update</span>
                            </button>

                            <button
                                onClick={() => { dispatch(removeTodo(todo.id)); setIsEdit(false) }}
                                className={`flex items-center gap-1 bg-red-500 hover:bg-red-600 
                            text-white text-sm font-semibold px-3 py-1.5 rounded-lg 
                            shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95`}
                            >
                                <TrashIcon className="h-4 w-4 text-white" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Todos;