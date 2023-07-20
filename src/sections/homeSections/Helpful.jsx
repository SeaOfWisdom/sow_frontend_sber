import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HelpfulContainer } from '../../styleComponents/home/HelpfulStyle';
import { isWalletConnect } from '../../utils/wallet_utils/walletActions';

const Helpful = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { walletData, account } = useSelector(s => s);
  return (
    <HelpfulContainer>
      <div className="library">
        <h2 className="library_title">{t('helpful.information')}</h2>
        <div className="cards">
          <div className="card">
            <div className="card_body">
              <div className="himg">
                <img src="/img/hsearch.svg" alt="hsearch" />
              </div>
              <div>
                <div className="date">
                  <img src="/img/star.svg" alt="star" />
                  <span className="time">{t('helpful.advancedSearch')}</span>
                </div>
                <h3 className="title">{t('helpful.quickSearch')}</h3>
                <div className="author">
                  <span className="alink plink disabled_link">
                    {t('helpful.findArticle')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card_body">
              <div className="himg">
                <img src="/img/hbook.svg" alt="hsearch" />
              </div>
              <div>
                <div className="date">
                  <img src="/img/star.svg" alt="star" />
                  <span className="time">{t('helpful.usefulForReaders')}</span>
                </div>
                <h3 className="title">{t('helpful.decentralizedJournal')}</h3>
                <div className="author">
                  <Link to="/library" className="alink">
                    {t('helpful.viewLibrary')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card_body">
              <div className="himg">
                <img src="/img/hmir.svg" alt="hsearch" />
              </div>
              <div>
                <div className="date">
                  <img src="/img/star.svg" alt="star" />
                  <span className="time">{t('helpful.areYouAuthor')}</span>
                </div>
                <h3 className="title">{t('helpful.learnMore')}</h3>
                <div className="author">
                  {account?.role !== 2 && account?.role !== 4 ? (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>
                      {walletData?.isConnect &&
                      isWalletConnect() &&
                      localStorage.getItem('accountAddress') ? (
                        <Link to="/library" className="alink">
                          {t('helpful.becomeAuthor')}
                        </Link>
                      ) : (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                        <span
                          className="alink"
                          onClick={() =>
                            dispatch({
                              type: 'SET_OPEN_AUTH',
                              payload: true,
                            })
                          }
                        >
                          {t('helpful.becomeAuthor')}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="alink plink disabled_link">
                      {t('helpful.becomeAuthor')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelpfulContainer>
  );
};
export default Helpful;
