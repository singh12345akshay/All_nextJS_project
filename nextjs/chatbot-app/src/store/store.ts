import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";


interface Item {
  id: string;
  name: string;
}
interface AppState {
  data: Item[];
}

const initialState: AppState = {
  data: [],
};


const dataSlice = createSlice({
  name: 'botList',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<Item[]>){
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
// export const homePageData=(state:any)=> state.data
const store = configureStore({ reducer: dataSlice.reducer });
export default store;

