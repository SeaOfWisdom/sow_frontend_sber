import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Web3 from 'web3';
import Navigation from '../../sections/utils/Navigation';
import { ArticleViewContainer } from '../../styleComponents/articles/ArticleViewStyle';
import Axios from '../../utils/httpClient';
import SimpleLoading from '../../sections/layout/SimpleLoading';
import ArticleSaved from '../../sections/utils/ArticleSaved';
import DateForm from '../../sections/utils/DateForm';
import {
  buyArticle,
  isWalletConnect,
} from '../../utils/wallet_utils/walletActions';
import loadingImg from '../../assets/images/180-ring.svg';

const ArticleView = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const toast = useToast();
  const { walletData, account } = useSelector(s => s);
  const params = useParams();
  const [purchase, setPurchase] = useState(false);
  const [work, setWork] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const toastRef = useRef();
  const getWorks = () =>
    Axios()
      .get('/works')
      .then(res => {
        let obj = {};
        (res?.data ?? []).forEach(item => {
          if (item?.work?.id === (params?.id ?? '')) {
            obj = item;
          }
        });
        setPurchase(!!obj?.work?.content);
        setWork(obj);
        return res.data;
      })
      .catch(r => {})
      .finally(() => {
        setLoading(false);
      });

  useEffect(() => {
    getWorks();
  }, []);

  const purchaseWork = async () => {
    const web3 = new Web3(window.ethereum);
    const balance = web3.utils.toWei(
      walletData?.tokenBalance?.toString(),
      'ether'
    );
    if (balance >= 50000000000000000000) {
      try {
        toastRef.current = toast({
          // title: "Account created.",
          status: 'loading',
          duration: null,
          position: 'top',
          isClosable: false,

          render: () => (
            <Box
              color="#2A2C35"
              p={3}
              bg="white.500"
              style={{
                display: 'flex',
                fontFamily: 'Lora',
                fontSize: '16px',
                background: 'white',
                fontWeight: '600',
                lineHeight: '150%',
                position: 'absolute',
                top: '60px',
                padding: '24px 36px',
                borderRadius: '8px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
              }}
            >
              <img
                style={{ marginRight: '14px' }}
                src={loadingImg}
                alt="loading"
              />
              Подождите пожалуйста, происходит покупка статьи
            </Box>
          ),
        });
        const result = await buyArticle(params?.id);
        if (result) {
          setTimeout(async () => {
            const works = await getWorks();
            if (works.find(w => w.work.id === params?.id)?.work.content) {
              toastRef.current = toast({
                // title: "Account created.",
                status: 'success',
                duration: 1000,
                position: 'top',
                isClosable: true,

                render: () => (
                  <Box
                    color="#2A2C35"
                    p={3}
                    bg="white.500"
                    style={{
                      display: 'flex',
                      fontFamily: 'Lora',
                      fontSize: '16px',
                      background: 'white',
                      fontWeight: '600',
                      lineHeight: '150%',
                      position: 'absolute',
                      top: '60px',
                      padding: '24px 36px',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <img
                      style={{ marginRight: '14px' }}
                      src="/img/vector.svg"
                      alt=""
                    />
                    {t('article_view.alreadyPurchasedPaper')}
                  </Box>
                ),
              });
            } else {
              toast.close(toastRef.current);
            }
          }, 3000);
        } else {
          toast.close(toastRef.current);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          // setError();
          toast({
            // title: "Account created.",
            status: 'error',
            duration: 1000,
            position: 'top',
            isClosable: true,

            render: () => (
              <Box
                color="#2A2C35"
                p={3}
                bg="white.500"
                style={{
                  display: 'flex',
                  fontFamily: 'Lora',
                  fontSize: '16px',
                  background: 'white',
                  fontWeight: '600',
                  lineHeight: '150%',
                  position: 'absolute',
                  top: '60px',
                  padding: '24px 36px',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
                }}
              >
                <img
                  style={{ marginRight: '14px' }}
                  src="/img/close.svg"
                  alt=""
                />
                {t('article_view.insufficientBalance')}
              </Box>
            ),
          });
        } else if (error.code !== 4001) {
          toastRef.current = toast({
            // title: "Account created.",
            status: 'error',
            duration: 1000,
            position: 'top',
            isClosable: true,

            render: () => (
              <Box
                color="#2A2C35"
                p={3}
                bg="white.500"
                style={{
                  display: 'flex',
                  fontFamily: 'Lora',
                  fontSize: '16px',
                  background: 'white',
                  fontWeight: '600',
                  lineHeight: '150%',
                  position: 'absolute',
                  top: '60px',
                  padding: '24px 36px',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
                }}
              >
                <img
                  style={{ marginRight: '14px' }}
                  src="/img/close.svg"
                  alt=""
                />
                {t('article_view.errorWhileBuying')}
              </Box>
            ),
          });
        } else {
          toast.close(toastRef.current);
        }
      }
      setTimeout(() => toast.close(toastRef.current), 1000);
    }
    // dispatch({ type: 'SET_LOADING', payload: true });
    // tx = await sowToken.approve(sowLibrary.address, '50000000000000000000')
    // tx = await sowLibrary.purchasePaper('90877779078408050669327339819568009876');
    // Axios()
    //   .get(`/purchase_work/${params?.id ?? ''}`)
    //   .then(res => {
    //     setPurchase(true);
    //     toast({
    //       // title: "Account created.",
    //       status: 'succes',
    //       duration: 1000,
    //       position: 'top',
    //       isClosable: true,
    //
    //       render: () => (
    //         <Box
    //           color="#2A2C35"
    //           p={3}
    //           bg="white.500"
    //           style={{
    //             display: 'flex',
    //             fontFamily: 'Lora',
    //             fontSize: '16px',
    //             background: 'white',
    //             fontWeight: '600',
    //             lineHeight: '150%',
    //             position: 'absolute',
    //             top: '60px',
    //             padding: '24px 36px',
    //             borderRadius: '8px',
    //             boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
    //           }}
    //         >
    //           <img
    //             style={{ marginRight: '14px' }}
    //             src="/img/vector.svg"
    //             alt=""
    //           />
    //           {t('article_view.alreadyPurchasedPaper')}
    //         </Box>
    //       ),
    //     });
    //   })
    //   .catch(error => {
    //     if (error.response && error.response.status === 400) {
    //       // setError();
    //       toast({
    //         // title: "Account created.",
    //         status: 'error',
    //         duration: 1000,
    //         position: 'top',
    //         isClosable: true,
    //
    //         render: () => (
    //           <Box
    //             color="#2A2C35"
    //             p={3}
    //             bg="white.500"
    //             style={{
    //               display: 'flex',
    //               fontFamily: 'Lora',
    //               fontSize: '16px',
    //               background: 'white',
    //               fontWeight: '600',
    //               lineHeight: '150%',
    //               position: 'absolute',
    //               top: '60px',
    //               padding: '24px 36px',
    //               borderRadius: '8px',
    //               boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
    //             }}
    //           >
    //             <img
    //               style={{ marginRight: '14px' }}
    //               src="/img/close.svg"
    //               alt=""
    //             />
    //             {t('article_view.insufficientBalance')}
    //           </Box>
    //         ),
    //       });
    //     } else {
    //       toast({
    //         // title: "Account created.",
    //         status: 'error',
    //         duration: 1000,
    //         position: 'top',
    //         isClosable: true,
    //
    //         render: () => (
    //           <Box
    //             color="#2A2C35"
    //             p={3}
    //             bg="white.500"
    //             style={{
    //               display: 'flex',
    //               fontFamily: 'Lora',
    //               fontSize: '16px',
    //               background: 'white',
    //               fontWeight: '600',
    //               lineHeight: '150%',
    //               position: 'absolute',
    //               top: '60px',
    //               padding: '24px 36px',
    //               borderRadius: '8px',
    //               boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
    //             }}
    //           >
    //             <img
    //               style={{ marginRight: '14px' }}
    //               src="/img/close.svg"
    //               alt=""
    //             />
    //             {t('article_view.errorWhileBuying')}
    //           </Box>
    //         ),
    //       });
    //     }
    //   })
    //   .finally(() => {
    //     dispatch({ type: 'SET_LOADING', payload: false });
    //   });
    else {
      toastRef.current = toast({
        // title: "Account created.",
        status: 'error',
        duration: 1000,
        position: 'top',
        isClosable: true,

        render: () => (
          <Box
            color="#2A2C35"
            p={3}
            bg="white.500"
            style={{
              display: 'flex',
              fontFamily: 'Lora',
              fontSize: '16px',
              background: 'white',
              fontWeight: '600',
              lineHeight: '150%',
              position: 'absolute',
              top: '60px',
              padding: '24px 36px',
              borderRadius: '8px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
            }}
          >
            <img style={{ marginRight: '14px' }} src="/img/close.svg" alt="" />
            {t('article_view.insufficientBalance')}
          </Box>
        ),
      });
    }
  };

  return (
    <>
      <ArticleViewContainer>
        <Navigation
          active="Детали статьи"
          links={[
            {
              title: 'Библиотека',
              link: '/library',
            },
          ]}
        />
        <div className="target">
          {loading ? (
            <SimpleLoading />
          ) : (
            <>
              <div className="article">
                <div className="bookmark_target">
                  {account?.role ? (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>
                      {work?.bookmarked ? (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                        <img
                          className="bookmark"
                          src="/img/bookmark2.svg"
                          onClick={() => {
                            setIsOpen(true);
                          }}
                          alt="bookmark"
                        />
                      ) : (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                        <img
                          className="bookmark"
                          src="/img/bookmark.svg"
                          onClick={() => {
                            setIsOpen(true);
                          }}
                          alt="bookmark"
                        />
                      )}
                    </>
                  ) : (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                    <img
                      className="bookmark"
                      src="/img/bookmark.svg"
                      onClick={() => {
                        dispatch({ type: 'SET_OPEN_AUTH', payload: true });
                      }}
                      alt="bookmark"
                    />
                  )}
                </div>
                <div className="date">
                  <img src="/img/star.svg" alt="star" />
                  <span className="time">
                    <DateForm createdAt={work?.work?.created_at} />
                  </span>
                </div>
                <h1 className="title">{work?.work?.name}</h1>
                <div className="author">
                  <span>
                    <Link
                      to={`/articles-author/${
                        work?.author_info?.basic_info?.Web3Address ?? ''
                      }`}
                    >
                      {`${
                        work?.author_info?.author_info?.name ??
                        work?.author_info?.basic_info?.NickName ??
                        ''
                      } ${work?.author_info?.author_info?.surname ?? ''}`}
                    </Link>
                  </span>
                </div>
                <h4 className="annotation">{t('article_view.abstract')}</h4>
                <p className="desc">{work?.work?.annotation ?? ''}</p>

                <div className="condition">
                  {work?.work?.Tags?.map((tag, tindex) => (
                    <span className="btn" key={Math.random() * Date.now()}>
                      {tag}
                    </span>
                  ))}
                </div>

                {work?.work?.content?.work_data ? (
                  <>
                    <h4 className="annotation">{t('article_view.mainText')}</h4>
                    <p className="desc">
                      {work?.work?.content?.work_data ?? ''}
                    </p>
                  </>
                ) : (
                  ''
                )}
              </div>
              <div className="price_target">
                <div className="price_t">
                  <div className="paper">
                    <img src="/img/paper.svg" alt="price" />
                  </div>
                  <div className="price_p">
                    <div className="price_v">
                      {(work?.work?.price ?? 0) / 1000000000000000000} SOW
                    </div>
                    <div className="price_y">≈ 0.01 ETH</div>
                  </div>
                </div>
                {localStorage.getItem('accountAddress') ===
                  work?.author_info?.basic_info?.Web3Address ?? '' ? (
                  <div className="pay_btn pay_btn_d">
                    {t('article_view.myPaper')}
                  </div>
                ) : (
                  // eslint-disable-next-line react/jsx-no-useless-fragment
                  <>
                    {!(
                      walletData?.isConnect &&
                      isWalletConnect() &&
                      localStorage.getItem('accountAddress')
                    ) ? (
                      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions
                      <div
                        className="pay_btn"
                        onClick={() =>
                          dispatch({ type: 'SET_OPEN_AUTH', payload: true })
                        }
                      >
                        {t('article_view.buyPaper')}
                      </div>
                    ) : (
                      // eslint-disable-next-line react/jsx-no-useless-fragment
                      <>
                        {purchase ? (
                          <div className="pay_btn pay_btn_d">
                            {t('article_view.purchasedPaper')}
                          </div>
                        ) : (
                          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions
                          <div
                            className="pay_btn"
                            onClick={() => purchaseWork()}
                          >
                            {t('article_view.buyPaper')}
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
                <div className="hr" />
                <div className="price_desc">
                  {t('article_view.purchaseDisclaimer')}
                </div>
              </div>
            </>
          )}
        </div>
      </ArticleViewContainer>
      <ArticleSaved
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        bookmarked={work?.bookmarked}
        articleId={work?.work?.id ?? ''}
        handleSaved={value => {
          setWork({ ...work, bookmarked: value });
        }}
      />

      {error && (
        <div
          style={{
            position: 'fixed',
            zIndex: 1000,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            overflow: 'auto',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        >
          {console.log('Popup should be displayed')}
          <div
            style={{
              backgroundColor: '#fefefe',
              margin: '15% auto',
              padding: '20px',
              border: '1px solid #888',
              width: '80%',
            }}
          >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <span
              style={{
                color: '#aaa',
                float: 'right',
                fontSize: '28px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              onClick={() => setError('')}
            >
              &times;
            </span>
            <p>{error}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default ArticleView;
