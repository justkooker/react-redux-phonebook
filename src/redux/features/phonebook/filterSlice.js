import { createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

const filterSlice = createSlice({
    name:"filter",
    initialState :'',
    reducers: {
    filteredContacts(state,action) {
      return state = action.payload
    }}
})
export const { filteredContacts } =
filterSlice.actions;
export default filterSlice.reducer;