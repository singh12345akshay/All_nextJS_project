import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  data: botData[];
}

interface botData{
  id:string;
botName:string;
imagesrc:string;
botscript:string;
}

const initialState: AppState = {
  data:[]
}
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<botData>) => {
      state.data.push
    },
  },
});
export const { setData} = dataSlice.actions;
const store = configureStore({ reducer: dataSlice.reducer });
export default store;

