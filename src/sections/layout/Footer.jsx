import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FooterContainer } from '../../styleComponents/layout/FooterStyle';
import { isWalletConnect } from '../../utils/wallet_utils/walletActions';

const Footer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { walletData, account } = useSelector(s => s);
  return (
    <FooterContainer>
      <div className="footer">
        <Link to="/">
          <img src="/img/logo.svg" alt="logo" className="logo" />
        </Link>
        <div className="links">
          <div className="links_col">
            <Link to="/library" className="flink">
              {t('footer.library')}
            </Link>
            <Link to="/about" className="flink">
              {t('footer.aboutUs')}
            </Link>
            <div className="flink disabled_link">{t('footer.contacts')}</div>
          </div>
          <div className="links_col">
            {account?.user_role < 2 ? (
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <>
                {walletData?.isConnect &&
                isWalletConnect() &&
                localStorage.getItem('accountAddress') ? (
                  <Link to="/select-author" className="flink">
                    {t('footer.becomeAuthor')}
                  </Link>
                ) : (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                  <div
                    className="flink"
                    onClick={() =>
                      dispatch({ type: 'SET_OPEN_AUTH', payload: true })
                    }
                  >
                    {t('footer.becomeAuthor')}
                  </div>
                )}
              </>
            ) : (
              <div className="flink plink disabled_link">
                {t('footer.becomeAuthor')}
              </div>
            )}
            {account?.user_role < 4 ? (
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <>
                {walletData?.isConnect &&
                isWalletConnect() &&
                localStorage.getItem('accountAddress') ? (
                  <Link to="/select-validator" className="flink">
                    {t('footer.becomeReviewer')}
                  </Link>
                ) : (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                  <div
                    className="flink"
                    onClick={() =>
                      dispatch({ type: 'SET_OPEN_AUTH', payload: true })
                    }
                  >
                    {t('footer.becomeReviewer')}
                  </div>
                )}
              </>
            ) : (
              <div className="flink plink disabled_link">
                {t('footer.becomeReviewer')}
              </div>
            )}
            <Link to="/privacy" className="flink">
              {t('footer.privacyPolicy')}
            </Link>
          </div>
          <div className="links_col">
            <div to="/" className="flink plink disabled_link">
              {t('footer.anyQuestions')}{' '}
            </div>
            <Link to="https://t.me/seaofwisdom" target="_blank" className="btn">
              {' '}
              <img src="/img/telegram.svg" alt="telegram" />{' '}
              {t('footer.telegramBot')}
            </Link>
          </div>
          <div to="/privacy" className="privacy-policy">
            {t('footer.privacyPolicy')}
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;
