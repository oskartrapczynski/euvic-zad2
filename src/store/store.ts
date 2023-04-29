import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { LanguageSlice } from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    language: LanguageSlice.reducer,
  },
});

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
