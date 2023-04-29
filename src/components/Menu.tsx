import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Language from './Language';

const Menu = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link to="/">
        <Button variant="contained">{t('menu.home')}</Button>
      </Link>
      <Link to="/main">
        <Button variant="contained">{t('menu.main')}</Button>
      </Link>
      <Link to="/views">
        <Button variant="contained">{t('menu.views')}</Button>
      </Link>
      <Language />
    </Box>
  );
};

export default Menu;
