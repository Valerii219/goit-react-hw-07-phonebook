import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../ContactsApi/initialState";


const filterSlice = createSlice({
  name:'filter',
  initialState,
  reducers:
  {  createFilter:(state,{payload})=>({
      ...state,
      filter:payload
    })
    }
})

export const filterReducer = filterSlice.reducer;
export const {createFilter} = filterSlice.actions