import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyItem } from "../../../interfaces";

type CompanyState = {
    companyItems: CompanyItem[]
}

const initialState: CompanyState = {
    companyItems: []
}

export const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        setCompanies: (state, action: PayloadAction<CompanyItem[]>) => {
            state.companyItems = action.payload;
        },
        addCompany: (state, action: PayloadAction<CompanyItem>) => {
            state.companyItems.push(action.payload);
        },
        removeCompany: (state, action: PayloadAction<CompanyItem>) => {
            state.companyItems = state.companyItems.filter(obj => {
                return obj.id !== action.payload.id;
            });
        }
    }
});

export const { setCompanies: setCompanies, addCompany: addCompany, removeCompany: removeCompany } = companySlice.actions;

export default companySlice.reducer;