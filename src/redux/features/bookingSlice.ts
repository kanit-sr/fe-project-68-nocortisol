import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
    companyItems: BookingItem[]
}

const initialState: BookingState = {
    companyItems: []
}

export const bookingSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        setBookings: (state, action: PayloadAction<BookingItem[]>) => {
            state.companyItems = action.payload;
        },
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            state.companyItems.push(action.payload);
        },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            state.companyItems = state.companyItems.filter(obj => {
                return obj.id !== action.payload.id;
            });
        }
    }
});

export const { setBookings: setBookings, addBooking: addBooking, removeBooking: removeBooking } = bookingSlice.actions;

export default bookingSlice.reducer;