import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { 
    value: 0,
    // isDisabled : false
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    // toggleDisableed: (state)=>{
    //   state.isDisabled = !state.isDisabled
    // }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount  } = counterSlice.actions


export default counterSlice.reducer 