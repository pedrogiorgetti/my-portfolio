import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { ETabName } from '@enum/tabName';

export interface ITabState {
  active: ETabName;
}

const initialState: ITabState = {
  active: ETabName.Home,
};

const tabSlice = createSlice({
  name: '@tab',
  initialState,
  reducers,
});

export const tabActions = tabSlice.actions;
export const tabReducers = tabSlice.reducer;
