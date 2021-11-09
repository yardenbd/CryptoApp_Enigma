import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coinsSlice'
const store = configureStore({
    reducer: {coins:coinsReducer.reducer},
  });
  
  export default store;