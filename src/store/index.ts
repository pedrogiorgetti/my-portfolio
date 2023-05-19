import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { rootReducers } from './rootReducer';

const combinedReducers = combineReducers(rootReducers);

export const store = configureStore({
  reducer: combinedReducers,
});
