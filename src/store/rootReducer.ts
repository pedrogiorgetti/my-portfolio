import { ITabState, tabReducers } from './slices/tabs';

export interface IApplicationState {
  tab: ITabState;
}

export const rootReducers = {
  tab: tabReducers,
};
