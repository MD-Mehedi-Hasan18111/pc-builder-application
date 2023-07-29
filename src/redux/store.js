import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "@/redux/features/builderSlice";

const store = configureStore({
  reducer: {
    builder: builderReducer,
  },
});

export default store;
