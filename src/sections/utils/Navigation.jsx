import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '../../styleComponents/utilsStyles/NavigationStyle';

const Navigation = ({ links = [], active = '' }) => {
  const { t, i18n } = useTranslation();
  return (
    <NavigationContainer>
      <div className="navs">
        <div className="nav">
          <Link to="/">{t('navigation.main')}</Link>
        </div>
        <div className="nav">
          <img className="icon" src="/img/bottom.svg" alt="nav" />
        </div>
        {links.map(item => (
          <>
            <div key={Math.random() * Date.now()} className="nav">
              <Link to={item?.link ?? '/'}>{item?.title ?? ''}</Link>
            </div>
            <div className="nav">
              <img className="icon" src="/img/bottom.svg" alt="nav" />
            </div>
          </>
        ))}
        <div className="active">{active}</div>
      </div>
    </NavigationContainer>
  );
};
export default Navigation;
