import { createSlice } from '@reduxjs/toolkit'

const mouseSlice = createSlice({
  name: 'mouse',
  initialState: {
    position: {
      x: 0,
      y: 0
    }
  },
  reducers: {
    setMousePosition(state, action) {
      state.position.x = action.payload.x
      state.position.y = action.payload.y
    }
  }
})

export const mouseActions = mouseSlice.actions


export default mouseSlice.reducer;
