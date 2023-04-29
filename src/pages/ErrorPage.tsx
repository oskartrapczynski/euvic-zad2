import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const { t } = useTranslation();
  return <div>{t('errorpage')} 404</div>;
};

export default ErrorPage;
