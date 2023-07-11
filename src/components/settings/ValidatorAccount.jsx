import { useDispatch, useSelector } from "react-redux";
import SettingsInput from "../../sections/settings/SettingsInput";
import SettingsSaveBtn from "../../sections/settings/SettingsSaveBtn";
import SettingsSelect from "../../sections/settings/SettingsSelect";
import { ValidatorAccountContainer } from "../../styleComponents/settings/ValidatorAccountStyle";
import Layout from "../Layout";
import SettingsBar from "./SettingsBar";
import { useEffect, useState } from "react";
import Axios from "../../utils/httpClient";
import {
  RoleValidatorContainer,
  SuccesModalStyle,
} from "../../styleComponents/settings/RoleValidatorStyle";
import { get, remove } from "lodash";

import SelectRole from "../../sections/settings/SelectRole";

import Checkbox from "../../sections/utils/Checkbox";
import ModalDiplom from "../../sections/layout/ModalDiplom";

import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";

import Modal from "../../sections/layout/Modal";
import { setToken } from "../../utils/tokenStorge";
import { Box, useToast } from "@chakra-ui/react";
import { DefaultOptionsMulti } from "../../sections/utils/DefaultOptionsMulti";
import { DefaultOptionsSingle } from "../../sections/utils/DefaultOptionsSingle";
import { useTranslation } from 'react-i18next';

const ValidatorAccount = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const language = [
    { id: 1, name: t('validator_account.ruLang') },
    { id: 2, name: t('validator_account.engLang') },
  ];
 
 
  const { account, walletData } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [obj, setObj] = useState({});
  const [err, setErr] = useState({});
  const [selectauthor, setSelectAuthor] = useState([]);
  const [selectLanguage, setSelectlanguage] = useState({});
  const [selectSciences, setSelectSciencess] = useState({});
  const [files, setFiles] = useState([]);
  const [succesModal, setSuccesModal] = useState(false);
  const become_validator = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    let t = true,
      error = {};
    if (!obj?.name) {
      error = { ...error, name: true };
      t = false;
    }
    if (!obj?.surname) {
      error = { ...error, surname: true };
      t = false;
    }
    // if (!obj?.language) {
    //     error = { ...error, language: true };
    //     t = false;
    //   }
    if (
      !obj?.email_address ||
      !obj?.email_address?.includes("@") ||
      !obj?.email_address?.includes(".")
    ) {
      error = { ...error, email_address: true };
      t = false;
    }

    if (!obj?.sciences) {
      error = { ...error, sciences: true };
      t = false;
    }
    if (!files?.length) {
      error = { ...error, images: true };
      t = false;
    }
    if (t) {
      Axios()
        .post(`/update_validator_info`, { ...obj })
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
                {t('validator_account.dataSaved')}
              </Box>
            ),
          });
          if (res?.data?.jwt_token) {
            uploadFiles();
            setToken(res?.data?.jwt_token);
            dispatch({ type: "SET_ACCOUNT", payload: { role: 4, ...obj } });
            dispatch({ type: "SET_ROLE", payload: 4 });
          }
          dispatch({ type: "SET_LOADING", payload: false });
          setSuccesModal(true);
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
  useEffect(()=>{
    setObj({...account})
    setSelectlanguage({ language: account?.language==='Russian'?{ value: 1, label: "Russian" }:account?.language==='English'?{ value: 2, label: "English" }:null });
    let sl=[];
    (account?.sciences??[]).forEach((item, index) => {
      sl.push({value: index, label: item });
    });
    setSelectSciencess({sciences: sl});
  }, [account])
  useEffect(() => {
    getSelectAuthorData();
    // getSelectWorkData();
    // getValidatorData();
  }, []);
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name]: false });
  };
  const getSelectAuthorData = () => {
    Axios()
      .get(`/author_data`)
      .then((res) => {
        setSelectAuthor(res?.data?.sciences);
      })
      .catch((r) => {});
  };
  const SelectLanguage = (val) => {
    setSelectlanguage({ language: val });
    setObj({
      ...obj,
      language: val?.label,
    });

    setErr({ ...err, tags: false });
  };
  const SelectAuthor = (val) => {
    setSelectSciencess({ sciences: val });
    setObj({
      ...obj,
      sciences: val?.map((label) => {
        return label?.label;
      }),
    });

    setErr({ ...err, sciences: false });
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
    setErr({ ...err, images: false });
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
    dispatch({ type: "SET_LOADING", payload: true });

    Axios()
      .get(`/validator_info/${walletData?.accountAddress}`)
      .then((res) => {
        console.log(res?.data, "vali");
        // setAuthorData(res?.data);

        setObj({
          name: res?.data?.validator_info?.name,
          surname: res?.data?.validator_info?.surname,
          email_address: res?.data?.validator_info?.email_address,
          middlename: res?.data?.validator_info?.middlename,
          orcid: res?.data?.validator_info?.orcid,
        });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((r) => {});
  };
  return (
    <>
      <Layout>
        <SettingsBar>
          <ValidatorAccountContainer>
            <form onSubmit={become_validator}>
              <div className="title">{t('validator_account.editAccount')}</div>
              <div>
                <div className="input_container">
                  <div className="row">
                    <div className="col">
                      <SettingsInput
                        label={t('validator_account.surname')}
                        value={get(obj, "surname", "")}
                        onChange={handleChange}
                        name="surname"
                        is_error={get(err, "surname", false)}
                        errorText={t('validator_account.enterSurname')}
                        disabled={true}
                        is_requared={false}
                      />
                    </div>
                    <div className="col">
                      <SettingsInput
                        label={t('validator_account.name')}
                        value={get(obj, "name", "")}
                        onChange={handleChange}
                        name="name"
                        is_error={get(err, "name", false)}
                        errorText={t('validator_account.enterName')}
                        disabled={true}
                        is_requared={false}
                      />
                    </div>
                    <div className="col">
                      <SettingsInput
                        label={t('validator_account.middleName')}
                        is_requared={false}
                        value={get(obj, "middlename", "")}
                        onChange={handleChange}
                        name="middlename"
                        is_error={get(err, "middlename", false)}
                        errorText={t('validator_account.enterMiddleName')}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <SettingsInput
                        label={t('validator_account.userName')}
                        value={account?.nickname}
                        is_requared={false}
                        disabled={true}
                      />
                    </div>
                    <div className="col">
                      <SettingsInput
                        label={t('validator_account.email')}
                        value={get(obj, "email_address", "")}
                        onChange={handleChange}
                        name="email_address"
                        is_error={get(err, "email_address", false)}
                        errorText={t('validator_account.enterEmail')}
                        disabled={true}
                        is_requared={false}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="">
                        {'validator_account.chooseLanguage'}
                      </label>

                      <Select
                        name="language"
                        value={selectLanguage?.language}
                        options={language.map((val) => ({
                          label: val?.name,
                          value: val?.id,
                        }))}
                        {...DefaultOptionsSingle}
                        onChange={(value) => SelectLanguage(value)}
                      />
                    </div>
                    <div className="col">
                      <SettingsInput
                        label="ORCID"
                        is_requared={false}
                        value={get(obj, "orcid", "")}
                        onChange={handleChange}
                        name="orcid"
                        is_error={get(err, "orcid", false)}
                        errorText="Отчество ORCID"
                        type="number"
                        is_orcid={true}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col ">
                      <label htmlFor="">
                        {t('validator_account.sciences')}{" "}
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
                      {err?.sciences === true ? (
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
                          {t('validator_account.enterSciences')}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <>
                <div className="diploma_target">
                  <div className="head">
                    <div className="title">{t('validator_account.addDiploma')}</div>
                    <div className="bolt">{t('validator_account.lookUpExample')}</div>
                  </div>
                  <div className="desc">
                    {t('validator_account.uploadDiploma')}
                  </div>
                  <label className="file_input" id="dropContainer">
                    <img alt="" src="/img/paper.svg" />
                    <div className="ftext1">
                      {t('validator_account.chooseImages')}{" "}
                    </div>
                    <div className="ftext2">
                      {t('validator_account.imageLimit')}
                    </div>
                    <span className="btn" style={{ opacity: 1 }}>
                      {t('validator_account.chooseFile')}
                    </span>
                    {err?.images ? (
                      <div className="image_err">{t('validator_account.uploadImages')}</div>
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
              </>
              <div className="btns">
                <div className="cancel"></div>
                <button className="save" type="submit">
                  {t('validator_account.saveChanges')}
                </button>
              </div>
            </form>
          </ValidatorAccountContainer>
        </SettingsBar>
      </Layout>

      <ModalDiplom
        isOpen={isOpen}
        onOpen={setIsOpen}
        images={files.map((item) => item?.url)}
      ></ModalDiplom>
    </>
  );
};
export default ValidatorAccount;
