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
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../sections/utils/Pagination";
import { UiSelect } from "../../styleComponents/UiComponents/UISelect";
import { useState } from "react";
import { useEffect } from "react";
import Checkbox from "../../sections/utils/Checkbox";
import Axios from "../../utils/httpClient";
import { useDispatch } from "react-redux";
import DateForm from "../../sections/utils/DateForm";
import { EmptyStyle } from "../../styleComponents/layout/EmptyStyle";
import { UiTableMobileStyle } from "../../styleComponents/UiComponents/UiTableMobileStyle";
import WritingReview from "./WritingReview";
import ModalDate from "../../sections/homeSections/ModalDate";
import Modal from "../../sections/layout/Modal";
import ModalStatus from "../../sections/layout/ModalStatus";
const ValidatorArticle = () => {
  const [active, setActive] = useState(false);
  const [active_m, setActive_m] = useState(false);
  const [check, setCheck] = useState({});
  const [selectWork, setSelectWork] = useState({});
  const [err, setErr] = useState({});
  const navigate = useNavigate();

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
  useEffect(() => {
    const onClick = () => {
      setActive(false);
    };
    if (active) {
      window.addEventListener("click", onClick);
    }
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [active]);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    getWorks();
  }, []);

  const getWorks = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    Axios()
      .get("/works")
      .then((res) => {
        const d = res?.data ?? [];
        setData(d);
      })
      .catch((e) => {})
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };

  return (
    <>
      {selectWork?.work?.id ? (
        <WritingReview
          select_work={selectWork}
          set_select_work={(v) => setSelectWork(v)}
        />
      ) : (
        <div>
          <Layout>
            <MyArticleStyle>
              <div className="my-article">
                <div className="box-card validator-card">
                  <div className="article-filter">
                    <h4>Статьи на рецензию</h4>
                    <div className="btn-article desktop">
                      <UiSelect
                        isActive={active}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActive(!active);
                        }}
                      >
                        <div
                          style={{
                            cursor: "pointer",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span className="langspan" style={{ width: "176px" }}>
                            {/* {lan === "ru" ? "Руc" : "Eng"} */}
                            Все статусы
                          </span>
                          {active ? <Up /> : <Down />}
                        </div>
                        <ul>
                          <div
                          //   onClick={() => onLanguageHandle("ru")}
                          >
                            {[
                              { label: "Все статусы ", id: 1 },
                              { label: "Опубликована", id: 2 },
                              { label: "На рассмотрении", id: 3 },
                              { label: "На рассмотрении ", id: 4 },
                              { label: "Отклонена валидатором", id: 5 },
                            ].map((item) => (
                              <span
                                //   onClick={() => onLanguageHandle("ru")}

                                style={{
                                  display: "flex",
                                  justifyContent: "left",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox
                                  className="checkbox"
                                  name="check1"
                                  checked={check?.check1}
                                  onChange={(e) => {
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
                      <div
                        className="all-status"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActive_m(!active_m);
                        }}
                      >
                        <span>Все статусы</span>
                        {active_m ? <Up /> : <Down />}
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
                            {data.map((item, index) => (
                              <Tr key={index}>
                                <Td className="number-id">{index + 1}</Td>
                                <Td style={{ minWidth: "238px" }}>
                                  {/* <Link  to={ "/validator/articles-for-review/"+item?.work?.id }>
                                  {item?.work?.name}
                              </Link>  */}
                                  <div style={{ fontFamily: "Golos" }}>
                                    {item?.work?.name}
                                  </div>
                                </Td>
                                <Td>
                                  <DateForm
                                    created_at={item?.work?.created_at}
                                  />
                                </Td>
                                <Td>
                                  <div
                                    className={
                                      tableData[1]?.id === 1
                                        ? "orginal-review status"
                                        : tableData[1]?.id === 2
                                        ? "finish-publish status"
                                        : tableData[1]?.id === 3
                                        ? "finish-publish  status"
                                        : tableData[1]?.id === 4
                                        ? "orginal-review status"
                                        : "rejected status"
                                    }
                                  >
                                    {tableData[1]?.datepublication}
                                  </div>
                                </Td>
                                <Td>
                                  <Link
                                    className="validators"
                                    to={
                                      "/articles-author/" +
                                      item?.author_info?.basic_info?.Web3Address
                                    }
                                  >
                                    <img
                                      src={"/img/user_avatar_3.svg"}
                                      alt=""
                                    />
                                    {/* {tableData[1]?.author.length <= 3 ? (
                                  tableData[1]?.author.map(({ img }) => (
                                    <>
                                      <img src={img} alt="" />
                                    </>
                                  ))
                                ) : (
                                  <>
                                    <img src={tableData[1]?.author[0]?.img} alt="" />
                                    <img src={tableData[1]?.author[1]?.img} alt="" /> 
                                    <div className="circle">
                                      +{tableData[1]?.author.length - 3}
                                    </div>
                                  </>
                                )} */}
                                  </Link>
                                </Td>
                                <Td>
                                  <div className="validators">
                                    {/* {tableData[1]?.validators.map(({ img }) => (
                                  <> */}
                                    <img
                                      src={"/img/user_avatar_2.svg"}
                                      alt=""
                                    />
                                    {/* </>
                                ))} */}
                                  </div>
                                </Td>
                                <Td>
                                  <div
                                    className={
                                      tableData[1]?.id === 1
                                        ? "orginal-review status"
                                        : tableData[1]?.id === 2
                                        ? "finish-publish status"
                                        : tableData[1]?.id === 3
                                        ? "under-consideration status"
                                        : tableData[1]?.id === 4
                                        ? "article-publish status"
                                        : "rejected status"
                                    }
                                  >
                                    {tableData[1]?.status}
                                  </div>
                                </Td>
                                <Td>
                                  <div
                                    className="reward"
                                    style={
                                      tableData[1]?.reward > 0
                                        ? { color: "#53C5B0" }
                                        : tableData[1]?.reward === 0
                                        ? { color: "#847F99" }
                                        : { color: "#FF6A6A" }
                                    }
                                  >
                                    {tableData[1]?.reward} SOW
                                  </div>
                                </Td>
                                <Td>
                                  <div
                                  // to={`/author/my-articles/review/${item?.id}`}
                                  >
                                    {tableData[1]?.actions !== null ? (
                                      <>
                                        {/* <Link
                                    to={
                                      "/validator/articles-for-review/"+item?.work?.id
                                    }
                                    className={
                                      tableData[1]?.status ===
                                      "ожидает рецензии"
                                        ? "actions btn-table"
                                        : tableData[1]?.status ===
                                          "готова к публикации"
                                        ? "btn-table publish-btn "
                                        : tableData[1]?.status ===
                                          "рецензия отправлена"
                                        ? "btn-table review-sent"
                                        : tableData[1]?.status ===
                                          "статья опубликована"
                                        ? "view-btn btn-table"
                                        : ""
                                    }
                                  >
                                    {tableData[1]?.actions}
                                  </Link> */}
                                        <span
                                          style={{ cursor: "pointer" }}
                                          onClick={() => setSelectWork(item)}
                                          className={
                                            tableData[1]?.status ===
                                            "ожидает рецензии"
                                              ? "actions btn-table"
                                              : tableData[1]?.status ===
                                                "готова к публикации"
                                              ? "btn-table publish-btn "
                                              : tableData[1]?.status ===
                                                "рецензия отправлена"
                                              ? "btn-table review-sent"
                                              : tableData[1]?.status ===
                                                "статья опубликована"
                                              ? "view-btn btn-table"
                                              : ""
                                          }
                                        >
                                          {tableData[1]?.actions}
                                        </span>
                                      </>
                                    ) : null}
                                  </div>
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
                        <div className="notfound">
                          <div className="img">
                            <img src="/img/notfounvalidator.svg" alt="" />
                          </div>
                          <h4>Здесь пока пусто</h4>
                          <div className="text">
                            <p>
                              У вас пока нет статей на рецензию. Они будут
                              отображаться на этой странице.
                            </p>
                          </div>
                        </div>
                      </UiTable>
                    </>
                  )}
                  {/* <Pagination /> */}
                </div>
                <UiTableMobileStyle>
                  {data.length !== 0 ? (
                    <>
                      {data.map((item, index) => (
                        <>
                          <div className="card" key={index + "nn"}>
                            <div className="article_details">
                              <img src="/img/user_avatar.svg" alt="" />
                              <div
                                className={
                                  // item?.status === "опубликована"
                                  //   ?
                                  "published status"
                                  // : item?.status === "на рассмотрении"
                                  // ? "under-consideration status"
                                  // : "rejected status"
                                }
                              >
                                {/* {item?.status} */}
                                опубликована
                              </div>
                            </div>

                            <div className="text">{item?.work?.name}</div>
                            <hr />

                            <div className="date">
                              <div className="date-item">Дата создания</div>
                              <div className="date-item__value">
                                {item?.work?.created_at ? (
                                  <DateForm
                                    created_at={item?.work?.created_at}
                                  />
                                ) : (
                                  <span className="no-data">
                                    не опубликована
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="date">
                              <div className="date-item">
                                Срок рецензирования
                              </div>
                              <div
                                // className=""
                                className={
                                  tableData[1]?.id === 1
                                    ? "orginal-review status date-item__value"
                                    : tableData[1]?.id === 2
                                    ? "finish-publish status date-item__value"
                                    : tableData[1]?.id === 3
                                    ? "finish-publish  status date-item__value"
                                    : tableData[1]?.id === 4
                                    ? "orginal-review status date-item__value"
                                    : "rejected status"
                                }
                              >
                                {tableData[1]?.datepublication}
                              </div>
                            </div>
                            <div className="date">
                              <div className="date-item">Авторы</div>
                              <div className="date-item__validators">
                                <Link
                                  className="validators"
                                  to={
                                    "/articles-author/" +
                                    item?.author_info?.basic_info?.Web3Address
                                  }
                                >
                                  <img src={"/img/user_avatar_3.svg"} alt="" />
                                  {/* {tableData[1]?.author.length <= 3 ? (
                                  tableData[1]?.author.map(({ img }) => (
                                    <>
                                      <img src={img} alt="" />
                                    </>
                                  ))
                                ) : (
                                  <>
                                    <img src={tableData[1]?.author[0]?.img} alt="" />
                                    <img src={tableData[1]?.author[1]?.img} alt="" /> 
                                    <div className="circle">
                                      +{tableData[1]?.author.length - 3}
                                    </div>
                                  </>
                                )} */}
                                </Link>
                              </div>
                            </div>
                            <div className="date">
                              <div className="date-item">Валидаторы</div>
                              <div className="date-item__validators">
                                {/* {item?.validators.map(({ img }) => (
                                  <>
                                    <img src={img} alt="" />
                                  </>
                                ))} */}
                                <img src={"/img/user_avatar_2.svg"} alt="" />
                              </div>
                            </div>
                            <hr />
                            <div className="date">
                              <div className="date-item">Награда</div>
                              <div
                                className="reward"
                                style={
                                  item?.reward > 0
                                    ? { color: "#53C5B0" }
                                    : { color: "#847F99" }
                                }
                              >
                                {item?.reward > 0 ? (
                                  <>+{item?.reward ?? 0}</>
                                ) : (
                                  <>{item?.reward ?? 0}</>
                                )}{" "}
                                SOW
                              </div>
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => setSelectWork(item)}
                            >
                              <button className="actions">
                                {tableData[1]?.actions}
                              </button>
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
                          <h4>Здесь пока пусто</h4>
                          <div className="text">
                            <p>
                              Вы пока не загрузили ни одну стать. Создайте свою
                              первую статью прямо сейчас!
                            </p>
                          </div>
                        </div>
                      </EmptyStyle>
                    </div>
                  )}
                </UiTableMobileStyle>
              </div>
            </MyArticleStyle>
          </Layout>
          <Modal
            isOpen={active_m}
            header="Выберите статус"
            onOpen={setActive_m}
          >
            <ModalStatus setmodal={setActive_m} />
          </Modal>
        </div>
      )}
    </>
  );
};

export default ValidatorArticle;
