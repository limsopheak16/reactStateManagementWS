import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface setUser {
    name: string; 
}

const initialState: setUser = {
    name: "sopheak" 
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<string>) => { 
            state.name = action.payload;
            
        }
    }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
