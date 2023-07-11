import React from "react";
import Layout from "../Layout";
import { MyArticleStyle } from "../../styleComponents/author/MyArticleStyle";
import UiTable from "../../styleComponents/UiComponents/UiTable";
import {
  Table,
  TableContainer,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Pagination from "../../sections/utils/Pagination";
import { useState } from "react";
import Checkbox from "../../sections/utils/Checkbox";
const WritingReviewSuccess = () => {
  const [check, setCheck] = useState({});
  const [err, setErr] = useState({});
  const tableData = [
    {
      id: 1,
      name: "Принципы построения текстов на ясном языке в немецкоязычном интер...",
      datecreate: "4 апреля, 2023",
      datepublication: "до 16 апреля, 2023",
      actions: "Написать рецензию",
      status: "ожидает рецензии",
      reward: 0,
      validators: [
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_3.svg" },
      ],
      author: [
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_3.svg" },
        { img: "/img/ellipse_2.svg" },
      ],
    },
    {
      id: 2,
      name: "Принципы построения текстов на ясном языке в немецкоязычном интер...",
      datecreate: "4 апреля, 2023",
      datepublication: "до 1 мая, 2023",
      actions: "Опубликовать",
      status: "готова к публикации",
      reward: 0,
      validators: [
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_3.svg" },
      ],
      author: [
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_3.svg" },
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_2.svg" },
      ],
    },
    {
      id: 3,
      name: "Принципы построения текстов на ясном языке в немецкоязычном интер...",
      datecreate: "4 апреля, 2023",
      datepublication: "до 1 мая, 2023",
      actions: "Опубликовать",
      status: "рецензия отправлена",
      reward: 1000,
      validators: [
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_3.svg" },
      ],
      author: [
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_3.svg" },
        { img: "/img/ellipse_2.svg" },
      ],
    },
    {
      id: 4,
      name: "Принципы построения текстов на ясном языке в немецкоязычном интер...",
      datecreate: "4 апреля, 2023",
      datepublication: "до 15 апреля, 2023",
      actions: "Посмотреть",
      status: "статья опубликована",
      reward: 0,
      validators: [
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_3.svg" },
      ],
      author: [
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_3.svg" },
        { img: "/img/ellipse_2.svg" },
      ],
    },
    {
      id: 5,
      name: "Принципы построения текстов на ясном языке в немецкоязычном интер...",
      datecreate: "4 апреля, 2023",
      datepublication: "до 12 апреля, 2023",
      actions: null,
      status: "просрочено",
      reward: -500,
      validators: [
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_3.svg" },
      ],
      author: [
        { img: "/img/ellipse_2.svg" },
        { img: "/img/ellipse_3.svg" },
        { img: "/img/ellipse_2.svg" },
      ],
    },
  ];
 
  return (
    <div>
      <Layout>
        <MyArticleStyle>
          <div className="my-article">
            <div className="box-card">
              <div className="article-filter">
                <h4>Статьи на рецензию</h4>
                <div className="btn-article">
                  <Checkbox
                    className="checkbox"
                    name="check1"
                    checked={check?.check1}
                    onChange={(e) => {
                      setCheck({ ...check, check1: !check?.check1 });
                      setErr({ ...err, check1: false });
                    }}
                  />
                  {/* <button className="add-status">
                    <img src="/img/add-circle.svg" alt="" />
                    Создать статью
                  </button> */}
                </div>
              </div>
              {tableData.length !== 0 ? (
                <UiTable>
                  <TableContainer className="tableContainer">
                    <Table>
                      <Thead>
                        <Tr>
                          <Th className="number-id">#</Th>
                          <Th>Название статьи</Th>
                          <Th>Дата создания</Th>
                          <Th>Срок рецензирования</Th>
                          <Th>Авторы</Th>
                          <Th>Валидаторы</Th>
                          <Th>Статус</Th>
                          <Th>Награда</Th>
                          <Th>Действия</Th>
                        </Tr>
                      </Thead>

                      <Tbody>
                        {tableData.map((item) => (
                          <Tr>
                            <Td className="number-id">{item?.id}</Td>
                            <Td>{item?.name}</Td>
                            <Td>{item?.datecreate}</Td>
                            <Td>
                              <div className={"published status"}>
                                {item?.datepublication}
                              </div>
                            </Td>
                            <Td>
                              <div className="validators">
                                {item?.author.length <= 3 ? (
                                  item?.author.map(({ img }) => (
                                    <>
                                      <img src={img} alt="" />
                                    </>
                                  ))
                                ) : (
                                  <>
                                    <img src={item?.author[0]?.img} alt="" />
                                    <img src={item?.author[1]?.img} alt="" />
                                    {/* <img src={item?.author[3]?.img} alt="" /> */}
                                    <div className="circle">
                                      +{item?.author.length - 3}
                                    </div>
                                  </>
                                )}
                              </div>
                            </Td>
                            <Td>
                              {console.log(item?.author.length, 3, "img")}
                              <div className="validators">
                                {item?.validators.map(({ img }) => (
                                  <>
                                    <img src={img} alt="" />
                                  </>
                                ))}
                              </div>
                            </Td>
                            <Td>
                              <div
                                className={
                                  item?.status === "опубликована"
                                    ? "published status"
                                    : item?.status === "готова к публикации"
                                    ? "under-consideration status"
                                    : "rejected status"
                                }
                              >
                                {item?.status}
                              </div>
                            </Td>
                            <Td>
                              <div
                                className="reward"
                                style={
                                  item?.reward > 0
                                    ? { color: "#53C5B0" }
                                    : item?.reward === 0
                                    ? { color: "#847F99" }
                                    : { color: "#FF6A6A" }
                                }
                              >
                                {item?.reward} SOW
                              </div>
                            </Td>
                            <Td>
                              <Link
                              // to={`/author/my-articlesreview/${item?.id}`}
                              >
                                {item?.actions !== null ? (
                                  <div className="actions">{item?.actions}</div>
                                ) : null}
                              </Link>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </UiTable>
              ) : (
                <>
                  <UiTable>
                    <TableContainer className="tableContainer">
                      <Table>
                        <Thead>
                          <Tr>
                            <Th>#</Th>
                            <Th>Название статьи</Th>
                            <Th>Дата создания</Th>
                            <Th>Дата публикации</Th>
                            <Th>Авторы</Th>
                            <Th>Валидаторы</Th>
                            <Th>Статус</Th>
                            <Th>Награда</Th>
                            <Th>Действия</Th>
                          </Tr>
                        </Thead>
                      </Table>
                    </TableContainer>
                  </UiTable>
                  <div className="notfound">
                    <div className="img">
                      <img src="/img/notfound.svg" alt="" />
                    </div>
                    <h4>Здесь пока пусто</h4>
                    <div className="text">
                      <p>
                        У вас пока нет статей на рецензию. Они будут
                        отображаться на этой странице.
                      </p>
                    </div>
                  </div>
                </>
              )}
              <Pagination />
            </div>
          </div>
        </MyArticleStyle>
      </Layout>
    </div>
  );
};

export default WritingReviewSuccess;
