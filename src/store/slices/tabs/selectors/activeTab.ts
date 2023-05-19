import { ETabName } from '@enum/tabName';
import { ReduxStore } from '../../../types';

export function activeTab(state: ReduxStore): ETabName {
  return state.tab.active;
}
