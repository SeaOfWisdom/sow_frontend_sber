import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isWalletConnect } from '../../utils/wallet_utils/walletActions';
import { Banner2Container } from '../../styleComponents/home/Banner2Style';

const Banner2 = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { walletData } = useSelector(s => s);
  const openAuthModal = (isOpen = false) => {
    dispatch({ type: 'SET_OPEN_AUTH', payload: isOpen });
  };
  return (
    <Banner2Container>
      <div className="banner">
        <div className="text">
          <h2>{t('banner2.diveIntoSOW')}</h2>
          <p>{t('banner2.generalInfo')}</p>
          {walletData?.isConnect &&
          isWalletConnect() &&
          localStorage.getItem('accountAddress') ? (
            <Link className="btn" to="/library">
              {t('banner2.library')}
            </Link>
          ) : (
            <button
              type="button"
              className="btn"
              onClick={() => openAuthModal(true)}
            >
              {t('banner2.connectWallet')}
            </button>
          )}
        </div>
      </div>
    </Banner2Container>
  );
};
export default Banner2;
