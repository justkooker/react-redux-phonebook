import { createSlice } from '@reduxjs/toolkit';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    contactAdded(state, action) {
      state.push(action.payload);
    },
    contactDeleted(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { contactAdded, contactDeleted } = contactsSlice.actions;
export default contactsSlice.reducer;
