import React, { useEffect } from "react";
import Layout from "../Layout";
import { AuthorCreateContainer } from "../../styleComponents/author/Create";
import {
  Breadcrumb,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Navigation from "../../sections/utils/Navigation";
import { useState } from "react";
import Modalnfo from "../../sections/author/Modalnfo";
import { Link, useParams } from "react-router-dom";
import UiTable from "../../styleComponents/UiComponents/UiTable";
import { useNavigate } from "react-router-dom";
import { MobileTableCheck } from "../../styleComponents/layout/mobileTableCheck";
import { useTranslation } from "react-i18next";
import Axios from "../../utils/httpClient";
import { useDispatch } from "react-redux";
import { get } from "lodash";

const WritingReview = ({ select_work = {}, set_select_work = () => {} }) => {
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();
  const params = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [work, setWork] = useState(select_work);
  const [obj, setObj] = useState({
    questionnaire: { questions: {} },
    review: "",
    description: "",
  });
  const [error, setError] = useState({});
  const questions = [
    {
      id: "question_1",
      question: "Рассматриваемая в статье научная проблема является актуальной",
    },
    {
      id: "question_2",
      question:
        "Cтатья профессионально и грамотно написана, изложение соответствует научному стилю",
    },
    {
      id: "question_3",
      question:
        "Используемые методы и подходы соответствуют целям и задачам исследования",
    },
    {
      id: "question_4",
      question: "Статья имеет научную новизну, а результаты значимы",
    },
    {
      id: "question_5",
      question:
        "Цитируемая в статье литература актуальна и в достаточной степени отражает современное состояние рассматриваемой в работе проблемы",
    },
  ];
  useEffect(() => {
    if (!select_work?.work?.id) {
      getWorks();
    }
  }, []);
  useEffect(() => {
    if (work?.work?.id) {
      getReview(work?.work?.id);
    }
  }, [work?.work?.id]);
  const HandleNext = () => {
    setTab(tab + 1);
    tab === 4 ?? navigate("/validator/writing-review/successfully");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const HandlePrev = () => {
    setTab(tab === 1 ? 1 : tab - 1);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

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
  const getReview = (work_id) => {
    // dispatch({type: 'SET_LOADING', payload:  true})
    Axios()
      .get(`/work_review/${work_id}`)
      .then((res) => {
        setObj(res?.data?.body);
      })
      .catch((r) => {})
      .finally(() => {
        // dispatch({type: 'SET_LOADING', payload:  false})
      });
  };

  const handleChange = (e) => {
    setObj({ ...obj, [e?.target?.name]: e?.target?.value });
    setError({ ...error, [e?.target?.name]: false });
  };
  const handleQuestion = (n, v) => {
    if (v === -1) {
      let q = obj?.questionnaire?.questions ?? {};
      delete q[v];
      setObj({
        ...obj,
        questionnaire: { ...obj?.questionnaire, questions: q },
      });
    } else {
      setObj({
        ...obj,
        questionnaire: {
          ...obj?.questionnaire,
          questions: { ...(obj?.questionnaire?.questions ?? {}), [n]: v },
        },
      });
    }
  };
  const submitStep1 = (e) => {
    e.preventDefault();
    if (obj?.review && obj?.review.length >= 700) {
      setTab(tab + 1);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      setError({ ...error, review: true });
      const element = document.getElementById("review_textarea");
      element.scrollIntoView();
    }
  };
  const submitStep2 = (e) => {
    e.preventDefault();
    if (obj?.review && obj?.review.length >= 700) {
      dispatch({ type: "SET_LOADING", payload: true });
      Axios()
        .post("update_review", {
          review: {
            work_id: work?.work?.id,
            body: obj,
          },
        })
        .then((r) => {
          setTab(tab + 1);
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        })
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    } else {
      setTab(1);
      setError({ ...error, review: true });
      const element = document.getElementById("review_textarea");
      element.scrollIntoView();
    }
  };
  const submitStep3 = (status) => {
    dispatch({ type: "SET_LOADING", payload: true });
    Axios()
      .post(`/submit_work_review/${work?.work?.id}/${status}`, {
        review: {
          work_id: work?.work?.id,
          body: obj,
        },
      })
      .then((r) => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        if (select_work?.work?.id) {
          set_select_work({});
        } else {
          navigate("/validator/articles-for-review");
        }
      })
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
                active={"Написание рецензии"}
                links={[
                  {
                    title: "Статьи на рецензию",
                    link: "/validator/articles-for-review",
                  },
                ]}
              />
              <AuthorCreateContainer>
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
              </AuthorCreateContainer>
              <div className="steps">
                {[
                  { id: 1, name: "Написание рецензии", step: "Шаг 1" },
                  { id: 2, name: "Оценка статьи", step: "Шаг 2" },
                  { id: 3, name: "Финальное решение", step: "Шаг 3" },
                ].map((e) => (
                  <>
                    {e.id < tab ? (
                      <div className="step  success">
                        <img src="/img/vector.svg" alt="" />
                        <div className={" step-text"}>
                          <span>{e?.step}</span>
                          <p className="succsesstext">{e?.name}</p>
                        </div>
                      </div>
                    ) : e?.id === tab ? (
                      <div className="active step">
                        <img src="/img/ellipseactive.svg" alt="" />
                        <div className={"step-text"}>
                          <span>{e?.step}</span>
                          <p className="activetext">{e?.name}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="step noactive">
                        <img src="/img/ellipse_7.svg" alt="" />
                        <div className={"step-text"}>
                          <span>{e?.step}</span>
                          <p className="noactivetext">{e?.name}</p>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
              {tab === 1 ? (
                <form onSubmit={submitStep1}>
                  <div className="box-card">
                    <div className="btns-writing">
                      <h4>Примерный план рецензии</h4>
                      <div className="btns-writing-items">
                        <div className="add-author">
                          <button className="sms-btn">Научная статья</button>
                        </div>
                        <div className="add-author">
                          <button className="review-article">
                            Обзорная статья
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="writing-text">
                      <p>
                        1. Краткое описание проблемы, которой посвящена статья.
                      </p>
                      <p>2. Степень актуальности предоставляемой статьи.</p>
                      <p>
                        3. Наиболее важные аспекты, раскрытые автором в статье.
                      </p>
                      <p>
                        4.Изложение конкретных положительных и отрицательных
                        сторон работы, а также предложения по доработке и
                        дополнению статьи.
                      </p>
                      <p>
                        5. Вынесение вердикта о возможности публикации статьи,
                        возможности публикации с внесением указанных доработок,
                        невозможности публикации.
                      </p>
                    </div>
                  </div>
                  <div className="box-card" id="review_textarea">
                    <h4>Напишите рецензию</h4>
                    <div className="input-target__validator">
                      <label htmlFor="">
                        Текст резенции (минимум 700 символов)
                        <span>*</span>
                      </label>
                      <textarea
                        className="textarea-writing-review"
                        name="review"
                        onChange={handleChange}
                        value={obj?.review}
                        cols="30"
                        rows="10"
                      ></textarea>
                      {error?.review ? (
                        <div className="error_test">
                          Введите Текст резенции (минимум 700 символов)
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="box-card">
                    <h4>Оставьте комментарии для автора</h4>
                    <div className="input-target__validator">
                      <label htmlFor="">
                        Комментарий
                        {/* <span>*</span> */}
                      </label>
                      <textarea
                        className="textarea-comment"
                        name="description"
                        onChange={handleChange}
                        value={obj?.description}
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div className="btns box-card">
                    <div className={"prev-button-first btn"}>
                      {t("writing_review.back")}
                    </div>
                    <button type="submit" className="next-button btn">
                      {t("writing_review.continue")}
                    </button>
                  </div>
                </form>
              ) : tab === 2 ? (
                <form onSubmit={submitStep2}>
                  <AuthorCreateContainer>
                    <div className="box-card">
                      <div className="article-detail-items">
                        <h4 style={{ marginBottom: "24px" }}>
                          Оценка статьи по критериям
                        </h4>
                        <UiTable>
                          <TableContainer className="tableContainer">
                            <Table>
                              <Thead>
                                <Tr className="article-detail-tr__head">
                                  <Th>Утверждение</Th>
                                  <Th className="rt_title">Не согласен</Th>
                                  <Th className="rt_title">
                                    {" "}
                                    Скорее не согласен
                                  </Th>
                                  <Th className="rt_title">Нейтрален</Th>
                                  <Th className="rt_title">Скорее согласен</Th>
                                  <Th className="rt_title">Согласен</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {questions.map((ques, index) => (
                                  <Tr
                                    className="article-detail-tr__body"
                                    key={index}
                                  >
                                    <Td style={{ minWidth: "400px" }}>
                                      {ques.question}
                                    </Td>
                                    <Td>
                                      <div>
                                        {get(
                                          obj,
                                          `questionnaire.questions.${ques?.id}`,
                                          0
                                        ) === 1 ? (
                                          <img
                                            src="/img/vector.svg"
                                            alt=""
                                            onClick={() =>
                                              handleQuestion(ques?.id, 0)
                                            }
                                          />
                                        ) : (
                                          <img
                                            src="/img/ellipse_7.svg"
                                            alt=""
                                            onClick={() =>
                                              handleQuestion(ques?.id, 1)
                                            }
                                          />
                                        )}
                                      </div>
                                    </Td>
                                    <Td>
                                      <div>
                                        {get(
                                          obj,
                                          `questionnaire.questions.${ques?.id}`,
                                          0
                                        ) === 2 ? (
                                          <img
                                            src="/img/vector.svg"
                                            alt=""
                                            onClick={() =>
                                              handleQuestion(ques?.id, 0)
                                            }
                                          />
                                        ) : (
                                          <img
                                            src="/img/ellipse_7.svg"
                                            alt=""
                                            onClick={() =>
                                              handleQuestion(ques?.id, 2)
                                            }
                                          />
                                        )}
                                      </div>
                                    </Td>
                                    <Td>
                                      <div>
                                        {get(
                                          obj,
                                          `questionnaire.questions.${ques?.id}`,
                                          0
                                        ) === 3 ? (
                                          <img
                                            src="/img/vector.svg"
                                            alt=""
                                            onClick={() =>
                                              handleQuestion(ques?.id, 0)
                                            }
                                          />
                                        ) : (
                                          <img
                                            src="/img/ellipse_7.svg"
                                            alt=""
                                            onClick={() =>
                                              handleQuestion(ques?.id, 3)
                                            }
                                          />
                                        )}
                                      </div>
                                    </Td>
                                    <Td>
                                      <div>
                                        {get(
                                          obj,
                                          `questionnaire.questions.${ques?.id}`,
                                          0
                                        ) === 4 ? (
                                          <img
                                            src="/img/vector.svg"
                                            alt=""
                                            onClick={() =>
                                              handleQuestion(ques?.id, 0)
                                            }
                                          />
                                        ) : (
                                          <img
                                            src="/img/ellipse_7.svg"
                                            alt=""
                                            onClick={() =>
                                              handleQuestion(ques?.id, 4)
                                            }
                                          />
                                        )}
                                      </div>
                                    </Td>
                                    <Td>
                                      <div>
                                        {get(
                                          obj,
                                          `questionnaire.questions.${ques?.id}`,
                                          0
                                        ) === 5 ? (
                                          <img
                                            src="/img/vector.svg"
                                            alt=""
                                            onClick={() =>
                                              handleQuestion(ques?.id, 0)
                                            }
                                          />
                                        ) : (
                                          <img
                                            src="/img/ellipse_7.svg"
                                            alt=""
                                            onClick={() =>
                                              handleQuestion(ques?.id, 5)
                                            }
                                          />
                                        )}
                                      </div>
                                    </Td>
                                  </Tr>
                                ))}
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </UiTable>
                        <MobileTableCheck>
                          <div className="table_mobile">
                            {questions.map((ques, index) => (
                              <>
                                <div className="card" key={index}>
                                  <div className="text">{ques.question}</div>
                                  <div className="roise">
                                    {get(
                                      obj,
                                      `questionnaire.questions.${ques?.id}`,
                                      0
                                    ) === 1 ? (
                                      <>
                                        <img src="/img/vector.svg" alt="" />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          src="/img/ellipse_7.svg"
                                          alt=""
                                          onClick={() =>
                                            handleQuestion(ques?.id, 1)
                                          }
                                        />
                                      </>
                                    )}
                                    <div className="roise_item">
                                      Не согласен
                                    </div>
                                  </div>
                                  <div className="roise">
                                    {get(
                                      obj,
                                      `questionnaire.questions.${ques?.id}`,
                                      0
                                    ) === 2 ? (
                                      <>
                                        <img src="/img/vector.svg" alt="" />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          src="/img/ellipse_7.svg"
                                          alt=""
                                          onClick={() =>
                                            handleQuestion(ques?.id, 2)
                                          }
                                        />
                                      </>
                                    )}
                                    <div className="roise_item">
                                      Скорее не согласен
                                    </div>
                                  </div>
                                  <div className="roise">
                                    {get(
                                      obj,
                                      `questionnaire.questions.${ques?.id}`,
                                      0
                                    ) === 3 ? (
                                      <>
                                        <img src="/img/vector.svg" alt="" />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          src="/img/ellipse_7.svg"
                                          alt=""
                                          onClick={() =>
                                            handleQuestion(ques?.id, 3)
                                          }
                                        />
                                      </>
                                    )}
                                    <div className="roise_item">Нейтрален</div>
                                  </div>
                                  <div className="roise">
                                    {get(
                                      obj,
                                      `questionnaire.questions.${ques?.id}`,
                                      0
                                    ) === 4 ? (
                                      <>
                                        <img src="/img/vector.svg" alt="" />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          src="/img/ellipse_7.svg"
                                          alt=""
                                          onClick={() =>
                                            handleQuestion(ques?.id, 4)
                                          }
                                        />
                                      </>
                                    )}
                                    <div className="roise_item">
                                      Скорее согласен
                                    </div>
                                  </div>
                                  <div className="roise">
                                    {get(
                                      obj,
                                      `questionnaire.questions.${ques?.id}`,
                                      0
                                    ) === 5 ? (
                                      <>
                                        <img src="/img/vector.svg" alt="" />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          src="/img/ellipse_7.svg"
                                          alt=""
                                          onClick={() =>
                                            handleQuestion(ques?.id, 5)
                                          }
                                        />
                                      </>
                                    )}
                                    <div className="roise_item">Cогласен</div>
                                  </div>
                                  <hr />
                                </div>
                              </>
                            ))}
                          </div>
                        </MobileTableCheck>
                      </div>
                    </div>
                  </AuthorCreateContainer>
                  <div className="btns box-card">
                    <div className={"prev-button btn"} onClick={HandlePrev}>
                      {t("writing_review.back")}
                    </div>
                    <button type="submit" className="next-button btn">
                      {t("writing_review.continue")}
                    </button>
                  </div>
                </form>
              ) : tab === 3 ? (
                <>
                  <div className="box-card">
                    <h4 style={{ marginBottom: "16px" }}>
                      {t("writing_review.placementPublication")}
                    </h4>
                    <div className="placement-title">
                      <img src="/img/star_icon.svg" alt="" />
                      <h5>{t("writing_review.publicationRules")}</h5>
                    </div>
                    <div className="placement-text">
                      {t("writing_review.siteText")}
                    </div>

                    <div className="placement-title">
                      <img src="/img/star_icon.svg" alt="" />
                      <h5>{t("writing_review.articleValidation")}</h5>
                    </div>
                    <div className="placement-text">
                      {t("writing_review.siteText")}
                    </div>
                    <div className="placement-title">
                      <img src="/img/star_icon.svg" alt="" />
                      <h5>{t("writing_review.cannotEditOrDelete")}</h5>
                    </div>
                    <div className="placement-text">
                      {t("writing_review.siteText")}
                    </div>
                  </div>
                  <div className="btns box-card">
                    <div
                      onClick={() => submitStep3(0)}
                      className={"prev-button-three btn"}
                    >
                      {t("writing_review.reject")}
                    </div>
                    <div
                      onClick={() => submitStep3(1)}
                      className="next-button btn"
                    >
                      {t("writing_review.publish")}
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </AuthorCreateContainer>
      </Layout>
    </div>
  );
};

export default WritingReview;
