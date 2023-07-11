import { Link } from "react-router-dom";
import { FooterContainer } from "../../styleComponents/layout/FooterStyle";
import { useDispatch, useSelector } from "react-redux";
import { isWalletConnect } from "../../utils/wallet_utils/walletActions";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { walletData, account } = useSelector((s) => s);
  return (
    <>
      <FooterContainer>
        <div className="footer">
          <Link to="/">
            <img src={"/img/logo.svg"} alt="logo" className="logo" />
          </Link>
          <div className="links">
            <div className="links_col">
              <Link to="/library" className="flink">
                {t('footer.library')}
              </Link> 
              <Link to="/help" className="flink">
                {t('footer.aboutUs')}
              </Link>
              <div className="flink disabled_link">
                {t('footer.contacts')}
              </div>
            </div>
            <div className="links_col">
              {account?.user_role < 2 ? (
                <>
                  {walletData?.isConnect &&
                  isWalletConnect() &&
                  localStorage.getItem("accountAddress") ? (
                    <>
                      <Link to="/select-author" className="flink">
                        {t('footer.becomeAuthor')}
                      </Link>
                    </>
                  ) : (
                    <>
                      <div
                        className="flink"
                        onClick={() =>
                          dispatch({ type: "SET_OPEN_AUTH", payload: true })
                        }
                      >
                        {t('footer.becomeAuthor')}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="flink plink disabled_link">{t('footer.becomeAuthor')}</div>
                </>
              )}
              {account?.user_role < 4 ? (
                <>
                  {walletData?.isConnect &&
                  isWalletConnect() &&
                  localStorage.getItem("accountAddress") ? (
                    <>
                      <Link to="/select-validator" className="flink">
                        {t('footer.becomeReviewer')}
                      </Link>
                    </>
                  ) : (
                    <>
                      <div
                        className="flink"
                        onClick={() =>
                          dispatch({ type: "SET_OPEN_AUTH", payload: true })
                        }
                      >
                        {t('footer.becomeReviewer')}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="flink plink disabled_link">
                    {t('footer.becomeReviewer')}
                  </div>
                </>
              )}
              <div className="flink plink disabled_link">
                {t('footer.privacyPolicy')}
              </div>
            </div>
            <div className="links_col">
              <div to="/" className="flink plink disabled_link">
                {t('footer.anyQuestions')}{" "}
              </div>
              <Link
                to="https://t.me/seaofwisdom"
                target="_blank"
                className="btn"
              >
                {" "}
                <img src="/img/telegram.svg" alt="telegram" /> {t('footer.telegramBot')}
              </Link>
            </div>
            <div className="privacy-policy disabled_link">{t('footer.privacyPolicy')}</div>
          </div>
        </div>
      </FooterContainer>
    </>
  );
};
export default Footer;
