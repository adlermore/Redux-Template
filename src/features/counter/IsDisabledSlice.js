import { createSlice } from '@reduxjs/toolkit'

export const IsDisabledSlice = createSlice({
  name: 'IsDisabled',
  initialState: { 
    isDisabled : false
  },
  reducers: {
    toggleDisableed: (state)=>{
      state.isDisabled = !state.isDisabled
      console.log(state.isDisabled);
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleDisableed } = IsDisabledSlice.actions


export default IsDisabledSlice.reducer 