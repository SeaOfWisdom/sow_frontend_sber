import React, { useState, useEffect } from 'react';
import {
  Table,
  TableContainer,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { MyArticleStyle } from '../../styleComponents/author/MyArticleStyle';
import UiTable from '../../styleComponents/UiComponents/UiTable';
import { UiSelect } from '../../styleComponents/UiComponents/UISelect';
import Checkbox from '../../sections/utils/Checkbox';
import { EmptyStyle } from '../../styleComponents/layout/EmptyStyle';
import { UiTableMobileStyle } from '../../styleComponents/UiComponents/UiTableMobileStyle';
import Axios from '../../utils/httpClient';
import DateForm from '../../sections/utils/DateForm';
import ModalStatus from '../../sections/layout/ModalStatus';
import Modal from '../../sections/layout/Modal';

const Down = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.80562 1.35781L5.58206 5.58137C5.32288 5.84054 4.90267 5.84054 4.64349 5.58137L0.419927 1.35781C0.160747 1.09863 0.160748 0.678416 0.419927 0.419237C0.679105 0.160058 1.09932 0.160058 1.3585 0.419237L5.11277 4.17351L8.86705 0.419238C9.12623 0.160059 9.54644 0.160059 9.80562 0.419238C10.0648 0.678416 10.0648 1.09863 9.80562 1.35781Z"
      fill="#2A2C35"
    />
  </svg>
);
const Up = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.80562 4.64219L5.58206 0.418634C5.32288 0.159455 4.90267 0.159455 4.64349 0.418634L0.419927 4.64219C0.160747 4.90137 0.160748 5.32158 0.419927 5.58076C0.679105 5.83994 1.09932 5.83994 1.3585 5.58076L5.11277 1.82649L8.86705 5.58076C9.12623 5.83994 9.54644 5.83994 9.80562 5.58076C10.0648 5.32158 10.0648 4.90137 9.80562 4.64219Z"
      fill="#2A2C35"
    />
  </svg>
);

const MyArticle = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(false);
  const [activeM, setActiveM] = useState(false);
  const [check, setCheck] = useState({});
  const [err, setErr] = useState({});
  const [mockupIdd, setMockupIdd] = useState('');
  const [mockupId, setMockupId] = useState('');
  const [selectWork, setSelectWork] = useState({});
  const [work, setWork] = useState({});
  const params = useParams();

  useEffect(() => {
    const onClick = () => {
      setActive(false);
    };
    if (active) {
      window.addEventListener('click', onClick);
    }
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [active]);

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const getWorks = () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    const mId = '';
    Axios()
      .get('/works')
      .then(res => {
        const d = (res?.data ?? []).filter(
          i =>
            i?.author_info?.basic_info?.Web3Address ===
            localStorage.getItem('accountAddress')
        );
        setData(d);
        // if (d.length > 0) {
        //   mId = get(d, `${d.length - 1}.work.id`, '');
        //   setMockupIdd(mId);
        // }
      })
      .catch(e => {})
      .finally(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
        // setTimeout(() => {
        //   setMockupId(mId);
        // }, 6000);
      });
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <div>
      <MyArticleStyle>
        <div className="my-article">
          <div className="box-card">
            <div className="article-filter">
              <h4>{t('my_article.myPapers')}</h4>
              <div className="btn-article desktop">
                <UiSelect
                  isActive={active}
                  onClick={e => {
                    e.stopPropagation();
                    setActive(!active);
                  }}
                >
                  <div
                    style={{
                      cursor: 'pointer',
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span className="langspan" style={{ width: '176px' }}>
                      {/* {lan === "ru" ? "Руc" : "Eng"} */}
                      {t('my_article.allStatuses')}
                    </span>
                    {active ? <Up /> : <Down />}
                  </div>
                  <ul>
                    <div
                    //   onClick={() => onLanguageHandle("ru")}
                    >
                      {[
                        { label: t('my_article.allStatuses'), id: 1 },
                        { label: t('my_article.published'), id: 2 },
                        { label: t('my_article.beingReviewed'), id: 3 },
                        { label: t('my_article.beingReviewed'), id: 4 },
                        {
                          label: t('my_article.rejectedByReviewer'),
                          id: 5,
                        },
                      ].map(item => (
                        <span
                          //   onClick={() => onLanguageHandle("ru")}

                          style={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                          }}
                        >
                          <Checkbox
                            className="checkbox"
                            name="check1"
                            checked={check?.check1}
                            onChange={e => {
                              setCheck({
                                ...check,
                                check1: !check?.check1,
                              });
                              setErr({ ...err, check1: false });
                            }}
                          />
                          <div className="statuslabel">{item?.label}</div>
                        </span>
                      ))}
                    </div>
                  </ul>
                </UiSelect>
              </div>
              <div className="mobile">
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div
                  className="all-status"
                  onClick={e => {
                    e.stopPropagation();
                    setActiveM(!activeM);
                  }}
                >
                  <span>{t('my_article.allStatuses')}</span>
                  {activeM ? <Up /> : <Down />}
                </div>
              </div>
            </div>
            {data.length !== 0 ? (
              <UiTable>
                <TableContainer className="tableContainer">
                  <Table>
                    <Thead>
                      <Tr>
                        <Th className="number-id">#</Th>
                        <Th>{t('my_article.paperName')}</Th>
                        <Th>{t('my_article.creationDate')}</Th>
                        <Th>{t('my_article.publishDate')}</Th>
                        <Th>{t('my_article.authors')}</Th>
                        <Th>{t('my_article.reviewers')}</Th>
                        <Th>{t('my_article.status')}</Th>
                        <Th>{t('my_article.reward')}</Th>
                        <Th>{t('my_article.actions')}</Th>
                      </Tr>
                    </Thead>

                    <Tbody>
                      {data
                        .filter(i => mockupId === i?.work?.id)
                        .map((item, index) => (
                          <Tr key={Math.random() * Date.now()}>
                            <Td className="number-id">{index + 1}</Td>
                            <Td style={{ maxWidth: '235px', minWidth: 200 }}>
                              {item?.work?.name}
                            </Td>
                            <Td>
                              {item?.work?.created_at ? (
                                <DateForm createdAt={item?.work?.created_at} />
                              ) : (
                                <span className="no-data">
                                  {t('my_article.notPublished')}
                                </span>
                              )}
                            </Td>
                            <Td>
                              {item?.work?.publish_date ? (
                                <DateForm
                                  createdAt={item?.work?.publish_date}
                                />
                              ) : (
                                <DateForm createdAt={item?.work?.created_at} />
                              )}

                              {/* {item?.datepublication ? (
                                item?.datepublication
                              ) : (
                                <span className="no-data">не опубликована</span>
                              )} */}
                            </Td>
                            <Td>
                              <Link
                                to={`/articles-author/${
                                  item?.author_info?.basic_info?.Web3Address ??
                                  ''
                                }`}
                              >
                                <div className="validators">
                                  <img src="/img/user_avatar_3.svg" alt="" />
                                  {/* {tableData[0].author.length <= 3 ? (
                                  tableData[0]?.author.map(({ img }) => (
                                    <>
                                      <img src={img} alt="" />
                                    </>
                                  ))
                                ) : (
                                  <>
                                    <img src={tableData[0]?.author[0]?.img} alt="" />
                                    <img src={tableData[0]?.author[1]?.img} alt="" />
                                    <div className="circle">
                                      +{tableData[0]?.author.length - 3}
                                    </div>
                                  </>
                                )} */}
                                </div>
                              </Link>
                            </Td>
                            <Td>
                              <div className="validators">
                                <img src="/img/user_avatar_2.svg" alt="" />
                                {/* {tableData[0]?.validators.map(({ img }) => (
                                  <>
                                    <img src={img} alt="" />
                                  </>
                                ))} */}
                              </div>
                            </Td>
                            <Td>
                              <div
                                className={
                                  'published status'
                                  // item?.status === "опубликована"
                                  //   ? "published status"
                                  //   : item?.status === "на рассмотрении"
                                  //   ? "under-consideration status"
                                  //   : "rejected status"
                                }
                              >
                                {/* {item?.status} */}
                                {t('my_article.publishedLower')}
                              </div>
                            </Td>
                            <Td>
                              <div
                                className="reward"
                                style={
                                  item?.reward > 0
                                    ? { color: '#53C5B0' }
                                    : { color: '#847F99' }
                                }
                              >
                                {item?.reward > 0 ? (
                                  <>+{item?.reward ?? 0}</>
                                ) : (
                                  // eslint-disable-next-line react/jsx-no-useless-fragment
                                  <>{item?.reward ?? 0}</>
                                )}{' '}
                                SOW
                              </div>
                            </Td>
                            <Td>
                              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                              <Link
                                // onClick={() => setSelectWork(item)}
                                to={`/author/my-articles/reviews/${item?.work?.id}`}
                                style={{ cursor: 'pointer' }}
                              >
                                <div className="btn-table actions">
                                  {/* {item?.actions} */}
                                  {t('my_article.reviews')} (2/2)
                                </div>
                              </Link>
                            </Td>
                          </Tr>
                        ))}
                      {data
                        .filter(i => mockupIdd !== i?.work?.id)
                        .map((item, index) => (
                          <Tr key={Math.random() * Date.now()}>
                            <Td className="number-id">
                              {index + (mockupId ? 2 : 1)}
                            </Td>
                            <Td style={{ maxWidth: '235px', minWidth: 200 }}>
                              {item?.work?.name}
                            </Td>
                            <Td>
                              {item?.work?.created_at ? (
                                <DateForm createdAt={item?.work?.created_at} />
                              ) : (
                                <span className="no-data">
                                  {t('my_article.notPublished')}
                                </span>
                              )}
                            </Td>
                            <Td>
                              {item?.work?.publish_date ? (
                                <DateForm
                                  createdAt={item?.work?.publish_date}
                                />
                              ) : (
                                <DateForm createdAt={item?.work?.created_at} />
                              )}
                              {/* {item?.datepublication ? (
                                item?.datepublication
                              ) : (
                                <span className="no-data">не опубликована</span>
                              )} */}
                            </Td>
                            <Td>
                              <Link
                                to={`/articles-author/${
                                  item?.author_info?.basic_info?.Web3Address ??
                                  ''
                                }`}
                              >
                                <div className="validators">
                                  <img src="/img/user_avatar_3.svg" alt="" />
                                  {/* {tableData[0].author.length <= 3 ? (
                                  tableData[0]?.author.map(({ img }) => (
                                    <>
                                      <img src={img} alt="" />
                                    </>
                                  ))
                                ) : (
                                  <>
                                    <img src={tableData[0]?.author[0]?.img} alt="" />
                                    <img src={tableData[0]?.author[1]?.img} alt="" />
                                    <div className="circle">
                                      +{tableData[0]?.author.length - 3}
                                    </div>
                                  </>
                                )} */}
                                </div>
                              </Link>
                            </Td>
                            <Td>
                              <div className="validators">
                                <img src="/img/user_avatar_2.svg" alt="" />

                                {/* {tableData[0]?.validators.map(({ img }) => (
                                  <>
                                    <img src={img} alt="" />
                                  </>
                                ))} */}
                              </div>
                            </Td>
                            <Td>
                              <div
                                className={
                                  'published status'
                                  // item?.status === "опубликована"
                                  //   ? "published status"
                                  //   : item?.status === "на рассмотрении"
                                  //   ? "under-consideration status"
                                  //   : "rejected status"
                                }
                              >
                                {/* {item?.status} */}
                                {t('my_article.published')}
                              </div>
                            </Td>
                            <Td>
                              <div
                                className="reward"
                                style={
                                  item?.reward > 0
                                    ? { color: '#53C5B0' }
                                    : { color: '#847F99' }
                                }
                              >
                                {item?.reward > 0 ? (
                                  <>+{item?.reward ?? 0}</>
                                ) : (
                                  // eslint-disable-next-line react/jsx-no-useless-fragment
                                  <>{item?.reward ?? 0}</>
                                )}{' '}
                                SOW
                              </div>
                            </Td>
                            <Td>
                              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                              <Link
                                // onClick={() => setSelectWork(item)}
                                to={`/author/my-articles/reviews/${item?.work?.id}`}
                                style={{ cursor: 'pointer' }}
                              >
                                <div className="btn-table actions">
                                  {/* {item?.actions} */}
                                  {t('my_article.reviews')} (2/2)
                                </div>
                              </Link>
                            </Td>
                          </Tr>
                        ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </UiTable>
            ) : (
              <UiTable>
                <TableContainer className="tableContainer">
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>#</Th>
                        <Th>{t('my_article.paperName')}</Th>
                        <Th>{t('my_article.creationDate')}</Th>
                        <Th>{t('my_article.publishDate')}</Th>
                        <Th>{t('my_article.authors')}</Th>
                        <Th>{t('my_article.reviewers')}</Th>
                        <Th>{t('my_article.status')}</Th>
                        <Th>{t('my_article.reward')}</Th>
                        <Th>{t('my_article.actions')}</Th>
                      </Tr>
                    </Thead>
                  </Table>
                </TableContainer>
                <div className="notfound">
                  <div className="img">
                    <img src="/img/notfound.svg" alt="" />
                  </div>
                  <h4>{t('my_article.yetEmpty')}</h4>
                  <div className="text">
                    <p>{t('my_article.notUploadedYet')}</p>
                  </div>
                </div>
              </UiTable>
            )}
            {/* <Pagination /> */}
          </div>
          <UiTableMobileStyle>
            {data.length !== 0 ? (
              <>
                {data
                  .filter(i => mockupId === i?.work?.id)
                  .map((item, index) => (
                    <div className="card" key={Math.random() * Date.now()}>
                      <div className="article_details">
                        <img src="/img/user_avatar.svg" alt="" />
                        <div
                          className={
                            // item?.status === "опубликована"
                            //   ?
                            'published status'
                            // : item?.status === "на рассмотрении"
                            // ? "under-consideration status"
                            // : "rejected status"
                          }
                        >
                          {/* {item?.status} */}
                          {t('my_article.publishedLower')}
                        </div>
                      </div>

                      <div className="text">{item?.work?.name}</div>
                      <hr />

                      <div className="date">
                        <div className="date-item">
                          {t('my_article.creationDate')}
                        </div>
                        <div className="date-item__value">
                          {item?.work?.created_at ? (
                            <DateForm createdAt={item?.work?.created_at} />
                          ) : (
                            <span className="no-data">
                              {t('my_article.notPublished')}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="date">
                        <div className="date-item">
                          {t('my_article.publishDate')}
                        </div>
                        <div className="date-item__value">
                          {item?.work?.publish_date ? (
                            <DateForm createdAt={item?.work?.publish_date} />
                          ) : (
                            <DateForm createdAt={item?.work?.created_at} />
                          )}
                        </div>
                      </div>
                      <div className="date">
                        <div className="date-item">
                          {t('my_article.authors')}
                        </div>
                        <div className="date-item__validators">
                          <Link
                            to={`/articles-author/${
                              item?.author_info?.basic_info?.Web3Address ?? ''
                            }`}
                          >
                            <img src="/img/user_avatar_3.svg" alt="" />
                            {/* {tableData[0].author.length <= 3 ? (
                                  tableData[0]?.author.map(({ img }) => (
                                    <>
                                      <img src={img} alt="" />
                                    </>
                                  ))
                                ) : (
                                  <>
                                    <img src={tableData[0]?.author[0]?.img} alt="" />
                                    <img src={tableData[0]?.author[1]?.img} alt="" />
                                    <div className="circle">
                                      +{tableData[0]?.author.length - 3}
                                    </div>
                                  </>
                                )} */}
                          </Link>
                        </div>
                      </div>
                      <div className="date">
                        <div className="date-item">
                          {t('my_papers.reviewers')}
                        </div>
                        <div className="date-item__validators">
                          {/* {item?.validators.map(({ img }) => (
                                    <>
                                      <img src={img} alt="" />
                                    </>
                                  ))} */}
                          <img src="/img/user_avatar_2.svg" alt="" />
                        </div>
                      </div>
                      <hr />
                      <div className="date">
                        <div className="date-item">
                          {t('my_article.reward')}
                        </div>
                        <div
                          className="reward"
                          style={
                            item?.reward > 0
                              ? { color: '#53C5B0' }
                              : { color: '#847F99' }
                          }
                        >
                          {item?.reward > 0 ? (
                            <>+{item?.reward ?? 0}</>
                          ) : (
                            // eslint-disable-next-line react/jsx-no-useless-fragment
                            <>{item?.reward ?? 0}</>
                          )}{' '}
                          SOW
                        </div>
                      </div>
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                      <Link
                        // onClick={() => setSelectWork(item)}
                        to={`/author/my-articles/reviews/${item?.work?.id}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="actions">
                          {/* {item?.actions} */}
                          {t('my_article.reviews')} (2/2)
                        </div>
                      </Link>
                    </div>
                  ))}
                {data
                  .filter(i => mockupIdd !== i?.work?.id)
                  .map(item => (
                    <div className="card" key={Math.random() * Date.now()}>
                      <div className="article_details">
                        <img src="/img/user_avatar.svg" alt="" />
                        <div
                          className={
                            // item?.status === "опубликована"
                            //   ?
                            'published status'
                            // : item?.status === "на рассмотрении"
                            // ? "under-consideration status"
                            // : "rejected status"
                          }
                        >
                          {/* {item?.status} */}
                          {t('my_article.publishedLower')}
                        </div>
                      </div>

                      <div className="text">{item?.work?.name}</div>
                      <hr />

                      <div className="date">
                        <div className="date-item">
                          {t('my_article.creationDate')}
                        </div>
                        <div className="date-item__value">
                          {item?.work?.created_at ? (
                            <DateForm createdAt={item?.work?.created_at} />
                          ) : (
                            <span className="no-data">
                              {t('my_article.notPublished')}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="date">
                        <div className="date-item">
                          {t('my_article.publishDate')}
                        </div>
                        <div className="date-item__value">
                          {item?.work?.publish_date ? (
                            <DateForm createdAt={item?.work?.publish_date} />
                          ) : (
                            <DateForm createdAt={item?.work?.created_at} />
                          )}
                        </div>
                      </div>
                      <div className="date">
                        <div className="date-item">
                          {t('my_article.authors')}
                        </div>
                        <div className="date-item__validators">
                          <Link
                            to={`/articles-author/${
                              item?.author_info?.basic_info?.Web3Address ?? ''
                            }`}
                          >
                            <img src="/img/user_avatar_3.svg" alt="" />
                            {/* {tableData[0].author.length <= 3 ? (
                                  tableData[0]?.author.map(({ img }) => (
                                    <>
                                      <img src={img} alt="" />
                                    </>
                                  ))
                                ) : (
                                  <>
                                    <img src={tableData[0]?.author[0]?.img} alt="" />
                                    <img src={tableData[0]?.author[1]?.img} alt="" />
                                    <div className="circle">
                                      +{tableData[0]?.author.length - 3}
                                    </div>
                                  </>
                                )} */}
                          </Link>
                        </div>
                      </div>
                      <div className="date">
                        <div className="date-item">
                          {t('my_article.reviewers')}
                        </div>
                        <div className="date-item__validators">
                          {/* {item?.validators.map(({ img }) => (
                                    <>
                                      <img src={img} alt="" />
                                    </>
                                  ))} */}
                          <img src="/img/user_avatar_2.svg" alt="" />
                        </div>
                      </div>
                      <hr />
                      <div className="date">
                        <div className="date-item">
                          {t('my_article.reward')}
                        </div>
                        <div
                          className="reward"
                          style={
                            item?.reward > 0
                              ? { color: '#53C5B0' }
                              : { color: '#847F99' }
                          }
                        >
                          {item?.reward > 0 ? (
                            <>+{item?.reward ?? 0}</>
                          ) : (
                            // eslint-disable-next-line react/jsx-no-useless-fragment
                            <>{item?.reward ?? 0}</>
                          )}{' '}
                          SOW
                        </div>
                      </div>
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                      <Link
                        // onClick={() => setSelectWork(item)}
                        to={`/author/my-articles/reviews/${item?.work?.id}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className=" actions">
                          {/* {item?.actions} */}
                          {t('my_article.reviews')} (2/2)
                        </div>
                      </Link>
                    </div>
                  ))}
              </>
            ) : (
              <div>
                <EmptyStyle>
                  <div className="notfound">
                    <div className="img">
                      <img src="/img/notfound.svg" alt="" />
                    </div>
                    <h4>{t('my_article.yetEmpty')}</h4>
                    <div className="text">
                      <p>{t('my_article.notUploadedYet')}</p>
                    </div>
                  </div>
                </EmptyStyle>
              </div>
            )}
          </UiTableMobileStyle>
        </div>
      </MyArticleStyle>
      <Modal isOpen={activeM} header="Выберите статус" onOpen={setActiveM}>
        <ModalStatus setmodal={setActiveM} />
      </Modal>
    </div>
  );
};

export default MyArticle;
