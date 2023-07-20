import React, { useEffect, useState } from 'react';
import {
  Table,
  TableContainer,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from '@chakra-ui/react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { ru, enUS } from 'date-fns/locale';
import Navigation from '../../sections/utils/Navigation';
import { AuthorCreateContainer } from '../../styleComponents/author/Create';
import UiTable from '../../styleComponents/UiComponents/UiTable';
import { EmptyStyle } from '../../styleComponents/layout/EmptyStyle';
import { UiTableMobileStyle } from '../../styleComponents/UiComponents/UiTableMobileStyle';
import Axios from '../../utils/httpClient';

const ReviewArticle = () => {
  const { t, i18n } = useTranslation();
  const [work, setWork] = useState();
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const getWorks = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    Axios()
      .get('/works')
      .then(res => {
        let obj = {};
        (res?.data ?? []).forEach(item => {
          if (item?.work?.id === (id ?? '')) {
            obj = item;
          }
        });
        setWork(obj);
      })
      .catch(r => {});
  };

  const getReviews = async () => {
    Axios()
      .get(`/work_reviews/${id}`)
      .then(res => {
        if (res?.data?.length) {
          const initialReviews = res.data.map((review, index) => ({
            ...review,
            name: `Рецензия #${index + 1}`,
            status: 'одобрена',
            validator: { img: '/img/ellipse_2.svg' },
            actions: 'Открыть',
          }));
          setReviews(initialReviews);
        }
      })
      .catch(r => {})
      .finally(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
      });
  };

  useEffect(() => {
    const getInitialData = async () => {
      await Promise.all([getWorks(), getReviews()]);
      // await getWorks();
      // await getReviews();
    };
    if (id) {
      getInitialData();
    }
  }, [id]);

  return (
    <div>
      <AuthorCreateContainer>
        <div className="authorcontainer">
          <div className="create">
            <Navigation
              active={t('review_article.reviews')}
              links={[
                {
                  title: t('review_article.myPapers'),
                  link: '/author/my-articles',
                },
              ]}
            />
            <div className="review">
              <div className="review-items">
                <img src="/img/livello_1.svg" alt="" />
                <div className="review-item">
                  <Link to={`/articles/${work?.work?.id}`}>
                    <h4>{work?.work?.name}</h4>
                  </Link>
                  <div className="authors">
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
                </div>
              </div>
            </div>
            <div className="table-review">
              <UiTable>
                <TableContainer className="tableContainer">
                  <Table>
                    <Thead>
                      <Tr>
                        <Th className="number-id">#</Th>
                        <Th>{t('review_article.paperName')}</Th>
                        <Th>{t('review_article.reviewIssueDate')}</Th>
                        <Th>{t('review_article.reviewer')}</Th>
                        <Th>{t('review_article.status')}</Th>
                        <Th>{t('review_article.actions')}</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {reviews.length ? (
                        reviews.map((item, index) => (
                          <Tr>
                            <Td className="number-id">{index + 1}</Td>
                            <Td style={{ minWidth: '335px' }}>{item?.name}</Td>
                            <Td>
                              {item?.created_date ? (
                                format(
                                  new Date(item.created_date),
                                  'dd MMMM, yyyy',
                                  {
                                    locale: i18n.language === 'ru' ? ru : enUS,
                                  }
                                )
                              ) : (
                                <span className="no-data">
                                  {t('review_article.notPublished')}
                                </span>
                              )}
                            </Td>
                            <Td>
                              <div
                                className="validators"
                                style={{ width: '36px', height: '36px' }}
                              >
                                <img src="/img/user_avatar_2.svg" alt="" />
                              </div>
                            </Td>

                            <Td>
                              <div
                                className={
                                  // eslint-disable-next-line no-nested-ternary
                                  item?.status === t('review_article.accepted')
                                    ? 'published status'
                                    : item?.status ===
                                      t('review_article.rejected')
                                    ? 'rejected status'
                                    : '  under-consideration status'
                                }
                              >
                                {item?.status}
                              </div>
                            </Td>

                            <Td>
                              <div
                                className="actions btn-table"
                                style={{ opacity: '0.5' }}
                              >
                                {item?.actions}
                              </div>
                            </Td>
                          </Tr>
                        ))
                      ) : (
                        <Tr>
                          <Td className="single" colSpan={6}>
                            {t('review_article.yetEmpty')}
                          </Td>
                        </Tr>
                      )}
                    </Tbody>
                  </Table>
                </TableContainer>
              </UiTable>
            </div>
            <UiTableMobileStyle>
              {reviews.length !== 0 ? (
                <>
                  {' '}
                  {reviews.map(item => (
                    <div className="card">
                      <div className="article_details">
                        <div className="text">{item?.name}</div>
                        <div
                          className={
                            // eslint-disable-next-line no-nested-ternary
                            item?.status === t('review_article.published')
                              ? 'published status'
                              : item?.status ===
                                t('review_article.beingReviewed')
                              ? 'under-consideration status'
                              : 'rejected status'
                          }
                        >
                          {item?.status}
                        </div>
                      </div>

                      <hr />

                      <div className="date">
                        <div className="date-item">
                          {t('review_article.reviewIssueDate')}
                        </div>
                        <div className="date-item__value">{item?.date}</div>
                      </div>
                      <div className="date">
                        <div className="date-item">
                          {t('review_article.reviewers')}
                        </div>
                        <div className="date-item__validators">
                          <img src="/img/user_avatar_2.svg" alt="" />
                        </div>
                      </div>

                      <div
                        style={{ opacity: '0.5' }}
                        //  to={`/author/my-article/review/${item?.id}`}
                      >
                        <button
                          type="button"
                          style={{ cursor: 'auto' }}
                          className="actions"
                        >
                          {item?.actions}
                        </button>
                      </div>
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
                      <h4>{t('review_article.yetEmpty')}</h4>
                      <div className="text">
                        <p>{t('review_article.notUploadedYet')}</p>
                      </div>
                    </div>
                  </EmptyStyle>
                </div>
              )}
            </UiTableMobileStyle>
          </div>
        </div>
      </AuthorCreateContainer>
    </div>
  );
};

export default ReviewArticle;
