import React from "react";
import Layout from "../Layout";
import { AuthorCreateContainer } from "../../styleComponents/author/Create";
import Navigation from "../../sections/utils/Navigation";
import { useParams } from "react-router-dom";
import UiTable from "../../styleComponents/UiComponents/UiTable";
import { useTranslation } from 'react-i18next';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const ReviewDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  return (
    <div>
      <Layout>
        <AuthorCreateContainer>
          <div className="authorcontainer">
            <div className="create">
              <Navigation
                active={t('review_details.detailsReview')}
                links={[
                  {
                    title: t('review_details.myPapers'),
                    link: "/author/my-articles",
                  },
                  {
                    title: t('review_details.reviews'),
                    link: `/author/my-articles/${id}`,
                  },
                ]}
              />
              <div className="box-card">
                <div className="article-detail">
                  <h4>
                    Рецензия на научную статью “Принципы построения текстов на
                    ясном языке в немецкоязычном интернет-пространстве”
                  </h4>
                  <span className="validator">Валидатор: Лимарова Е. В.</span>

                  <div className="article-detail-items">
                    <h5>{t('review_details.review')}</h5>
                    <p>
                      Статья посвящена проблеме написания текстов на ясном языке
                      (leichte Sprache). В ней указывается важность применения
                      ясного языка как средства интеграции в общественную жизнь
                      людей различных социальных групп. В данной статье
                      приводятся принципы построения текста на ясном языке,
                      указывается важность понимания отдельных слов и
                      предложений, приводятся правила и даются рекомендации по
                      составлению новостных текстов. При написании статьи
                      используются методы стратификации, сопоставительного
                      анализа, а также описательный метод. Приведенные в статье
                      правила были получены благодаря людям, практикующим ясный
                      язык, который является инструментом включения определенных
                      социальных групп в общественную, культурную, политическую
                      жизнь общества. <br />
                      Статья посвящена проблеме написания текстов на ясном языке
                      (leichte Sprache). В ней указывается важность применения
                      ясного языка как средства интеграции в общественную жизнь
                      людей различных социальных групп. В данной статье
                      приводятся принципы построения текста на ясном языке,
                      указывается важность понимания отдельных слов и
                      предложений, приводятся правила и даются рекомендации по
                      составлению новостных текстов. При написании статьи
                      используются методы стратификации, сопоставительного
                      анализа, а также описательный метод. Приведенные в статье
                      правила были получены благодаря людям, практикующим ясный
                      язык, который является инструментом включения определенных
                      социальных групп в общественную, культурную, политическую
                      жизнь общества.
                    </p>
                  </div>
                  <div className="article-detail-items">
                    <h5>{t('review_details.authorComments')}</h5>
                    <p>
                      Статья посвящена проблеме написания текстов на ясном языке
                      (leichte Sprache). В ней указывается важность применения
                      ясного языка как средства интеграции в общественную жизнь
                      людей различных социальных групп. В данной статье
                      приводятся принципы построения текста на ясном языке,
                      указывается важность понимания отдельных слов и
                      предложений, приводятся правила и даются рекомендации по
                      составлению новостных текстов. При написании статьи
                      используются методы стратификации, сопоставительного
                      анализа, а также описательный метод. Приведенные в статье
                      правила были получены благодаря людям, практикующим ясный
                      язык, который является инструментом включения определенных
                      социальных групп в общественную, культурную, политическую
                      жизнь общества.
                    </p>
                  </div>
                  <div className="article-detail-items">
                    <h5>{t('review_details.paperCriteria')}</h5>
                    <UiTable>
                      <TableContainer className="tableContainer">
                        <Table>
                          <Thead>
                            <Tr className="article-detail-tr__head">
                              <Th>{t('review_details.acceptance')}</Th>
                              <Th className="rt_title">{t('review_details.dontAgree')}</Th>
                              <Th className="rt_title">{t('review_details.ratherDontAgree')}</Th>
                              <Th className="rt_title">{t('review_details.neutral')}</Th>
                              <Th className="rt_title">{t('review_details.ratherAgree')}</Th>
                              <Th className="rt_title">{t('review_details.agree')}</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr className="article-detail-tr__body">
                              <Td style={{ minWidth: "400px" }}>
                                {t('review_details.relevantTopic')}
                              </Td>
                              <Td>
                                <div>
                                  <img src="/img/vector.svg" alt="" />
                                </div>
                              </Td>
                              <Td>
                                <div>
                                  <img src="/img/ellipse_7.svg" alt="" />
                                </div>
                              </Td>
                              <Td>
                                <div>
                                  <img src="/img/ellipse_7.svg" alt="" />
                                </div>
                              </Td>
                              <Td>
                                <div>
                                  <img src="/img/ellipse_7.svg" alt="" />
                                </div>
                              </Td>
                              <Td>
                                <div>
                                  <img src="/img/ellipse_7.svg" alt="" />
                                </div>
                              </Td>
                            </Tr>
                            <Tr className="article-detail-tr__body">
                              <Td style={{ minWidth: "400px" }}>
                                {t('review_details.relevantTopic')}
                              </Td>
                              <Td>
                                <div>
                                  <img src="/img/ellipse_7.svg" alt="" />
                                </div>
                              </Td>
                              <Td>
                                <div>
                                  <img src="/img/vector.svg" alt="" />
                                </div>
                              </Td>
                              <Td>
                                <div>
                                  <img src="/img/ellipse_7.svg" alt="" />
                                </div>
                              </Td>
                              <Td>
                                <div>
                                  <img src="/img/vector.svg" alt="" />
                                </div>
                              </Td>
                              <Td>
                                <div>
                                  <img src="/img/ellipse_7.svg" alt="" />
                                </div>
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </UiTable>
                    <div className="table_mobile">
                      <div className="card">
                        <div className="text">
                          {t('review_details.relevantTopic')}
                        </div>
                        <div className="roise">
                          <img src="/img/vector.svg" alt="" />
                          <div className="roise_item">{t('review_details.agree')}</div>
                        </div>
                        <hr />
                      </div>
                      <div className="card">
                        <div className="text">
                          {t('review_details.relevantTopic')}
                        </div>
                        <div className="roise">
                          <img src="/img/vector.svg" alt="" />
                          <div className="roise_item">{t('review_details.agree')}</div>
                        </div>
                        <hr />
                      </div>
                      <div className="card">
                        <div className="text">
                          {t('review_details.relevantTopic')}
                        </div>
                        <div className="roise">
                          <img src="/img/vector.svg" alt="" />
                          <div className="roise_item">{t('review_details.agree')}</div>
                        </div>
                        <hr />
                      </div>
                      <div className="card">
                        <div className="text">
                          {t('review_details.relevantTopic')}
                        </div>
                        <div className="roise">
                          <img src="/img/vector.svg" alt="" />
                          <div className="roise_item">{t('review_details.agree')}</div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AuthorCreateContainer>
      </Layout>
    </div>
  );
};

export default ReviewDetails;
