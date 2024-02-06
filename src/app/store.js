import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../fetaures/useDetailSlice";
export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
