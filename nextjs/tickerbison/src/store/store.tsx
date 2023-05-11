import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
interface AppState {
  isSidebarOpen: boolean;
  data: TableData[];
}
interface TableData {
  id:number
  title: string;
  imagesrc: string;
  price: string;
  count: number;
  checked: boolean;
}
const initialState: AppState = {
  isSidebarOpen: false,
  data: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    incrementCount(state, action: PayloadAction<number>) {
      const desiredObject = state.data.find((obj: any) => obj.id === action.payload);
      desiredObject?desiredObject.count++:"" ;
    },
    decrementCount(state, action: PayloadAction<number>) {
     const desiredObject = state.data.find((obj: any) => obj.id === action.payload);
     desiredObject?desiredObject.count>0?desiredObject.count--:"":''
    },
    addRow(state, action: PayloadAction<TableData>) {
      state.data.push(action.payload);
    },
    deleteRow(state, action: PayloadAction<number>) {
      const index = state.data.findIndex((item) => item.id === action.payload);
  state.data.splice(index, 1);
    }
    },
  },
);

export const { incrementCount, addRow, deleteRow, decrementCount, toggleSidebar } =
  appSlice.actions;
export const selectTableData = (state: any) => state.data;
const store = configureStore({ reducer: appSlice.reducer});

export default store;
