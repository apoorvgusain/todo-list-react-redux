import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
const appStore=configureStore({
    reducer:{
        listItem:itemReducer
    }
});

export default appStore;
 