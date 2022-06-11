import { createSlice } from '@reduxjs/toolkit';

//Slice
const rootSlice = createSlice({
  name: 'root',
  initialState: {
    FormStep: 1,
    FormUserRegister: '',
    IsOpen: false,
    IsSubmitted: false,
  },
  reducers: {
    formStep: (state, action) => {
      state.FormStep = action.payload;
    },
    formRegister: (state, action) => {
      state.FormUserRegister = action.payload;
    },
    openModal: (state, action) => {
      state.IsOpen = true;
    },
    closeModal: (state, action) => {
      state.IsOpen = false;
    },
    submitted: (state, action) => {
      state.IsSubmitted = true;
    },
    isNotSubmitted: (state, action) => {
      state.IsSubmitted = false;
    },
  },
});

// Actions
export const {
  formStep,
  formRegister,
  openModal,
  closeModal,
  submitted,
  isNotSubmitted,
} = rootSlice.actions;
export const reducer = rootSlice.reducer;
