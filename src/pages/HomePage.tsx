import { Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3>{t('homepage.made')}</h3>
      <h1>Oskar Trąpczyński</h1>
      <Link
        href="https://github.com/oskartrapczynski/euvic-zad2"
        underline="always"
        sx={{ textTransform: 'uppercase' }}
      >
        github
      </Link>
    </>
  );
};

export default HomePage;
