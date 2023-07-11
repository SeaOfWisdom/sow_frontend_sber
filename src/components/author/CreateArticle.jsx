import React, { useEffect } from "react";
import Layout from "../Layout";
import { AuthorCreateContainer } from "../../styleComponents/author/Create";
import { Box } from "@chakra-ui/react";
import Navigation from "../../sections/utils/Navigation";
import { useState } from "react";
import Modalnfo from "../../sections/author/Modalnfo";
import Modal from "../../sections/layout/Modal";
import Select from "react-select";
import ModalCreateArticle from "./ModalCreateArticle";
import { useToast } from "@chakra-ui/react";
import Axios from "../../utils/httpClient";
import { get } from "lodash";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MultipleInput from "../../sections/settings/MultipleInput";
import Web3 from "web3";
import { useTranslation } from "react-i18next";
import { DefaultOptionsSingle } from "../../sections/utils/DefaultOptionsSingle";


const CreateArticle = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [tab, setTab] = useState(1);
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState([]);
  const [modalOpenadmin, setmodalOpenadmin] = useState(false);
  const [obj, setObj] = useState({});
  const [err, setErr] = useState({});
  const [selectWorkDate, setSelectWorkData] = useState([]);
  const [selectauthor, setSelectAuthor] = useState([]);
  const [newWord, setNewWord] = useState({});
  const [otherAuthorId, setOtherAuthorId] = useState("");
  const [otherAuthorModal, setOtherAuthorModal] = useState(false);
  const toast = useToast();

  // const multiselect = [
  //   { name: "научное исследование", id: 1 },
  //   { name: "научное ", id: 3 },
  //   { name: "asdsd", id: 2 },
  // ];
  const CreateAuthor = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    let t = true,
      error = {};
    if (!obj?.name) {
      error = { ...error, name: true };
      t = false;
    }
    if (!obj?.annotation) {
      error = { ...error, annotation: true };
      t = false;
    }
    // if (!obj?.description) {
    //   error = { ...error, description: true };
    //   t = false;
    // }
    if (!obj?.work_data) {
      error = { ...error, work_data: true };
      t = false;
    }
    if (details.length === 0) {
      error = { ...error, tags: true };
      t = false;
    }
    if (!obj?.sciences) {
      error = { ...error, sciences: true };
      t = false;
    }

    if (t) {
      const create_post = {
        work: {
          name: obj?.name,
          annotation: obj?.annotation,
          content: {
            work_data: obj?.work_data,
          },
          description: "description",
          tags: details,
          science: obj?.sciences ? obj?.sciences?.label : null,
        },
      };
      Axios()
        .post("/publish_work", create_post)
        .then((res) => {
          console.log(res, "respo");
          if (res?.status === 200) {
            setNewWord(res?.data);
            HandleNext();
          }
        })
        .catch((e) => {})
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
      setErr(error);
    }
  };
  const CreateAuthorStepOne = (e) => {
    e.preventDefault();
    let t = true,
      error = {};
    if (!obj?.name) {
      error = { ...error, name: true };
      t = false;
    }
    if (!obj?.annotation) {
      error = { ...error, annotation: true };
      t = false;
    }
    if (details.length === 0) {
      error = { ...error, tags: true };
      t = false;
    }
    if (!obj?.sciences) {
      error = { ...error, sciences: true };
      t = false;
    }
    if (t) {
      HandleNext();
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
      setErr(error);
    }
  };
  useEffect(() => {
    getMultiSelect();
    getSelectAuthorData();
  }, []);

  const MultiSelect = (val) => {
    setObj({
      ...obj,
      tags: val,
    });
    setErr({ ...err, tags: false });
  };

  const SelectAuthor = (val) => {
    setObj({
      ...obj,
      sciences: val,
    });

    setErr({ ...err, sciences: false });
  };
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name]: false });
  };

  const HandleNext = () => {
    setTab(tab === 4 ? 4 : tab + 1);
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

  const handleModal = () => {
    setModal(false);
    toast({
      // title: "Account created.",
      status: "success",
      duration: 1000,
      position: "top",
      isClosable: true,

      render: () => (
        <Box
          color="#2A2C35"
          p={3}
          bg="white.500"
          style={{
            display: "flex",
            fontFamily: "Lora",
            fontSize: "16px",
            background: "white",
            fontWeight: "600",
            lineHeight: "150%",
            position: "absolute",
            top: "60px",
            padding: "24px 36px",
            borderRadius: "8px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
          }}
        >
          <img style={{ marginRight: "14px" }} src="/img/vector.svg" alt="" />
          Приглашение отправлено успешно
        </Box>
      ),
    });
  };

  const getSelectAuthorData = () => {
    Axios()
      .get(`/author_data`)
      .then((res) => {
        setSelectAuthor(res?.data?.sciences);
      })
      .catch((r) => {});
  };

  const getMultiSelect = () => {
    Axios()
      .get(`/work_data`)
      .then((res) => {
        setSelectWorkData(res?.data?.tags);
      })
      .catch((r) => {});
  };

  const checkAuthorId = (v) => {
    if (v.length <= 42) setOtherAuthorId(v);
    let errr = 0;
    if (Web3.utils.isAddress(v)) {
      /*'0x9dBDcFB7284B521a3557d570E3BE5AA645b967F8'.length*/
      dispatch({ type: "SET_LOADING", payload: true });
      Axios()
        .get(`/if_participant_exists/${v}`)
        .then((res) => {
          const r = res?.data?.result;
          if (r) {
            addAuthorToast("Соавтор найден");
          } else {
            setOtherAuthorModal(true);
            setErr({ ...err, author_id: -2 });
          }
        })
        .catch((r) => {})
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    } else {
      if (v && v.length >= 42) {
        errr = -1;
      } else {
        errr = 0;
      }
      if (v.length < 42) setOtherAuthorModal(false);
    }

    setErr({ ...err, author_id: errr });
  };
  const addAuthorToast = (text = "") => {
    toast({
      // title: "Account created.",
      status: "success",
      duration: 1000,
      position: "top",
      isClosable: true,

      render: () => (
        <Box
          color="#2A2C35"
          p={3}
          bg="white.500"
          style={{
            display: "flex",
            fontFamily: "Lora",
            fontSize: "16px",
            background: "white",
            fontWeight: "600",
            lineHeight: "150%",
            position: "absolute",
            top: "60px",
            padding: "24px 36px",
            borderRadius: "8px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
          }}
        >
          <img style={{ marginRight: "14px" }} src="/img/vector.svg" alt="" />
          {text ? text : "Приглашение отправлено успешно"}
        </Box>
      ),
    });
  };

  return (
    <div>
      <Layout>
        <AuthorCreateContainer>
          <div className="authorcontainer">
            <div className="create">
              <Navigation
                active={t('create_article.publishPaperHeader')}
                links={[
                  {
                    title: t('create_article.dashboard'),
                    link: "/",
                  },
                ]}
              />

              <div className="steps">
                {[
                  { id: 1, name: t('create_article.paperInfo'), step: t('create_article.step1') },
                  { id: 2, name: t('create_article.paperText'), step: t('create_article.step2') },
                  { id: 3, name: t('create_article.preView'), step: t('create_article.step3') },
                  { id: 4, name: t('create_article.publishPaper'), step: t('create_article.step4') },
                ].map((e) => (
                  <>
                    {e.id < tab ? (
                      <div className="step  success">
                        <img src="/img/vector.svg" alt="" />
                        <div className={"step-text"}>
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
                <>
                  <div className="box-card">
                    <h4>{t("create_article.aboutPublication")}</h4>
                    <div className="input-target">
                      <label htmlFor="">
                        {t("create_article.articleName")} <span>*</span>
                      </label>
                      <input
                        type="text"
                        value={obj?.name}
                        name={"name"}
                        onChange={handleChange}
                        is_error={get(err, "name", false)}
                      />
                      {err?.name === true ? (
                        <span>{t("create_article.enterArticleName")}</span>
                      ) : null}
                    </div>
                    <div className="input-target">
                      <label htmlFor="">
                        {t("create_article.chooseScience")}{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <Select
                        options={selectauthor.map((val) => ({
                          label: val,
                          value: selectauthor.keys(),
                        }))}
                        name="sciences"
                        value={obj?.sciences}
                        {...DefaultOptionsSingle}
                        onChange={(value) => SelectAuthor(value)}
                      />

                      {err?.sciences === true ? (
                        <span> {t("create_article.chooseScience")} </span>
                      ) : null}
                    </div>
                    <div className="input-target">
                      <label htmlFor="">
                        {t("create_article.abstract")} <span>*</span>
                      </label>
                      <textarea
                        className="textarea-annotation"
                        name="annotation"
                        value={obj?.annotation}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                      ></textarea>
                      {err?.annotation === true ? (
                        <span>{t("create_article.enterAbstract")}</span>
                      ) : null}
                    </div>
                    <div className="input-target">
                      <label htmlFor="">
                        {t("create_article.enterKeywords")}
                        <span>*</span>
                      </label>
                      <MultipleInput
                        details={details}
                        setDetails={(l) => {
                          setDetails(l);
                          setErr({ ...err, tags: false });
                        }}
                        is_disabled={false}
                      />
                      {/* <input type="text" /> */}
                      {/* <Select
                        options={selectWorkDate.map((val) => ({
                          label: val,
                          value: selectWorkDate.keys(),
                        }))}
                        name="tags"
                        value={obj?.tags}
                        {...defaultOptions}
                        onChange={(value) => MultiSelect(value)}
                      /> */}
                      {err?.tags === true ? (
                        <span>{t("create_article.wrongWalletFormat")} </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="box-card">
                    <div className="add-author">
                      <div>
                        <h4>{t("create_article.addCoAuthor")}</h4>
                        <p>{t("create_article.addCoAuthorIfWorkedTogether")}</p>
                      </div>
                      {
                        <button
                          className={
                            otherAuthorModal
                              ? "sms-btn"
                              : "sms-btn-disabled sms-btn"
                          }
                          onClick={() => setModal(otherAuthorModal)}
                        >
                          <img src="/img/sms-tracking.svg" alt="" />
                          {t("create_article.inviteCoAuthor")}
                        </button>
                      }
                    </div>

                    <div className="input-target">
                      <label htmlFor="">
                        {t("create_article.walletOfCoAuthor")}
                      </label>
                      <input
                        style={
                          err?.author_id < 0 ? { border: "1px solid red" } : {}
                        }
                        type="text"
                        value={otherAuthorId}
                        onChange={(e) => checkAuthorId(e.target.value)}
                      />
                      {err?.author_id === -1 ? (
                        <div className="error_test">
                          {t("create_article.wrongWalletFormat")}{" "}
                        </div>
                      ) : (
                        <></>
                      )}
                      {err?.author_id === -2 ? (
                        <div className="error_test">
                          {t("create_article.authorDoesNotExist")}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <button className="add-btn">
                      <img src="/img/add-circle.svg" alt="" />
                      {t("create_article.addMore")}
                    </button>
                  </div>
                </>
              ) : tab === 2 ? (
                <>
                  <div className=" box-card">
                    <h4>{t("create_article.paperText")}</h4>
                    <div className="input-target">
                      <label htmlFor="">
                        {t("create_article.paperName")} <span>*</span>
                      </label>
                      <input
                        disabled
                        type="text"
                        value={obj?.name}
                        name={"name"}
                        onChange={handleChange}
                        is_error={get(err, "name", false)}
                      />
                      {err?.name === true ? (
                        <span>{t("create_article.enterPaperName")}</span>
                      ) : null}
                    </div>
                    <div className="input-target">
                      <label htmlFor="">
                        {t("create_article.enterScience")}{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <Select
                        options={selectauthor.map((val) => ({
                          label: val,
                          value: selectauthor.keys(),
                        }))}
                        name="sciences"
                        value={obj?.sciences}
                        {...DefaultOptionsSingle}
                        onChange={(value) => SelectAuthor(value)}
                        isDisabled={true}
                      />

                      {err?.sciences === true ? (
                        <span>{t("create_article.enterScience")}</span>
                      ) : null}
                    </div>
                    <div className="input-target">
                      <label htmlFor="">
                        {t("create_article.abstract")} <span>*</span>
                      </label>
                      <textarea
                        disabled
                        className="textarea-annotation"
                        name="annotation"
                        value={obj?.annotation}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                      ></textarea>
                      {err?.annotation === true ? (
                        <span>{t("create_article.enterAbstract")}</span>
                      ) : null}
                    </div>
                    <div className="input-target">
                      <label htmlFor="">
                        {t("create_article.enterKeywords")}
                        <span>*</span>
                      </label>
                      <MultipleInput
                        details={details}
                        setDetails={(l) => setDetails(l)}
                        is_disabled={true}
                      />
                      {/* <Select
                        options={selectWorkDate.map((val) => ({
                          label: val,
                          value: selectWorkDate.keys(),
                        }))}
                        name="tags"
                        value={obj?.tags}
                        {...defaultOptions}
                        onChange={(value) => MultiSelect(value)}
                        isDisabled={true}
                      /> */}
                    </div>
                    {/* <div className="input-target">
                      <label htmlFor="">
                        Описание <span>*</span>
                      </label>
                      <textarea
                        className="textarea-annotation"
                        name="description"
                        value={obj?.description}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                      ></textarea>
                      {err?.description === true ? (
                        <span>Введите Описание</span>
                      ) : null}
                    </div> */}
                    <div className="input-target">
                      <label htmlFor="">
                        {t("create_article.mainText")} <span>*</span>
                      </label>
                      <textarea
                        className="textarea-work_data"
                        name="work_data"
                        value={obj?.work_data}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                      ></textarea>
                      {err?.work_data === true ? (
                        <span>{t("create_article.enterMainText")}</span>
                      ) : null}
                    </div>
                  </div>
                </>
              ) : tab === 5 ? (
                <>
                  <div className="box-card">
                    <h4>{t("create_article.uploadFile")}</h4>

                    <div className="upload-file">
                      <img src="/img/livello_1.svg" alt="" />
                      <div className="upload-file__p">
                        <p>
                          Перенесите файл PDF в эту область или выберите его
                          вручную{" "}
                        </p>
                      </div>
                      <span>{t("create_article.fileLimitIs50mb")}</span>
                      <button>{t("create_article.chooseFile")}</button>
                    </div>

                    <div className="images">
                      <div className="image">
                        <div className="info">
                          <div className="icon">
                            <img alt="" src="/img/paper.svg" />
                          </div>
                          <div className="img_info">
                            <div className="name">
                              sow_article_to_publish.jpg
                            </div>
                            <div className="size">15.2 MB</div>
                          </div>
                        </div>
                        <div className="delete">
                          <img src="/img/close.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : tab === 3 ? (
                <>
                  <div className="box-card">
                    <h4 style={{ marginBottom: "24px" }}>
                      {t("create_article.paperPreview")}
                    </h4>
                    <p>{t("create_article.paperPreviewDesc")}</p>
                    <div className="internet-space">
                      <h2>{newWord?.work?.name ?? ""}</h2>
                      <div className="author">
                        <p>
                          <Link
                            to={`/articles-author/${
                              newWord?.author_info?.basic_info?.Web3Address ??
                              ""
                            }`}
                          >
                            {(newWord?.author_info?.author_info?.name ??
                              newWord?.author_info?.basic_info?.NickName ??
                              "") +
                              " " +
                              (newWord?.author_info?.author_info?.surname ??
                                "")}
                          </Link>
                        </p>
                      </div>
                      <div className="annotation">
                        <h2>{t("create_article.abstract")}</h2>
                        <p>{newWord?.work?.annotation ?? ""}</p>
                      </div>
                      {/* <div className="annotation">
                        <h2>Описание</h2>
                        <p>{newWord?.work?.description ?? ""}</p>
                      </div> */}
                      <div className="annotation">
                        <h2>{t("create_article.keywords")}</h2>
                        <p>
                          {(newWord?.work?.Tags ?? []).map((tag, tindex) => (
                            <span className="tag" key={tindex}>
                              {tag}
                            </span>
                          ))}
                        </p>
                      </div>
                      <div className="annotation">
                        <h2>{t("create_article.mainText")}</h2>
                        <p>{newWord?.work?.content?.work_data ?? ""}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <div className="box-card">
                    <h4 style={{ marginBottom: "16px" }}>
                      {t("create_article.publishPaper")}
                    </h4>
                    <div className="placement-title">
                      <img src="/img/star_icon.svg" alt="" />
                      <h5>{t("create_article.publicationRule")}</h5>
                    </div>
                    <div className="placement-text">
                      {t("create_article.publishPaperAgreement")}
                    </div>

                    <div className="placement-title">
                      <img src="/img/star_icon.svg" alt="" />
                      <h5>{t('create_article.reviewPaper')} статьи</h5>
                    </div>
                    <div className="placement-text">
                      {t("create_article.reviewPaperAgreement")}
                    </div>
                    <div className="placement-title">
                      <img src="/img/star_icon.svg" alt="" />
                      <h5>
                        {t('create_article.deleteAndEdit')}
                      </h5>
                    </div>
                    <div className="placement-text">
                      {t("create_article.deleteAndEditRule")}
                    </div>
                  </div>
                </div>
              )}
              <div className="btns box-card">
                <div onClick={HandlePrev} className="prev-button btn">
                  {t("create_article.back")}
                </div>
                {tab === 4 ? (
                  <>
                    <div
                      onClick={() => setmodalOpenadmin(true)}
                      className="next-button btn"
                    >
                      {t("create_article.publish")}
                    </div>
                  </>
                ) : tab === 1 ? (
                  <>
                    <div
                      onClick={CreateAuthorStepOne}
                      className="next-button btn"
                    >
                      {t("create_article.continue")}
                    </div>
                  </>
                ) : tab === 2 ? (
                  <>
                    <div onClick={CreateAuthor} className="next-button btn">
                      {t("create_article.continue")}
                    </div>
                  </>
                ) : (
                  <div onClick={HandleNext} className="next-button btn">
                    {t("create_article.continue")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </AuthorCreateContainer>
      </Layout>
      {modal === true ? (
        <>
          <Modalnfo
            close={setModal}
            del={handleModal}
            addAuthorToast={addAuthorToast}
            form={true}
            otherAuthorId={otherAuthorId}
          />
        </>
      ) : null}
      <Modal
        isOpen={modalOpenadmin}
        onOpen={setmodalOpenadmin}
        is_strong={true}
      >
        {/* <ModalDate onOpen={setIsOpen} /> */}
        <ModalCreateArticle setmodal={setmodalOpenadmin} />
      </Modal>
    </div>
  );
};

export default CreateArticle;
