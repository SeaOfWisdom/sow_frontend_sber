import React from "react";
import Layout from "../Layout";
import {
  Container,
  ContainerDoshboard,
} from "../../styleComponents/author/DoshboardStyle";
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
import Pagination from "../../sections/utils/Pagination";
import { EmptyStyle } from "../../styleComponents/layout/EmptyStyle";
import { UiTableMobileStyle } from "../../styleComponents/UiComponents/UiTableMobileStyle";
import { useState } from "react";
import { UiCalendar } from "../../styleComponents/UiComponents/UiCalendar";
import Calendar from "../../sections/utils/Calendar";
import { month_list } from "../../utils/constants";
import { useTranslation } from 'react-i18next';

const DoshboardAuthor = () => {
  const { t } = useTranslation();
  const month_now = new Date().getMonth();
  const [fromcalendar, setFromCalendar] = useState(false);
  const [tocalendar, setToCalendar] = useState(false);
  const [calendarvalueto, setToCalendarValueto] = useState("");
  const [calendarvaluefrom, setToCalendarValuefrom] = useState("");

  const dataDoshboard = [
    {
      id: 1,
      text: t('dashboard_author.mockup'),
      views: 1435,
      token: 1000,
      actions: "0xd30D...AFbD",
    },
    {
      id: 2,
      text: t('dashboard_author.mockup'),
      views: 1435,
      token: 1000,
      actions: "0xd30D...AFbD",
    },
    {
      id: 3,
      text: t('dashboard_author.mockup'),
      views: 1435,
      token: 1000,
      actions: "0xd30D...AFbD",
    },
    {
      id: 4,
      text: t('dashboard_author.mockup'),
      views: 1435,
      token: 1000,
      actions: "0xd30D...AFbD",
    },
  ];

  const handleCalendarfrom = (e) => {
    setToCalendarValuefrom(e);
  };
  const handleCalendarto = (e) => {
    setToCalendarValueto(e);
  };
  return (
    <div>
      <Layout>
        <ContainerDoshboard>
          <div className="container">
            <div className="doshboard-count">
              <div className="doshboard-count-card">
                <div className="img">
                  <div className="img-item author">
                    <img src="/img/group-doshboard-1.svg" alt="" />
                  </div>
                </div>
                <div className="doshboard-count-card__item">
                  <p>{t('dashboard_author.nViews')}</p>
                  <h4>2 345</h4>
                </div>
              </div>
              <div className="doshboard-count-card">
                <div className="img">
                  <div className="img-item author">
                    <img src="/img/group-doshboard-2.svg" alt="" />
                  </div>
                </div>
                <div className="doshboard-count-card__item">
                  <p>{t('dashboard_author.nPapers')}</p>
                  <h4>15</h4>
                </div>
              </div>
              <div className="doshboard-count-card">
                <div className="img">
                  <div className="img-item author">
                    <img src="/img/group-doshboard-3.svg" alt="" />
                  </div>
                </div>
                <div className="doshboard-count-card__item">
                  <p>{t('dashboard_author.nCitation')}</p>
                  <h4>10</h4>
                </div>
              </div>
            </div>
            <div className="doshboard-count">
              <div className="doshboard-count-card">
                <div className="img">
                  <div className="img-item author">
                    <img src="/img/wallet_icon_2.svg" alt="" />
                  </div>
                </div>
                <div className="doshboard-count-card__item">

                  <p>{t('dashboard_author.totalRewards')}</p>
                  <h4>1 283 203 SOW <span>≈ 0.01 ETH</span></h4>

                </div>
              </div>
              <div className="doshboard-count-card">
                <div className="img">
                  <div className="img-item author">
                    <img src="/img/calendar_icon_2.svg" alt="" />
                  </div>
                </div>
                <div className="doshboard-count-card__item">
                  <p>{t('dashboard_author.rewardsLastMonth')}</p>
                  <h4>400 SOW <span>≈ 0.01 ETH</span></h4>

                </div>
              </div>
              <div className="doshboard-count-card">
                <div className="img">
                  <div className="img-item author">
                    <img src="/img/mask_group_2.svg" alt="" />
                  </div>
                </div>
                <div className="doshboard-count-card__item">

                  <p>{t('dashboard_author.rewardsLastWeek')}</p>
                  <h4>100 SOW <span>≈ 0.01 ETH</span></h4>

                </div>
              </div>
            </div>
            <div className="box-card">
              <div className="doshboard-title-items">
                <h4>{t('dashboard_author.rewards')}</h4>
                {/* <button className="doshboard-title-items__btn">
                  Смотреть все
                </button> */}
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
                      <span>c</span>
                      {"  " }
                      {calendarvaluefrom?.length === 0
                        ? new Date().getDate() < 10
                          ? `0${new Date().getDate()}`
                          : new Date().getDate()
                        : calendarvaluefrom?.slice(0, 2)}{" "}
                      {calendarvaluefrom?.length === 0
                        ? month_list[month_now]
                        : calendarvaluefrom?.slice(-7, -5) < 10
                        ? month_list[calendarvaluefrom?.slice(-6, -5) - 1]
                        : month_list[calendarvaluefrom?.slice(-7, -5) - 1]}
                      {", "}
                      {calendarvaluefrom?.length === 0
                        ? new Date().getFullYear()
                        : calendarvaluefrom?.slice(-4)}
                      <img src="/img/calendar.svg" alt="" />
                    </button>

                    <React.Fragment>
                      <div
                        className="modal-backdrop"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFromCalendar(!fromcalendar);
                        }}
                      />
                      <div className="opencalendar from">
                        <Calendar
                          value={calendarvaluefrom?.datevalue}
                          onChange={handleCalendarfrom}
                        />
                      </div>
                    </React.Fragment>
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
                      <span>до</span>{" "}
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
                    <React.Fragment>
                      <div
                        className="modal-backdrop"
                        onClick={(e) => {
                          e.stopPropagation();
                          setToCalendar(!tocalendar);
                        }}
                      />
                      <div className="opencalendar from" id="modalFrom">
                        <Calendar
                          value={calendarvalueto.datevalue}
                          onChange={handleCalendarto}
                        />
                      </div>
                    </React.Fragment>
                  </UiCalendar>
                </div>
              </div>
              <UiTable>
                {dataDoshboard.length !== 0 ? (
                  <TableContainer className="tableContainer">
                    <Table>
                      <Thead>
                        <Tr>
                          <Th className="number-id">#</Th>
                          <Th>{t('dashboard_author.paperDetails')}</Th>
                          <Th>{t('dashboard_author.views')}</Th>
                          <Th>{t('dashboard_author.tokens')}</Th>
                          <Th>{t('dashboard_author.actions')}</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {dataDoshboard.map((item) => (
                          <>
                            <Tr>
                              <Td className="number-id">{item?.id}</Td>
                              <Td style={{ maxWidth: "670px" }}>
                                <div
                                  style={{ maxWidth: "650px", display: "flex" }}
                                >
                                  <img src="/img/user_avatar.svg" alt="" />

                                  <span className="text_word">
                                    {item?.text}
                                  </span>
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
                    {/* <Pagination /> */}
                  </TableContainer>
                ) : (
                  <>
                    <TableContainer className="tableContainer">
                      <Table>
                        <Thead>
                          <Tr>
                            <Th className="number-id">#</Th>
                            <Th style={{ minWidth: "550px" }}>{t('dashboard_author.paperDetails')}</Th>
                            <Th>{t('dashboard_author.views')}</Th>
                            <Th>{t('dashboard_author.tokens')}</Th>
                          </Tr>
                        </Thead>
                      </Table>
                    </TableContainer>
                    <EmptyStyle>
                      <div className="notfound">
                        <div className="img">
                          <img src="/img/icon (5).svg" alt="" />
                        </div>
                        <h4>{t('dashboard_author.empty')}</h4>
                        <div className="text">
                          <p>
                            {t('dashboard_author.noPapersToBeReviewed')}
                          </p>
                        </div>
                      </div>
                    </EmptyStyle>
                  </>
                )}
              </UiTable>
            </div>
            <UiTableMobileStyle>
              {dataDoshboard.length !== 0 ? (
                <>
                  {" "}
                  {dataDoshboard.map((item) => (
                    <>
                      <div className="card">
                        <div className="article_details">
                          <img src="/img/user_avatar.svg" alt="" />
                        </div>
                        <div className="text">{item?.text}</div>
                        <hr />
                        <div className="date">
                          <div className="date-item">
                            {t('dashboard_author.viewsGenetive')}: {item?.views}
                          </div>
                          <div
                            className="reward"
                            style={
                              item?.token >= 0
                                ? { color: "#53C5B0" }
                                : { color: "#FF6A6A" }
                            }
                          >
                            +{item?.token} SOW
                          </div>
                        </div>
                        <button className="actions">{item?.actions}</button>
                      </div>
                    </>
                  ))}
                </>
              ) : (
                <div>
                  <EmptyStyle>
                    <div className="notfound">
                      <div className="img">
                        <img src="/img/notfoundtran.svg" alt="" />
                      </div>
                      <h4>{t('dashboard_author.empty')}</h4>
                      <div className="text">
                        <p>
                          {t('dashboard_author.noPapersToBeReviewed')}
                        </p>
                      </div>
                    </div>
                  </EmptyStyle>
                </div>
              )}
            </UiTableMobileStyle>
          </div>
        </ContainerDoshboard>
      </Layout>
    </div>
  );
};

export default DoshboardAuthor;
