import { configureStore  } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import IsDisabledSlice from '../features/counter/IsDisabledSlice';

export default configureStore({
    reducer: {
      counter: counterReducer,
      isDisabled: IsDisabledSlice
    },  
    devTools: true
    
  }) 