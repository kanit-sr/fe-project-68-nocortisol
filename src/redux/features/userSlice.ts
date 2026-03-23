import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserItem } from "../../../interfaces";

type userState = {
    user: UserItem | null
}

const initialState: userState = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserItem>) => {
            state.user = action.payload;
        }
    }
});

export const { setUser: setUser } = userSlice.actions;

export default userSlice.reducer;