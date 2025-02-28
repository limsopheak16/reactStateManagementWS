import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingSlice"
import UserReducer from "./user"
export const store = configureStore({
    reducer:{
        shopping: shoppingReducer,
        user: UserReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

