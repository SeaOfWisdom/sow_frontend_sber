import { useDispatch, useSelector } from "react-redux";
import { ModalEmailStyle } from "../../styleComponents/settings/ModalEmail";
import { useEffect, useState } from "react";
import Axios from "../../utils/httpClient";

import { Box, useToast } from "@chakra-ui/react";
import SettingsInput from "../../sections/settings/SettingsInput";
import { get, remove } from "lodash";
import { useNavigate } from "react-router-dom";
import SettingsSelect from "../../sections/settings/SettingsSelect";
import Select from "react-select";
import SettingsSaveBtn from "../../sections/settings/SettingsSaveBtn";
import ModalDiplom from "../../sections/layout/ModalDiplom";
import { setToken } from "../../utils/tokenStorge";
import { ValidatorAccountContainer } from "../../styleComponents/settings/ValidatorAccountStyle";
import { DefaultOptionsSingle } from "../../sections/utils/DefaultOptionsSingle";
import { DefaultOptionsMulti } from "../../sections/utils/DefaultOptionsMulti";
import { useTranslation } from 'react-i18next';

const ModalAccount = ({ setmodal }) => {
  const { t, i18n } = useTranslation();
  const { account, walletData } = useSelector((s) => s);
  const toast = useToast();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // uset
  const [objUser, setObjUser] = useState({});
  const [errUser, setErrUser] = useState({});
  //  teacher
  const language = [
    { id: 1, name: "Russian" },
    { id: 2, name: "English" },
  ];
  const [objAuthor, setObjAuthor] = useState({});
  const [errAuthor, setErrAuthor] = useState({});
  const [selectauthor, setSelectAuthor] = useState([]);
  const [selectLanguage, setSelectlanguage] = useState({});
  const [selectSciences, setSelectSciencess] = useState({});
  // validator

  const [objValidator, setObjValidator] = useState({});
  const [errValidator, setErrValidator] = useState({});
  // const [selectvalidator, setSelectValidator] = useState([]);
  const [selectLanguagevalidator, setSelectlanguageValidator] = useState({});
  const [selectSciencesvalidator, setSelectSciencessValidator] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);

  
  
 
  useEffect(() => {
    // user
    getBasicInfo();
    // author
    getSelectAuthorData();
    getAuthorData();
    //validator

    getValidatorData();
  }, []);

  // User Settings ===

  const handleChangeUser = (e) => {
    setObjUser({ ...objUser, [e.target.name]: e.target.value });
    setErrUser({ ...errUser, [e.target.name]: false });
  };
  const getBasicInfo = () => {
    Axios()
      .get(`/get_basic_info`)
      .then((res) => {
        setObjUser({
          nickname: res?.data?.nickname,
        });
      })
      .finally(() => {})
      .catch((r) => {});
  };
  const Setting = (e) => {
    dispatch({ type: "SET_LOADING", payload: true });
    let t = true,
      error = {};

    if (objUser?.nickname) {
      error = { ...error, nickname: true };
    }

    if (t) {
      Axios()
        .post("/update_basic_info", objUser)
        .then((res) => {
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
                <img
                  style={{ marginRight: "14px" }}
                  src="/img/vector.svg"
                  alt=""
                />
                {t('modal_account.dataSaved')}
              </Box>
            ),
          });
        })
        .catch((e) => {})
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
          setmodal(false);
        });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
      setErrUser(error);
    }
  };
  /// TeacherSettings ===

  const become_author = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    let t = true,
      error = {};
    if (!objAuthor?.name) {
      error = { ...error, name: true };
      t = false;
    }
    if (!objAuthor?.surname) {
      error = { ...error, surname: true };
      t = false;
    }
    // if (!objAuthor?.language) {
    //     error = { ...error, language: true };
    //     t = false;
    //   }
    if (
      !objAuthor?.email_address ||
      !objAuthor?.email_address?.includes("@") ||
      !objAuthor?.email_address?.includes(".")
    ) {
      error = { ...error, email_address: true };
      t = false;
    }

    if (!objAuthor?.sciences) {
      error = { ...error, sciences: true };
      t = false;
    }
    if (t) {
      Axios()
        .post(
          `/update_author_info`,
          objAuthor
          // sciences: [obj?.sciences]
        )
        .then((res) => {
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
                <img
                  style={{ marginRight: "14px" }}
                  src="/img/vector.svg"
                  alt=""
                />
                {t('modal_account.dataSaved')}
              </Box>
            ),
          });
          setmodal(false);
        })
        .catch((e) => {})
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
      setErrAuthor(error);
    }
  };
  const handleChangeauther = (e) => {
    setObjAuthor({ ...objAuthor, [e.target.name]: e.target.value });
    setErrAuthor({ ...errAuthor, [e.target.name]: false });
  };

  const getSelectAuthorData = () => {
    dispatch({ type: "SET_LOADING", payload: true });

    Axios()
      .get(`/author_data`)
      .then((res) => {
        setSelectAuthor(res?.data?.sciences);
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((r) => {});
  };
  const SelectLanguage = (val) => {
    setSelectlanguage({ language: val });
    setObjAuthor({
      ...objAuthor,
      language: val?.label,
    });

    setErrAuthor({ ...errAuthor, tags: false });
  };
  const SelectAuthor = (val) => {
    setSelectSciencess({ sciences: val });
    setObjAuthor({
      ...objAuthor,
      sciences: val?.map((label) => {
        return label?.label;
      }),
    });

    setErrAuthor({ ...errAuthor, sciences: false });
  };

  const getAuthorData = () => {
    Axios()
      .get(`/author_info/${walletData?.accountAddress}`)
      .then((res) => {
        // setAuthorData(res?.data);
        setObjAuthor({
          name: res?.data?.author_info?.name,
          surname: res?.data?.author_info?.surname,
          email_address: res?.data?.author_info?.email_address,
          middlename: res?.data?.author_info?.middlename,

        });
      })
      .catch((r) => {});
  };

  // Validator Settings ===

  const become_validator = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    let t = true,
      error = {};
    if (!objValidator?.name) {
      error = { ...error, name: true };
      t = false;
    }
    if (!objValidator?.surname) {
      error = { ...error, surname: true };
      t = false;
    }
    // if (!objValidator?.language) {
    //     error = { ...error, language: true };
    //     t = false;
    //   }
    if (
      !objValidator?.email_address ||
      !objValidator?.email_address?.includes("@") ||
      !objValidator?.email_address?.includes(".")
    ) {
      error = { ...error, email_address: true };
      t = false;
    }

    if (!objValidator?.sciences) {
      error = { ...error, sciences: true };
      t = false;
    }
    if (!files?.length) {
      error = { ...error, images: true };
      t = false;
    }
    if (t) {
      Axios()
        .post(`/update_validator_info`, { ...objValidator })
        .then((res) => {
          setmodal(false)
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
                <img
                  style={{ marginRight: "14px" }}
                  src="/img/vector.svg"
                  alt=""
                />
                {t('modal_account.dataSaved')}
              </Box>
            ),
          });
          if (res?.data?.jwt_token) {
            uploadFiles();
            setToken(res?.data?.jwt_token);
            dispatch({ type: "SET_ACCOUNT", payload: { role: 4 } });
            dispatch({ type: "SET_ROLE", payload: 4 });
          }
          dispatch({ type: "SET_LOADING", payload: false });
          // setSuccesModal(true);
        })
        .catch((e) => {})
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
      setErrValidator(error);
    }
  };

  const handleChangeValidator = (e) => {
    setObjValidator({ ...objValidator, [e.target.name]: e.target.value });
    setErrValidator({ ...errValidator, [e.target.name]: false });
  };
  // const getSelectAuthorData = () => {
  //   Axios()
  //     .get(`/author_data`)
  //     .then((res) => {
  //       setSelectAuthor(res?.data?.sciences);
  //     })
  //     .catch((r) => {});
  // };
  const SelectLanguageValidator = (val) => {
    setSelectlanguageValidator({ language: val });
    setObjValidator({
      ...objValidator,
      language: val?.label,
    });

    setErrValidator({ ...errValidator, tags: false });
  };
  const selectValidator = (val) => {
    setSelectSciencessValidator({ sciences: val });
    setObjValidator({
      ...objValidator,
      sciences: val?.map((label) => {
        return label?.label;
      }),
    });

    setErrValidator({ ...errValidator, sciences: false });
  };

  const selectFiles = (e) => {
    const f = e?.target?.files ?? [];
    let file_list = [];
    for (let i = 0; i < f.length; i++) {
      const imgUrl = URL.createObjectURL(get(f, i));
      file_list.push({
        id: i,
        name: get(f, `${i}.name`, ""),
        size: Number.parseFloat(get(f, `${i}.size`, 0) / 1048576).toFixed(2),
        url: imgUrl,
      });
    }
    setFiles(file_list);
    setErrValidator({ ...errValidator, images: false });
  };
  const uploadFiles = () => {
    var fd = new FormData();
    const diplom_docs = window.document.getElementById("diplom_docs").files;
    // fd.append("doc", diplom_docs[0]);
    for (let i = 0; i < diplom_docs.length; i++) {
      fd.append("doc", diplom_docs[i]);
    }
    Axios()
      .put(`/upload_doc/diploma `, fd)
      .then((res) => {})
      .catch((e) => {})
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };

  const getValidatorData = () => {
    Axios()
      .get(`/validator_info/${walletData?.accountAddress}`)
      .then((res) => {
        console.log(res?.data, "vali");
        // setAuthorData(res?.data);

        setObjValidator({
          name: res?.data?.validator_info?.name,
          surname: res?.data?.validator_info?.surname,
          email_address: res?.data?.validator_info?.email_address,
          middlename: res?.data?.validator_info?.middlename,

        });
      })
      .catch((r) => {});
  };
  return (
    <>
      <ModalEmailStyle>
        <h2>{t('modal_account.editData')}</h2>
        <hr />
        <div
          className="form"
          style={{
            padding: "16px",
            justifyContent: "center",
          }}
        >
          {account?.role === 1 ? (
            <>
              <div className="input-target">
                <label htmlFor="">
                  {t('modal_account.userName')} <span>*</span>
                </label>
                <input
                  type="text"
                  label={t('modal_account.nickname')}
                  onChange={handleChangeUser}
                  name="nickname"
                  value={objUser?.nickname}
                />
                <button onClick={Setting}>{t('modal_account.saveChanges')}</button>
              </div>
            </>
          ) : account?.role === 2 ? (
            <>
              <form onSubmit={become_author}>
                <div className="input_container">
                  <div className="row">
                    <div className="col">
                      <SettingsInput
                        label={t('modal_account.surname')}
                        value={get(objAuthor, "surname", "")}
                        onChange={handleChangeauther}
                        name="surname"
                        is_error={get(errAuthor, "surname", false)}
                        errorText={t('modal_account.enterSurname')}
                        is_requared={false}
                        disabled={true}
                      />
                    </div>
                    <div className="col">
                      <SettingsInput
                        label={t('modal_account.name')}
                        value={get(objAuthor, "name", "")}
                        onChange={handleChangeauther}
                        name="name"
                        is_error={get(errAuthor, "name", false)}
                        errorText={t('modal_account.enterName')}
                        is_requared={false}
                        disabled={true}
                      />
                    </div>
                    <div className="col">
                      <SettingsInput
                        label={t('modal_account.middleName')}
                        is_requared={false}
                        value={get(objAuthor, "middlename", "")}
                        onChange={handleChangeauther}
                        name="middlename"
                        is_error={get(errAuthor, "middlename", false)}
                        errorText={t('modal_account.enterMiddleName')}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <SettingsInput
                        label={t('modal_account.userName')}
                        value={account?.nickname}
                        is_requared={false}
                        disabled={true}
                      />
                    </div>
                    <div className="col">
                      <SettingsInput
                        label={t('modal_account.email')}
                        value={get(objAuthor, "email_address", "")}
                        onChange={handleChangeauther}
                        name="email_address"
                        is_error={get(errAuthor, "email_address", false)}
                        errorText={t('modal_account.enterEmail')}
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="">
                        {t('modal_account.chooseLanguage')}
                      </label>

                      <Select
                        options={language.map((val) => ({
                          label: val?.name,
                          value: val?.id,
                        }))}
                        name="language"
                        value={selectLanguage?.language}
                        {...DefaultOptionsSingle}
                        onChange={(value) => SelectLanguage(value)}
                      />
                    </div>
                    <div className="col">
                      <SettingsSelect
                        label={t('modal_account.location')}
                        is_requared={false}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <SettingsInput
                        label={t('modal_account.googleScholar')}
                        is_requared={false}
                        value={get(objAuthor, "scholar_ship_profile", "")}
                        onChange={handleChangeauther}
                        name="scholar_ship_profile"
                        is_error={get(errAuthor, "scholar_ship_profile", false)}
                        errorText={t('modal_account.enterGoogleScholar')}
                      />
                    </div>
                    <div className="col">
                      <SettingsInput
                        label="ORCID"
                        is_requared={false}
                        value={get(objAuthor, "orcid", "")}
                        onChange={handleChangeauther}
                        name="orcid"
                        is_error={get(errAuthor, "orcid", false)}
                        errorText={t('modal_account.enterORCID')}
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col ">
                      <label htmlFor="">
                        {t('modal_account.sciences')}{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <Select
                        options={selectauthor.map((val, index) => ({
                          label: val,
                          value: index,
                        }))}
                        name="sciences"
                        value={selectSciences?.sciences}
                        {...DefaultOptionsMulti}
                        onChange={(value) => SelectAuthor(value)}
                      />

                      {errAuthor?.sciences === true ? (
                        <span
                          style={{
                            fontFamily: "Golos",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "17px",
                            color: "rgb(255, 106, 106)",
                            marginLeft: "2px",
                          }}
                        >
                          {t('modal_account.enterSciences')}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>

                <SettingsSaveBtn
                  text={t('modal_account.saveChanges')}
                  onClick={become_author}
                />
              </form>
            </>
          ) : account?.role === 4 ? (
            <>
              {" "}
              <form onSubmit={become_validator}>
                <div>
                  <div className="input_container">
                    <div className="row">
                      <div className="col">
                        <SettingsInput
                          label={t('modal_account.surname')}
                          value={get(objValidator, "surname", "")}
                          onChange={handleChangeValidator}
                          name="surname"
                          is_error={get(errValidator, "surname", false)}
                          errorText={t('modal_account.enterSurname')}
                          is_requared={false}
                          disabled={true}
                        />
                      </div>
                      <div className="col">
                        <SettingsInput
                          label={t('modal_account.name')}
                          value={get(objValidator, "name", "")}
                          onChange={handleChangeValidator}
                          name="name"
                          is_error={get(errValidator, "name", false)}
                          errorText={t('modal_account.enterName')}
                          is_requared={false}
                          disabled={true}
                        />
                      </div>
                      <div className="col">
                        <SettingsInput
                          label={t('modal_account.middleName')}
                          is_requared={false}
                          value={get(objValidator, "middlename", "")}
                          onChange={handleChangeValidator}
                          name="middlename"
                          is_error={get(errValidator, "middlename", false)}
                          errorText={t('modal_account.enterMiddleName')}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <SettingsInput
                          label={t('modal_account.nickname')}
                          value={account?.nickname}
                          is_requared={false}
                          disabled={true}
                        />
                      </div>
                      <div className="col">
                        <SettingsInput
                          label={t('modal_account.email')}
                          value={get(objValidator, "email_address", "")}
                          onChange={handleChangeValidator}
                          name="email_address"
                          is_error={get(errValidator, "email_address", false)}
                          errorText={t('modal_account.enterEmail')}
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="">
                          {t('modal_account.chooseLanguage')}
                        </label>

                        <Select
                          name="language"
                          value={selectLanguagevalidator?.language}
                          options={language.map((val) => ({
                            label: val?.name,
                            value: val?.id,
                          }))}
                          {...DefaultOptionsSingle}
                          onChange={(value) => SelectLanguageValidator(value)}
                        />
                      </div>
                      <div className="col">
                        <SettingsInput
                          label="ORCID"
                          is_requared={false}
                          value={get(objValidator, "orcid", "")}
                          onChange={handleChangeValidator}
                          name="orcid"
                          is_error={get(errValidator, "orcid", false)}
                          errorText={t('modal_account.enterORCID')}
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col ">
                        <label htmlFor="">
                          {t('modal_account.sciences')}{" "}
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <Select
                          options={selectauthor.map((val, index) => ({
                            label: val,
                            value: index,
                          }))}
                          name="sciences"
                          value={selectSciencesvalidator?.sciences}
                          {...DefaultOptionsMulti}
                          onChange={(value) => selectValidator(value)}
                        />
                        {errValidator?.sciences === true ? (
                          <span
                            style={{
                              fontFamily: "Golos",
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "14px",
                              lineHeight: "17px",
                              color: "rgb(255, 106, 106)",
                              marginLeft: "2px",
                            }}
                          >
                            {t('modal_account.enterSciences')}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                <ValidatorAccountContainer>
                  <div
                    className="diploma_target"
                    style={{
                      marginTop: "16px",
                      padding: " 30px 16px",
                      background: "#F0F3F4",
                    }}
                  >
                    <div className="head">
                      <div className="title">{t('modal_account.addDiploma')}</div>
                      <div className="bolt">{t('modal_account.lookUpExample')}</div>
                    </div>
                    <div className="desc">
                      {t('modal_account.uploadDiploma')}
                    </div>
                    <label className="file_input" id="dropContainer">
                      <img alt="" src="/img/paper.svg" />
                      <div className="ftext1">
                        {t('modal_account.chooseImages')}{" "}
                      </div>
                      <div className="ftext2">
                        {t('modal_account.imageLimit')}
                      </div>
                      <span className="btn" style={{ opacity: 1 }}>
                        {t('modal_account.chooseFile')}
                      </span>
                      {errValidator?.images ? (
                        <div className="image_err">{t('modal_account.uploadImages')}</div>
                      ) : (
                        ""
                      )}
                      <input
                        id="diplom_docs"
                        className="file_input"
                        type="file"
                        name="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => selectFiles(e)}
                      />
                      {/* <button onClick={()=>uploadFiles()}>test upload</button> */}
                    </label>

                    <div className="images">
                      {files.map((item, index) => (
                        <div className="image" key={index}>
                          <div className="info" onClick={() => setIsOpen(true)}>
                            <div className="icon">
                              <img alt="" src="/img/paper.svg" />
                            </div>
                            <div className="img_info">
                              <div className="name">{item?.name}</div>
                              <div className="size">{item?.size} MB</div>
                            </div>
                          </div>
                          <div
                            className="delete"
                            onClick={() => {
                              const l = remove(files, (f) => f.id !== index);
                              setFiles(l);
                            }}
                          >
                            <img src="/img/close.svg" alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="btns"
                    style={{ justifyContent: "center", width: "100%" }}
                  >
                    <div className="cancel"></div>
                    <button className="save" type="submit">
                      {t('modal_account.saveChanges')}
                    </button>
                  </div>
                </ValidatorAccountContainer>
              </form>
            </>
          ) : null}
          {/* <div className="input-target">
          <label htmlFor="">
            Имя пользователя <span>*</span>
          </label>
          <input type="text" />
          <button onClick={OpenModal}>Сохранить изменения</button>
        </div> */}
        </div>
      </ModalEmailStyle>

      <ModalDiplom
        isOpen={isOpen}
        onOpen={setIsOpen}
        images={files.map((item) => item?.url)}
      ></ModalDiplom>
    </>
  );
};

export default ModalAccount;
