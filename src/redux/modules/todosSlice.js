import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getTodo, createTodo, deleteTodo, updateTodo } from "../../apis/TodoApis/todoAxios";

// 비동기 액션 생성자
export const __getTodo = createAsyncThunk("getTodo", async () => {
    const response = await getTodo();
    console.log(response);
    return response;
});

export const __createTodo = createAsyncThunk(
  "createTodo",
  async (newTodo) => {
      const response = await createTodo(newTodo);
      return response;
  }
);

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
      await deleteTodo(id);
      return id;
  }
);

export const __updateTodo = createAsyncThunk(
  "todos/updateTodoAsync",
  async (updatedTodo) => {
      const response = await updateTodo(updatedTodo);
      return response;
    }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  extraReducers:(builder) => {
    builder.addCase(__getTodo.fulfilled, (state, action) => {
      state.todos = [...action.payload];
    });
    builder.addCase(__createTodo.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload];
    });
    builder.addCase(__deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
    builder.addCase(__updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) => 
      todo.id === action.payload.id ? {...todo, isDone: !todo.isDone} : todo
      );
    });
  },
});

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getTodos = createAsyncThunk(
//   'get/todos',
//   async () => {
//     const result = await getTodoList();
//     return result;
//   });
// const todosSlice = createSlice({
//   name: "todos",
//   initialState: {
//     todos: [],
//   },
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos = [...state.todos, action.payload];
//     },
//     updateTodo: (state, action) => {
//       state.todos = state.todos.map((todo) =>
//       todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo
//       );
//     },
//     deleteTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

// export default todosSlice.reducer;


export default todosSlice.reducer;
