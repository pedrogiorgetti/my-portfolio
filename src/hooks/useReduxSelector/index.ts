import { ReduxStore } from '@store/types';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useReduxSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
