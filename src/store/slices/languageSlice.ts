import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllLanguages } from '../../assets/i18n/AllLangauges';

const initialState = {
  name: AllLanguages.pl,
};

export const LanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
  },
});

export default LanguageSlice.reducer;
export const { changeLang } = LanguageSlice.actions;
