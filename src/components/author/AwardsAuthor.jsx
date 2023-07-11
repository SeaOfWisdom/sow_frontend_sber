import React from "react";
import Layout from "../Layout";
import { Container, ContainerDoshboard } from "../../styleComponents/author/DoshboardStyle";
import UiTable from "../../styleComponents/UiComponents/UiTable";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Pagination from "../../sections/utils/Pagination";
import { EmptyStyle } from "../../styleComponents/layout/EmptyStyle";
import { useState } from "react";
import { UiCalendar } from "../../styleComponents/UiComponents/UiCalendar";
import Calendar from "../../sections/utils/Calendar";
import { useEffect } from "react";
import { month_list } from "../../utils/constants";
const AwardsAuthor = () => {
  const month_now = new Date().getMonth();
  const [fromcalendar, setFromCalendar] = useState(false);
  const [tocalendar, setToCalendar] = useState(false);
  const [calendarvalueto, setToCalendarValueto] = useState("");
  const [calendarvaluefrom, setToCalendarValuefrom] = useState("");

  const handleCalendarfrom = (e) => {
    setToCalendarValuefrom(e);
  };
  const handleCalendarto = (e) => {
    setToCalendarValueto(e);
  };

  // useEffect(() => {
  //   const onClick = () => {
  //     setFromCalendar(false);
  //     setToCalendar(false);
  //   };
  //   if (fromcalendar || tocalendar) {
  //     window.addEventListener("click", onClick);
  //   }
  //   return () => {
  //     window.removeEventListener("click", onClick);
  //   };
  // }, [tocalendar, fromcalendar]);

  const dataDoshboard = [
    {
      id: 1,
      text: "Принципы построения текстов на ясном языке в немецкоязычном интернет-пространстве",
      views: 1435,
      token: 1000,
      actions: "0xd30D...AFbD",
    },
    {
      id: 2,
      text: "Принципы построения текстов на ясном языке в немецкоязычном интернет-пространстве",
      views: 1435,
      token: 1000,
      actions: "0xd30D...AFbD",
    },
    {
      id: 3,
      text: "Принципы построения текстов на ясном языке в немецкоязычном интернет-пространстве",
      views: 1435,
      token: 1000,
      actions: "0xd30D...AFbD",
    },
    {
      id: 4,
      text: "Принципы построения текстов на ясном языке в немецкоязычном интернет-пространстве",
      views: 1435,
      token: 1000,
      actions: "0xd30D...AFbD",
    },
  ];
  return (
    <div>
      <Layout>
        <ContainerDoshboard>
          <div className="container">
            <div className="doshboard-count">
              <div className="doshboard-count-card">
                <div className="doshboard-count-card__item">
                  <p>Всего заработано за весь период</p>
                  <h4>
                    1 283 203 SOW <span>≈ 0.01 ETH</span>
                  </h4>
                </div>
              </div>
              <div className="doshboard-count-card">
                <div className="doshboard-count-card__item">
                  <p>Заработано за последний месяц</p>
                  <h4>
                    400 SOW <span>≈ 0.01 ETH</span>
                  </h4>
                </div>
              </div>
              <div className="doshboard-count-card">
                <div className="doshboard-count-card__item">
                  <p>Заработано за последнюю неделю</p>
                  <h4>
                    100 SOW <span>≈ 0.01 ETH</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="box-card">
              <div className="doshboard-title-items">
                <h4>Награды</h4>
                <div className="calendar">
                  <UiCalendar
                    isActive={fromcalendar}
                    // isActiveto={tocalendar}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFromCalendar(!fromcalendar);
                      }}
                    >
                      <span>c</span>{' '}
                      {calendarvaluefrom?.length === 0
                        ? new Date().getDate() < 10
                          ? `0${new Date().getDate()}`
                          : new Date().getDate()
                        : calendarvaluefrom?.slice(0, 2)}{" "}
                      {calendarvaluefrom?.length === 0
                        ? month_list[month_now ]
                        : calendarvaluefrom?.slice(-7, -5) < 10
                        ? month_list[calendarvaluefrom?.slice(-6, -5) - 1]
                        : month_list[calendarvaluefrom?.slice(-7, -5) - 1]}
                      {", "}
                      {calendarvaluefrom?.length === 0
                        ? new Date().getFullYear()
                        : calendarvaluefrom?.slice(-4)}
                      <img src="/img/calendar.svg" alt="" />
                    </button>

                    <div className="opencalendar from" id="fromModal">
                      <Calendar
                        id="fromModal"
                        value={calendarvaluefrom?.datevalue}
                        onChange={handleCalendarfrom}
                      />
                    </div>
                  </UiCalendar>
                  <div className="hr-calendar"> </div>
                  <UiCalendar
                    isActive={tocalendar}
                    // isActiveto={tocalendar}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setToCalendar(!tocalendar);
                      }}
                    >
                      <span>до</span>{' '}
                      {calendarvalueto.length === 0
                        ? new Date().getDate() < 10
                          ? `0${new Date().getDate()}`
                          : new Date().getDate()
                        : calendarvalueto.slice(0, 2)}{" "}
                      {calendarvalueto.length === 0
                        ? month_list[month_now]
                        : calendarvalueto.slice(-7, -5) < 10
                        ? month_list[calendarvalueto.slice(-6, -5) - 1]
                        : month_list[calendarvalueto.slice(-7, -5) - 1]}
                      {", "}
                      {calendarvalueto.length === 0
                        ? new Date().getFullYear()
                        : calendarvalueto.slice(-4)}
                      <img src="/img/calendar.svg" alt="" />
                    </button>

                    <div className="opencalendar from" id="modalFrom">
                      <Calendar
                        value={calendarvalueto.datevalue}
                        onChange={handleCalendarto}
                      />
                    </div>
                  </UiCalendar>
                </div>
                {/* <button className="doshboard-title-items__btn">Смотреть все</button> */}
              </div>
              <UiTable>
                {dataDoshboard.length !== 0 ? (
                  <TableContainer className="tableContainer">
                    <Table>
                      <Thead>
                        <Tr>
                          <Th className="number-id">#</Th>
                          <Th>Детали статьи</Th>
                          <Th>Кол-во просмотров</Th>
                          <Th>Кол-во заработанных токенов</Th>
                          <Th>Действия</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {dataDoshboard.map((item) => (
                          <>
                            <Tr>
                              <Td className="number-id">{item?.id}</Td>
                              <Td style={{ maxWidth: "650px" }}>
                                <div
                                  style={{ maxWidth: "650px", display: "flex" }}
                                >
                                  <img src="/img/user_avatar.svg" alt="" />

                                  <span>{item?.text}</span>
                                </div>
                              </Td>
                              <Td>{item?.views}</Td>
                              <Td
                                className="reward"
                                style={
                                  item?.views > 0
                                    ? { color: "#53C5B0" }
                                    : { color: "#847F99" }
                                }
                              >
                                +{item?.token} SOW
                              </Td>
                              <Td>
                                <div
                                  // style={{width:"134px"}}
                                  className="btn-table actions"
                                >
                                  {item?.actions}
                                </div>
                              </Td>
                            </Tr>
                          </>
                        ))}
                      </Tbody>
                    </Table>
                    <Pagination />
                  </TableContainer>
                ) : (
                  <>
                    <TableContainer className="tableContainer">
                      <Table>
                        <Thead>
                          <Tr>
                            <Th className="number-id">#</Th>
                            <Th>Детали статьи</Th>
                            <Th>Кол-во просмотров</Th>
                            <Th>Кол-во заработанных токенов</Th>
                            <Th>Действия</Th>
                          </Tr>
                        </Thead>
                      </Table>
                    </TableContainer>
                    <EmptyStyle>
                      <div className="notfound">
                        <div className="img">
                          <img src="/img/icon_5.svg" alt="" />
                        </div>
                        <h4>Здесь пока пусто</h4>
                        <div className="text">
                          <p>
                            У вас пока нет статей на рецензию. Они будут
                            отображаться на этой странице.
                          </p>
                        </div>
                      </div>
                    </EmptyStyle>
                  </>
                )}
              </UiTable>
            </div>
          </div>
        </ContainerDoshboard>
      </Layout>
    </div>
  );
};

export default AwardsAuthor;
