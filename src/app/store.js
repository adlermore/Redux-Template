import { configureStore , applyMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import loggerMiddleware from 'redux-logger';


const middlewares = applyMiddleware(loggerMiddleware);

export default configureStore({
    reducer: {
      counter: counterReducer,
    },
  })