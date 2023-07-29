import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: {
    cpu: null,
    ram: null,
    monitor: null,
    storage: null,
    motherboard: null,
    powersupply: null,
    others: null,
  },
  chooseSelectedCategory: "",
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addProductToBuilder: (state, action) => {
      state.selectedProducts[action.payload.key] = action.payload.data;
    },
    chooseSelectCategory: (state, action) => {
      state.chooseSelectedCategory = action.payload;
    },
    clearBuilder: (state, action) => {
      state.selectedProducts = action.payload;
    },
  },
});

export const { addProductToBuilder, chooseSelectCategory, clearBuilder } =
  builderSlice.actions;

export default builderSlice.reducer;
