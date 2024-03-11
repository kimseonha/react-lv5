import todosSlice from '../modules/todosSlice';
// import thunk from 'redux-thunk';
import { configureStore  } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: { 
    todosReducer: todosSlice
   },
});

export default store;