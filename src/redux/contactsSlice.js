import { fetchContacts, addNewContact, deleteContact } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const pending = state => {
  state.isLoading = true;
};
const fulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // addNewContact(state, { payload }) {
    //   state.items.push({ ...payload, id: nanoid() });
    // },
    // deleteContact(state, { payload }) {
    //   return state.items.filter(item => item.id !== payload);
    // },
  },
  extraReducers: {
    [fetchContacts.pending]: pending,
    [fetchContacts.fulfilled](state, { payload }) {
      fulfilled(state);
      state.items = payload;
    },
    [fetchContacts.rejected]: rejected,
    [addNewContact.pending]: pending,
    [addNewContact.fulfilled](state, { payload }) {
      fulfilled(state);
      state.items.push({ ...payload });
    },
    [addNewContact.rejected]: rejected,
    [deleteContact.pending]: pending,
    [deleteContact.fulfilled](state, { payload }) {
      fulfilled(state);
      const idx = state.items.findIndex(item => item.id === payload);
      state.items.splice(idx, 1);
    },
    [deleteContact.rejected]: rejected,
  },
});

// export const { deleteContact } = contactsSlice.actions;
