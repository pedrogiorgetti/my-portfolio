import { ETabName } from '@enum/tabName';
import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { ITabState } from '../../index';

export interface ISetActiveTabAction {
  tabName: ETabName;
}

export function setActiveTab(
  draft: Draft<ITabState>,
  action: PayloadAction<ISetActiveTabAction>,
) {
  draft.active = action.payload.tabName;
}
