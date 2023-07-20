import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardsContainer } from '../../styleComponents/utilsStyles/CardsStyle';

import ArticleSaved from './ArticleSaved';
import CreatedAt from './CreatedAt';

import DateForm from './DateForm';

const Cards = ({ library = [], updateLibrary = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [savedItem, setSavedItem] = useState({});
  const { account } = useSelector(s => s);
  return (
    <CardsContainer>
      <div className="cards">
        {Array.isArray(library)
          ? library?.map(item => (
              <div className="card" key={Math.random() * Date.now()}>
                <div className="bookmark_target">
                  {account?.role ? (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>
                      {item?.bookmarked ? (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                        <img
                          className="bookmark"
                          src="/img/bookmark2.svg"
                          onClick={() => {
                            setIsOpen(true);
                            setSavedItem({
                              articleId: item?.work?.id ?? '',
                              bookmarked: item?.bookmarked ?? false,
                            });
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
                            setSavedItem({
                              articleId: item?.work?.id ?? '',
                              bookmarked: item?.bookmarked ?? false,
                            });
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
                <Link
                  to={`/articles/${item?.work?.id ?? ''}`}
                  className="card_body"
                >
                  <div>
                    <div className="date">
                      <img src="/img/star.svg" alt="star" />
                      <span className="time">
                        <DateForm createdAt={item?.work?.created_at} />
                      </span>
                    </div>
                    <h3 className="title">{item?.work?.name ?? ''}</h3>
                    <div className="author">
                      {/* <span>{item?.author_info?.basic_info?.NickName??''}</span> */}
                      <span>
                        <Link
                          to={`/articles-author/${
                            item?.author_info?.basic_info?.Web3Address ?? ''
                          }`}
                        >
                          {`${
                            item?.author_info?.author_info?.name ??
                            item?.author_info?.basic_info?.NickName ??
                            ''
                          } ${item?.author_info?.author_info?.surname ?? ''}`}
                        </Link>
                      </span>
                    </div>
                    <p className="desc">{item?.work?.annotation ?? ''}</p>
                  </div>
                  <div>
                    <div className="condition">
                      {item?.work?.Tags?.map(tag => (
                        <span className="btn" key={Math.random() * Date.now()}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="price_target">
                      <span className="price">
                        {(item?.work?.price ?? 0) / 1000000000000000000}
                      </span>
                      <span className="unity">SOW</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          : null}
      </div>
      <ArticleSaved
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        bookmarked={savedItem?.bookmarked}
        articleId={savedItem?.articleId}
        handleSaved={value => {
          let l = [];
          library.forEach(item => {
            if (item?.work?.id === savedItem?.articleId) {
              l = [...l, { ...item, bookmarked: value }];
            } else {
              l = [...l, item];
            }
          });
          updateLibrary(l);
        }}
      />
    </CardsContainer>
  );
};
export default Cards;
