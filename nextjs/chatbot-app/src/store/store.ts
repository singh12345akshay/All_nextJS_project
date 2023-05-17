import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  authToken: string
}
const initialState: AppState = {
  authToken:''
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
    },
  },
});
export const { setAuthToken } = authSlice.actions;
const store = configureStore({ reducer: authSlice.reducer });
export default store;