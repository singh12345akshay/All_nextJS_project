import { configureStore } from "@reduxjs/toolkit";

export interface AppState {
  isSidebarOpen: boolean;
}

export const initialState: AppState = {
  isSidebarOpen: false,
};

export const toggleSidebar = () => ({ type: "TOGGLE_SIDEBAR" });

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    default:
      return state;
  }
};

const store = configureStore({reducer});

export default store;
