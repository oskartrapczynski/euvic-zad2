import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { t } from 'i18next';

import { AllLanguages } from '../assets/i18n/AllLangauges';
import i18n from '../i18n';

const Language = () => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    i18n.changeLanguage(e.target.value);
  };

  const menuItems = AllLanguages.map((lang) => (
    <MenuItem key={lang.id} value={lang.id}>
      {lang.name}
    </MenuItem>
  ));

  return (
    <FormControl>
      <InputLabel id="select-language">{t('menu.select.language')}</InputLabel>
      <Select
        labelId="select-language"
        id="select-language"
        value={i18n.language}
        label={t('menu.select.language')}
        onChange={(e) => handleChange(e)}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
};

export default Language;
