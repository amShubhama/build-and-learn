import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodoName } from '../features/todo/todoSlice';
import { PlusCircleIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

const AddTodo = ({ isEdit, setIsEdit, id }) => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    // Auto-focus when editing
    useEffect(() => {
        if (isEdit && inputRef.current) {
            setInput(id.text);
            inputRef.current.focus();
        } else {
            setInput('');
        }
    }, [isEdit]);

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() === '') {
            inputRef.current.focus();
            alert('Enter todo name');
        }

        else if (isEdit) {
            dispatch(updateTodoName({ id: id.id, text: input.trim() }));
        } else {
            dispatch(addTodo(input.trim()));
        }

        setInput('');
        setIsEdit(false);
    };

    return (
        <form
            onSubmit={addTodoHandler}
            className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
        >
            {/* Input Field */}
            <input
                type="text"
                ref={inputRef}
                placeholder="Enter a new todo..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-2 
                   text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 
                   placeholder-gray-500 text-sm sm:text-base shadow-sm transition-all duration-200"
            />

            {/* Button */}
            <button
                type="submit"
                className={`group flex items-center justify-center gap-2 font-semibold px-6 py-2 sm:py-2.5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 ${isEdit
                    ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300 text-white'
                    }`}
            >
                {isEdit ? (
                    <>
                        <PencilSquareIcon className="h-5 w-5 text-white group-hover:rotate-6 transition-transform" />
                        <span>Update</span>
                    </>
                ) : (
                    <>
                        <PlusCircleIcon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                        <span>Add</span>
                    </>
                )}
            </button>
        </form>
    );
};

export default AddTodo;