import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
