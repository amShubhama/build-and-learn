import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    completedTodos: [],
    pendingTodos: []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                status: false
            }
            state.pendingTodos.push(todo);
        },
        removeTodo: (state, action) => {
            state.completedTodos = state.completedTodos.filter((todo) =>
                todo.id !== action.payload);
            state.pendingTodos = state.pendingTodos.filter((todo) =>
                todo.id !== action.payload);
        },
        completedTodo: (state, action) => {
            const result = state.pendingTodos.find(todo => todo.id === action.payload);
            result.status = true;
            state.pendingTodos = state.pendingTodos.filter((todo) =>
                todo.id !== action.payload
            )
            state.completedTodos.push(result);
        },
        updateTodoName: (state, action) => {
            state.pendingTodos = state.pendingTodos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
            state.completedTodos = state.completedTodos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        }
    }
});

export const { addTodo, removeTodo, completedTodo, updateTodoName } = todoSlice.actions;
export default todoSlice.reducer;