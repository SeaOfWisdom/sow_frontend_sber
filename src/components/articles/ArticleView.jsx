
import { Link, useParams } from "react-router-dom";
import Navigation from "../../sections/utils/Navigation";
import { ArticleViewContainer } from "../../styleComponents/articles/ArticleViewStyle";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../utils/httpClient";
import { useEffect, useState } from "react";
import SimpleLoading from "../../sections/layout/SimpleLoading";
import AeticleSaved from "../../sections/utils/AeticleSaved";
import DateForm from "../../sections/utils/DateForm";
import { isWalletConnect } from "../../utils/wallet_utils/walletActions";
import { Box, useToast } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';



const ArticleView = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch(); 
  const toast = useToast();
  const { walletData, account } = useSelector((s) => s);
  const params = useParams();
  const [purchase, setPurchase] = useState(false);
  const [work, setWork] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getWorks();
  }, []);

  const getWorks = () => {
    Axios()
      .get("/works")
      .then((res) => {
        let obj = {};
        (res?.data ?? []).forEach((item) => {
          if (item?.work?.id === (params?.id ?? "")) {
            obj = item;
          }
        });
        setPurchase(obj?.work?.content ? true : false);
        setWork(obj);
      })
      .catch((r) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const purchase_work = () => {
    if(walletData?.tokenBalance>=((work?.work?.price??0)/1000000000000000000)){
      dispatch({ type: "SET_LOADING", payload: true });
      Axios()
        .get(`/purchase_work/${params?.id ?? ""}`)
        .then((res) => {
          setPurchase(true);
          toast({
            // title: "Account created.",
            status: "succes",
            duration: 1000,
            position: "top",
            isClosable: true,

            render: () => (
              <Box
                color="#2A2C35"
                p={3}
                bg="white.500"
                style={{
                  display: "flex",
                  fontFamily: "Lora",
                  fontSize: "16px",
                  background: "white",
                  fontWeight: "600",
                  lineHeight: "150%",
                  position: "absolute",
                  top: "60px",
                  padding: "24px 36px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
                }}
              >
                <img
                  style={{ marginRight: "14px" }}
                  src="/img/vector.svg"
                  alt=""
                />
                  {t('article_view.alreadyPurchasedPaper')}
              </Box>
            ),
          });
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            // setError();
            toast({
              // title: "Account created.",
              status: "error",
              duration: 1000,
              position: "top",
              isClosable: true,

              render: () => (
                <Box
                  color="#2A2C35"
                  p={3}
                  bg="white.500"
                  style={{
                    display: "flex",
                    fontFamily: "Lora",
                    fontSize: "16px",
                    background: "white",
                    fontWeight: "600",
                    lineHeight: "150%",
                    position: "absolute",
                    top: "60px",
                    padding: "24px 36px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <img
                    style={{ marginRight: "14px" }}
                    src="/img/close.svg"
                    alt=""
                  />
                    {t('article_view.insufficientBalance')}
                </Box>
              ),
            });
          } else {
            toast({
              // title: "Account created.",
              status: "error",
              duration: 1000,
              position: "top",
              isClosable: true,

              render: () => (
                <Box
                  color="#2A2C35"
                  p={3}
                  bg="white.500"
                  style={{
                    display: "flex",
                    fontFamily: "Lora",
                    fontSize: "16px",
                    background: "white",
                    fontWeight: "600",
                    lineHeight: "150%",
                    position: "absolute",
                    top: "60px",
                    padding: "24px 36px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <img
                    style={{ marginRight: "14px" }}
                    src="/img/close.svg"
                    alt=""
                  />
                    {t('article_view.errorWhileBuying')}
                </Box>
              ),
            }); 
          }
        })
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    }else{
      toast({
        // title: "Account created.",
        status: "error",
        duration: 1000,
        position: "top",
        isClosable: true,

        render: () => (
          <Box
            color="#2A2C35"
            p={3}
            bg="white.500"
            style={{
              display: "flex",
              fontFamily: "Lora",
              fontSize: "16px",
              background: "white",
              fontWeight: "600",
              lineHeight: "150%",
              position: "absolute",
              top: "60px",
              padding: "24px 36px",
              borderRadius: "8px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
            }}
          >
            <img
              style={{ marginRight: "14px" }}
              src="/img/close.svg"
              alt=""
            />
            {t('article_view.insufficientBalance')}
          </Box>
        ),
      });
    }
  };

  return (
    <>
      <Layout>
        <ArticleViewContainer>
          <Navigation
            active={"Детали статьи"}
            links={[
              {
                title: "Библиотека",
                link: "/library",
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
                  {account?.role?<>
                    {work?.bookmarked ? (
                      <img
                        className="bookmark"
                        src="/img/bookmark2.svg"
                        onClick={() => {
                          setIsOpen(true);
                        }}
                        alt="bookmark"
                      />
                    ) : (
                      <img
                        className="bookmark"
                        src="/img/bookmark.svg"
                        onClick={() => {
                          setIsOpen(true);
                        }}
                        alt="bookmark"
                      />
                    )}
                    </>:<>
                            <img className="bookmark" src='/img/bookmark.svg'  onClick={()=>{
                                dispatch({type: 'SET_OPEN_AUTH', payload: true})                      
                            }} alt="bookmark"/>
                        </>}
                  </div>
                  <div className="date">
                    <img src="/img/star.svg" alt="star" />
                    <span className="time">
                      <DateForm created_at={work?.work?.created_at} />
                    </span>
                  </div>
                  <h1 className="title">{work?.work?.name}</h1>
                  <div className="author">
                    <span>
                      <Link
                        to={`/articles-author/${
                          work?.author_info?.basic_info?.Web3Address ?? ""
                        }`}
                      >
                        {(work?.author_info?.author_info?.name ??
                          work?.author_info?.basic_info?.NickName ??
                          "") +
                          " " +
                          (work?.author_info?.author_info?.surname ?? "")}
                      </Link>
                    </span>
                  </div>
                  <h4 className="annotation">{t('article_view.abstract')}</h4>
                  <p className="desc">{work?.work?.annotation ?? ""}</p>

                  <div className="condition"> 
                    {work?.work?.Tags?.map((tag, tindex)=>(
                        <span className="btn" key={tindex}>{tag}</span> 
                    ))}
                  </div>

                  {work?.work?.content?.work_data?<>
                    <h4 className="annotation">{t('article_view.mainText')}</h4>
                    <p className="desc">{work?.work?.content?.work_data?? ""}</p>
                  </>:''}
                </div>
                <div className="price_target">
                  <div className="price_t">
                    <div className="paper">
                      <img src="/img/paper.svg" alt="price" />
                    </div>
                    <div className="price_p">
                      <div className="price_v">
                      {(work?.work?.price??0)/1000000000000000000} SOW
                      </div>
                      <div className="price_y">≈ 0.01 ETH</div>
                    </div>
                  </div>
                  {localStorage.getItem('accountAddress')===work?.author_info?.basic_info?.Web3Address??''?
                    <div className="pay_btn pay_btn_d" >{t('article_view.myPaper')}</div>
                  :<>
                  {!(walletData?.isConnect && isWalletConnect() && localStorage.getItem('accountAddress'))?<>
                    <div className="pay_btn" onClick={() => dispatch({type: 'SET_OPEN_AUTH', payload: true})}>
                        {t('article_view.buyPaper')}
                    </div>
                  </>:<>
                  {purchase ? (
                    <div className="pay_btn pay_btn_d">{t('article_view.purchasedPaper')}</div>
                  ) : (
                    <div className="pay_btn" onClick={() => purchase_work()}>
                        {t('article_view.buyPaper')}
                    </div>
                  )}</>}</>}
                  <div className="hr"></div>
                  <div className="price_desc">
                      {t('article_view.purchaseDisclaimer')}
                  </div>
                </div>
              </>
            )}
          </div>
        </ArticleViewContainer>
        <AeticleSaved
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          bookmarked={work?.bookmarked}
          article_id={work?.work?.id ?? ""}
          handleSaved={(value) => {
            setWork({ ...work, bookmarked: value });
          }}
        />
      </Layout>

      {error && (
      <div style={{
        position: 'fixed',
        zIndex: 1000,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}>
        {console.log('Popup should be displayed')}
        <div style={{
          backgroundColor: '#fefefe',
          margin: '15% auto',
          padding: '20px',
          border: '1px solid #888',
          width: '80%',
        }}>
          <span style={{
            color: '#aaa',
            float: 'right',
            fontSize: '28px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }} onClick={() => setError("")}>
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
