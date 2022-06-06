import { createSlice } from '@reduxjs/toolkit';

//Slice
const rootSlice = createSlice({
  name: 'root',
  initialState: {
    FormStep: 1,
    FormUserRegister: '',
  },
  reducers: {
    formStep: (state, action) => {
      state.FormStep = action.payload;
    },
    formRegister: (state, action) => {
      state.FormUserRegister = action.payload;
    },
  },
});

// Actions
export const { formStep, formRegister } = rootSlice.actions;
export const reducer = rootSlice.reducer;
