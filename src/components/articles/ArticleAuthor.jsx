import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, useToast } from '@chakra-ui/react';
import Cards from '../../sections/utils/Cards';
import Navigation from '../../sections/utils/Navigation';
import Pagination from '../../sections/utils/Pagination';
import { ArticleAuthorContainer } from '../../styleComponents/articles/ArticleAuthorStyle';
import Axios from '../../utils/httpClient';
import SimpleLoading from '../../sections/layout/SimpleLoading';
import { copyText } from '../../utils/functions';

const ArticleAuthor = () => {
  const { id } = useParams();
  const [authorInfo, setAuthorInfo] = useState({});
  const [more, setMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [library, setLibrary] = useState([]);
  const toast = useToast();

  const getWorks = () => {
    setLoading(true);
    Axios()
      .get('/works')
      .then(res => {
        const l = [];
        (res?.data ?? []).forEach(item => {
          if (item?.author_info?.basic_info?.Web3Address === id) {
            l.push(item);
          }
        });
        setLibrary(l);
        // setLibrary(res?.data ?? []);
      })
      .catch(r => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const getAuthorInfo = () => {
    setLoading(true);
    Axios()
      .get(`/author_info/${id}`)
      .then(res => {
        setAuthorInfo(res?.data);
      })
      .catch(r => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAuthorInfo();
    getWorks();
  }, []);

  const copyToClipboard = () => {
    copyText(authorInfo?.basic_info?.Web3Address ?? '');
    toast({
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
          <img style={{ marginRight: '14px' }} src="/img/vector.svg" alt="" />
          Идентификатор автора был скопирован
        </Box>
      ),
    });
  };

  return (
    <ArticleAuthorContainer isActive={more}>
      <div>
        <Navigation
          active="Публикации автора"
          links={[
            {
              title: 'Библиотека',
              link: '/library',
            },
          ]}
        />
      </div>
      <div className="article_author">
        <div className="article_author__item">
          <div className="icon">
            <img src="/img/author_avatar.svg" alt="author" />
          </div>
          <div className="author_info">
            {loading ? (
              <SimpleLoading />
            ) : (
              <>
                <div className="info">
                  <h2 className="name">
                    {`${
                      authorInfo?.author_info?.name ??
                      authorInfo?.basic_info?.NickName ??
                      ''
                    } ${authorInfo?.author_info?.surname ?? ''}`}
                  </h2>
                  <div className="wallet">
                    <div>
                      <div className="wallet_id">
                        {window?.innerWidth < 900 ? (
                          <>
                            {authorInfo?.basic_info?.Web3Address?.slice(0, 5)}
                            ...
                            {authorInfo?.basic_info?.Web3Address?.slice(-4)}
                          </>
                        ) : (
                          authorInfo?.basic_info?.Web3Address
                        )}
                      </div>
                    </div>

                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                    <img
                      onClick={copyToClipboard}
                      src="/img/copy.svg"
                      alt="copy"
                    />
                  </div>
                </div>
                <div className="btn_target">
                  <button type="button" onClick={() => setMore(!more)}>
                    Подробнее
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="author_info__more">
        <hr />
        {loading ? (
          <SimpleLoading />
        ) : (
          <div className="author_info__more-items">
            <div className="author_info__more-item">
              <p>Email</p>
              <span>{authorInfo?.author_info?.email_address || 'N/A'}</span>
            </div>
            <div className="author_info__more-item">
              <p>ORCID</p>
              <span>{authorInfo?.author_info?.orcid || 'N/A'}</span>
            </div>
            <div className="author_info__more-item">
              <p>Google Scholar Profile</p>
              <span>
                {authorInfo?.author_info?.scholar_ship_profile || 'N/A'}
              </span>
            </div>
          </div>
        )}
      </div>
      <h1 className="title">Публикации автора</h1>
      <div className="btns">
        <div className="btn">
          <div>научное исследование</div>
          <div className="close_btn">
            <img src="/img/close.svg" alt="close" />
          </div>
        </div>
        <div className="btn">
          <div>научное исследование</div>
          <div className="close_btn">
            <img src="/img/close.svg" alt="close" />
          </div>
        </div>
        <div className="btn">
          <div>научное исследование</div>
          <div className="close_btn">
            <img src="/img/close.svg" alt="close" />
          </div>
        </div>
        <div className="btn">
          <div>научное исследование</div>
          <div className="close_btn">
            <img src="/img/close.svg" alt="close" />
          </div>
        </div>
        <div className="btn btn_disabled">
          <div>немецкий язык</div>
          <div className="close_btn">
            <img src="/img/close.svg" alt="close" />
          </div>
        </div>
        <div className="btn btn_disabled">
          <div>русский язык</div>
          <div className="close_btn">
            <img src="/img/close.svg" alt="close" />
          </div>
        </div>
      </div>
      <Cards library={library} updateLibrary={l => setLibrary(l)} />
      {/* <Pagination /> */}
    </ArticleAuthorContainer>
  );
};
export default ArticleAuthor;
