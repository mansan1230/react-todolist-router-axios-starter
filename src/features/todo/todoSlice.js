import { createSlice } from "@reduxjs/toolkit";

const initTodos = [
  {
    id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
    text: "todo example",
    done: true,
  },
  {
    id: "dd53dc26-b061-6b40-dd99-82b85dd2ce90",
    text: "first todo item",
    done: false,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },

    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    addTodos: (state, action) => {
      return action.payload;
    },
    putTestUpdate: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text}: todo
      );

      
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo,addTodos,putTestUpdate } = todoSlice.actions;

export default todoSlice.reducer;
