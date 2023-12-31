import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { ContainerDoshboard } from '../../styleComponents/author/DoshboardStyle';
import UiTable from '../../styleComponents/UiComponents/UiTable';
import Pagination from '../../sections/utils/Pagination';
import { EmptyStyle } from '../../styleComponents/layout/EmptyStyle';
import Calendar from '../../sections/utils/Calendar';
import { UiCalendar } from '../../styleComponents/UiComponents/UiCalendar';

import { monthList } from '../../utils/constants';
import { UiTableMobileStyle } from '../../styleComponents/UiComponents/UiTableMobileStyle';

const ArticleTransaction = () => {
  const monthNow = new Date().getMonth();
  const [fromcalendar, setFromCalendar] = useState(false);
  const [tocalendar, setToCalendar] = useState(false);
  const [calendarvalueto, setToCalendarValueto] = useState('');
  const [calendarvaluefrom, setToCalendarValuefrom] = useState('');

  const handleCalendarfrom = e => {
    setToCalendarValuefrom(e);
  };
  const handleCalendarto = e => {
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
      text: 'Принципы построения текстов на ясном языке в немецкоязычном интернет-пространстве',
      views: '4 апреля, 2023',
      token: 1000,
      summa: -1000,
      status: 'успешно',
      actions: '0xd30D...AFbD',
    },
    {
      id: 2,
      text: 'Принципы построения текстов на ясном языке в немецкоязычном интернет-пространстве',
      views: '4 апреля, 2023',
      token: 1000,
      summa: 0,
      status: 'cancelled',
      actions: '0xd30D...AFbD',
    },
    {
      id: 3,
      text: 'Принципы построения текстов на ясном языке в немецкоязычном интернет-пространстве',
      views: '4 апреля, 2023',
      token: 1000,
      summa: -1000,
      status: 'успешно',
      actions: '0xd30D...AFbD',
    },
    {
      id: 4,
      text: 'Принципы построения текстов на ясном языке в немецкоязычном интернет-пространстве',
      views: '4 апреля, 2023',
      token: 1000,
      summa: -1000,
      status: 'успешно',
      actions: '0xd30D...AFbD',
    },
  ];

  window.onclick = function (event) {
    const modal = document.getElementById('fromModal');
    if (event.target === modal) {
      setFromCalendar(false);
    }
  };

  return (
    <ContainerDoshboard>
      <div className="container">
        <div
          style={{ marginTop: '32px', marginBottom: '' }}
          className="box-card"
        >
          <div className="doshboard-title-items">
            <h4>Статистика</h4>

            <div className="calendar">
              <UiCalendar
                isActive={fromcalendar}
                // isActiveto={tocalendar}
              >
                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    setFromCalendar(!fromcalendar);
                  }}
                >
                  <span>c</span>{' '}
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {calendarvaluefrom?.length === 0
                    ? new Date().getDate() < 10
                      ? `0${new Date().getDate()}`
                      : new Date().getDate()
                    : calendarvaluefrom?.slice(0, 2)}{' '}
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {calendarvaluefrom?.length === 0
                    ? monthList[monthNow]
                    : calendarvaluefrom?.slice(-7, -5) < 10
                    ? // eslint-disable-next-line no-unsafe-optional-chaining
                      monthList[calendarvaluefrom?.slice(-6, -5) - 1]
                    : // eslint-disable-next-line no-unsafe-optional-chaining
                      monthList[calendarvaluefrom?.slice(-7, -5) - 1]}
                  {', '}
                  {calendarvaluefrom?.length === 0
                    ? new Date().getFullYear()
                    : calendarvaluefrom?.slice(-4)}
                  <img src="/img/calendar.svg" alt="" />
                </button>

                <>
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <div
                    className="modal-backdrop"
                    onClick={e => {
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
                </>
              </UiCalendar>
              <div className="hr-calendar"> </div>
              <UiCalendar
                isActive={tocalendar}
                // isActiveto={tocalendar}
              >
                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    setToCalendar(!tocalendar);
                  }}
                >
                  <span>до</span>{' '}
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {calendarvalueto.length === 0
                    ? new Date().getDate() < 10
                      ? `0${new Date().getDate()}`
                      : new Date().getDate()
                    : calendarvalueto.slice(0, 2)}{' '}
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {calendarvalueto.length === 0
                    ? monthList[monthNow]
                    : calendarvalueto.slice(-7, -5) < 10
                    ? monthList[calendarvalueto.slice(-6, -5) - 1]
                    : monthList[calendarvalueto.slice(-7, -5) - 1]}
                  {', '}
                  {calendarvalueto.length === 0
                    ? new Date().getFullYear()
                    : calendarvalueto.slice(-4)}
                  <img src="/img/calendar.svg" alt="" />
                </button>
                <>
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <div
                    className="modal-backdrop"
                    onClick={e => {
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
                </>
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
                      <Th>Детали статьи</Th>
                      <Th>Дата статистика</Th>
                      <Th>Статус</Th>
                      <Th>Сумма</Th>
                      <Th>Действия</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {dataDoshboard.map(item => (
                      <Tr>
                        <Td className="number-id">{item?.id}</Td>
                        <Td style={{ maxWidth: '650px' }}>
                          <div style={{ maxWidth: '650px', display: 'flex' }}>
                            <img src="/img/user_avatar.svg" alt="" />

                            <span>{item?.text}</span>
                          </div>
                        </Td>
                        <Td>{item?.views}</Td>
                        <Td>
                          <div
                            className={
                              item?.status === 'успешно'
                                ? 'status published'
                                : 'status rejected'
                            }
                          >
                            {item?.status}
                          </div>
                        </Td>
                        <Td
                          className="reward"
                          style={
                            item?.summa >= 0
                              ? { color: '#847F99' }
                              : { color: '#FF6A6A' }
                          }
                        >
                          {item?.summa} SOW
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
                        <Th>Дата статистика</Th>
                        <Th>Статус</Th>
                        <Th>Сумма</Th>
                        <Th>Действия</Th>
                      </Tr>
                    </Thead>
                  </Table>
                </TableContainer>
                <EmptyStyle>
                  <div className="notfound">
                    <div className="img">
                      <img src="/img/notfoundtran.svg" alt="" />
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
        <UiTableMobileStyle>
          {dataDoshboard.length !== 0 ? (
            <>
              {' '}
              {dataDoshboard.map(item => (
                <div className="card">
                  <div className="article_details">
                    <img src="/img/user_avatar.svg" alt="" />
                    <div
                      className={
                        item?.status === 'успешно'
                          ? 'status published'
                          : 'status rejected'
                      }
                    >
                      {item?.status}
                    </div>
                  </div>
                  <div className="text">{item?.text}</div>
                  <hr />
                  <div className="date">
                    <div className="date-item">{item?.views}</div>
                    <div
                      className="reward"
                      style={
                        item?.summa >= 0
                          ? { color: '#847F99' }
                          : { color: '#FF6A6A' }
                      }
                    >
                      {item?.summa} SOW
                    </div>
                  </div>
                  <button type="button" className="actions">
                    {item?.actions}
                  </button>
                </div>
              ))}
            </>
          ) : (
            <div>
              <EmptyStyle>
                <div className="notfound">
                  <div className="img">
                    <img src="/img/notfoundtran.svg" alt="" />
                  </div>
                  <h4>Здесь пока пусто</h4>
                  <div className="text">
                    <p>
                      У вас пока нет статей на рецензию. Они будут отображаться
                      на этой странице.
                    </p>
                  </div>
                </div>
              </EmptyStyle>
            </div>
          )}
        </UiTableMobileStyle>
      </div>
    </ContainerDoshboard>
  );
};

export default ArticleTransaction;
