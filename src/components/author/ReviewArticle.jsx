import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { MyArticleStyle } from "../../styleComponents/author/MyArticleStyle";
import Navigation from "../../sections/utils/Navigation";
import { AuthorCreateContainer } from "../../styleComponents/author/Create";
import UiTable from "../../styleComponents/UiComponents/UiTable";
import { EmptyStyle } from "../../styleComponents/layout/EmptyStyle";
import { UiTableMobileStyle } from "../../styleComponents/UiComponents/UiTableMobileStyle";
import {
  Table,
  TableContainer,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import Axios from "../../utils/httpClient";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

const ReviewArticle = ({ select_work = {}, set_select_work = () => {} }) => {
  const { t, i18n } = useTranslation();
  const [work, setWork] = useState(select_work);
  const params = useParams();
  const dispatch = useDispatch();
  const tableData = [
    {
      id: 1,
      name: "Рецензия №1",
      date: "4 апреля, 2023",
      validator: { img: "/img/ellipse_2.svg" },
      actions: "Открыть",
      status: "одобрена",
    },
    {
      id: 2,
      name: "Рецензия №2",
      date: "4 апреля, 2023",
      validator: { img: "/img/ellipse_3.svg" },
      actions: "Открыть",
      status: "отклонена",
    },
  ];

  useEffect(() => {
    if (!select_work?.work?.id) {
      getWorks();
    }
  }, []);

  const getWorks = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    Axios()
      .get("/works")
      .then((res) => {
        let obj = {};
        (res?.data ?? []).forEach((item) => {
          if (item?.work?.id === (params?.id ?? "")) {
            obj = item;
          }
        });
        setWork(obj);
      })
      .catch((r) => {})
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };

  return (
    <div>
      <Layout>
        <AuthorCreateContainer>
          <div className="authorcontainer">
            <div className="create">
              <Navigation
                active={t('review_article.reviews')}
                links={[
                  {
                    title: t('review_article.myPapers'),
                    link: "/author/my-articles",
                  },
                ]}
              />
              <div className="review">
                <div className="review-items">
                  <img src="/img/livello_1.svg" alt="" />
                  <div className="review-item">
                    <Link to={"/articles/" + work?.work?.id}>
                      <h4>{work?.work?.name}</h4>
                    </Link>
                    <div className="authors">
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
                        {tableData.map((item) => (
                          <Tr>
                            <Td className="number-id">{item?.id}</Td>
                            <Td style={{ minWidth: "335px" }}>{item?.name}</Td>
                            <Td>
                              {item?.date ? (
                                item?.date
                              ) : (
                                <span className="no-data">{t('review_article.notPublished')}</span>
                              )}
                            </Td>
                            <Td>
                              <div
                                className="validators"
                                style={{ width: "36px"  , height:'36px'}}
                              >
                                <img src={"/img/user_avatar_2.svg"} alt="" />
                              </div>
                            </Td>

                            <Td>
                              <div
                                className={
                                  item?.status === t('review_article.accepted')
                                    ? "published status"
                                    : item?.status === t('review_article.rejected')
                                    ? "rejected status"
                                    : "  under-consideration status"
                                }
                              >
                                {item?.status}
                              </div>
                            </Td>

                            <Td>
                              <div
                                className="actions btn-table"
                                style={{ opacity: "0.5" }}
                              >
                                {item?.actions}
                              </div>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </UiTable>
              </div>
              <UiTableMobileStyle>
                {tableData.length !== 0 ? (
                  <>
                    {" "}
                    {tableData.map((item) => (
                      <>
                        <div className="card">
                          <div className="article_details">
                            <div className="text">{item?.name}</div>
                            <div
                              className={
                                item?.status === t('review_article.published')
                                  ? "published status"
                                  : item?.status === t('review_article.beingReviewed')
                                  ? "under-consideration status"
                                  : "rejected status"
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
                            <div className="date-item">{t('review_article.reviewers')}</div>
                            <div className="date-item__validators">
                              <img src={'/img/user_avatar_2.svg'} alt="" />
                            </div>
                          </div>

                          <div
                            style={{ opacity: "0.5" }}
                            //  to={`/author/my-article/review/${item?.id}`}
                          >
                            <button style={{cursor:'auto'}} className="actions">{item?.actions}</button>
                          </div>
                        </div>
                      </>
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
                          <p>
                            {t('review_article.notUploadedYet')}
                          </p>
                        </div>
                      </div>
                    </EmptyStyle>
                  </div>
                )}
              </UiTableMobileStyle>
            </div>
          </div>
        </AuthorCreateContainer>
      </Layout>
    </div>
  );
};

export default ReviewArticle;
