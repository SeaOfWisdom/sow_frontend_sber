import { useDispatch, useSelector } from "react-redux";
import SettingsInput from "../../sections/settings/SettingsInput";
import SettingsSaveBtn from "../../sections/settings/SettingsSaveBtn";
import SettingsSelect from "../../sections/settings/SettingsSelect";
import { TeacherAccountContainer } from "../../styleComponents/settings/TeacherAccountStyle";
import Layout from "../Layout";
import SettingsBar from "./SettingsBar";
import Axios from "../../utils/httpClient";
import { useEffect, useState } from "react";
import { get } from "lodash";
import Checkbox from "../../sections/utils/Checkbox";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Box, useToast } from "@chakra-ui/react"; 
import { DefaultOptionsMulti } from "../../sections/utils/DefaultOptionsMulti";
import { DefaultOptionsSingle } from "../../sections/utils/DefaultOptionsSingle";
import { useTranslation } from 'react-i18next';

const TeacherAccount = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const toast = useToast();
  const { walletData } = useSelector((s) => s);
  const language = [
    { id: 1, name: t('teacher_account.ruLang') },
    { id: 2, name: t('teacher_account.engLang') },
  ];
  const { account } = useSelector((s) => s);
  //   const [authordata, setAuthorData] = useState({});
  const dispatch = useDispatch();
  const [obj, setObj] = useState({...account});
  const [err, setErr] = useState({});
  const [selectauthor, setSelectAuthor] = useState([]);
  const [selectLanguage, setSelectlanguage] = useState({});
  const [selectSciences, setSelectSciencess] = useState({});



  const become_author = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    let isObjValid  = true,
      error = {};
    if (!obj?.name) {
      error = { ...error, name: true };
      isObjValid  = false;
    }
    if (!obj?.surname) {
      error = { ...error, surname: true };
      isObjValid  = false;
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
      isObjValid  = false;
    }

    // if (!obj?.chek1) {
    //   error = { ...error, chek1: true };
    //   t = false;
    // }
    // if (!obj?.chek2) {
    //   error = { ...error, chek2: true };
    //   t = false;
    // }

    if (!obj?.sciences) {
      error = { ...error, sciences: true };
      isObjValid  = false;
    }
    // console.log(error);
    if (isObjValid ) {
      Axios()
        .post(
          `/update_author_info`,
          obj
          // sciences: [obj?.sciences]
        )
        .then((res) => {
          // navigate("/author/my-articles");

          dispatch({type: 'SET_ACCOUNT', payload: {role: 2, ...obj} });
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
                {t('teacher_account.dataSaved')}
              </Box>
            ),
          });
        })
        .catch((e) => {})
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
      setErr(error);
      console.log('error===>', error);
    }
    console.log('error 1===>', error);
  };
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name]: false });
  };
  useEffect(()=>{
    setObj({...account});
    setSelectlanguage({ language: account?.language===t('teacher_account.ruLang')?{ value: 1, label: t('teacher_account.ruLang') }:account?.language===t('teacher_account.engLang')?{ value: 2, label: t('teacher_account.engLang') }:null });
    let sl=[];
    (account?.sciences??[]).forEach((item, index) => {
      sl.push({value: index, label: item });
    });
    setSelectSciencess({sciences: sl});
  }, [account])
  useEffect(() => {
    getSelectAuthorData();
    // getSelectWorkData();
    // getAuthorData();
  }, []);

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

  const getAuthorData = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    Axios()
      .get(`/author_info/${walletData?.accountAddress}`)
      .then((res) => {
        console.log(res?.data, "ee");
        // setAuthorData(res?.data);

        setObj({
          name: res?.data?.author_info?.name,
          surname: res?.data?.author_info?.surname,
          email_address: res?.data?.author_info?.email_address,
          scholar_ship_profile: res?.data?.author_info?.scholar_ship_profile,
          orcid: res?.data?.author_info?.orcid,
          middlename: res?.data?.author_info?.middlename,
        }); 
      }).finally(()=>{
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((r) => {});
  };

  return (
    <>
      <Layout>
        <SettingsBar>
          <TeacherAccountContainer>
            <div className="title">{t('teacher_account.editAccount')}</div>
            <form onSubmit={become_author}>
              <div className="input_container">
                <div className="row">
                  <div className="col">
                    <SettingsInput
                      label={t('teacher_account.surname')}
                      value={get(obj, "surname", "")}
                      onChange={handleChange}
                      name="surname"
                      is_error={get(err, "surname", false)}
                      errorText={t('teacher_account.enterSurname')}
                      disabled={true}
                      is_requared={false}
                    />
                  </div>
                  <div className="col">
                    <SettingsInput
                      label={t('teacher_account.name')}
                      value={get(obj, "name", "")}
                      onChange={handleChange}
                      name="name"
                      is_error={get(err, "name", false)}
                      errorText={t('teacher_account.enterName')}
                      disabled={true}
                      is_requared={false}
                    />
                  </div>
                  <div className="col">
                    <SettingsInput
                      label={t('teacher_account.middleName')}
                      is_requared={false}
                      value={get(obj, "middlename", "")}
                      onChange={handleChange}
                      name="middlename"
                      is_error={get(err, "middlename", false)}
                      errorText={t('teacher_account.enterMiddleName')}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <SettingsInput
                      label={t('teacher_account.userName')}
                      value={account?.nickname}
                      is_requared={false}
                      disabled={true}
                    />
                  </div>
                  <div className="col">
                    <SettingsInput
                      label={t('teacher_account.email')}
                      value={get(obj, "email_address", "")}
                      onChange={handleChange}
                      name="email_address"
                      is_error={get(err, "email_address", false)}
                      errorText={t('teacher_account.enterEmail')}
                      disabled={true}
                      is_requared={false}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="">{t('teacher_account.chooseLanguage')}</label>

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
                      label={t('teacher_account.location')}
                      is_requared={false}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <SettingsInput
                      label={t('teacher_account.googleScholar')}
                      is_requared={false}
                      value={get(obj, "scholar_ship_profile", "")}
                      onChange={handleChange}
                      name="scholar_ship_profile"
                      is_error={get(err, "scholar_ship_profile", false)}
                      errorText={t('teacher_account.enterGoogleScholar')}
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
                      errorText={t('teacher_account.enterORCID')}
                      type="number"
                      is_orcid={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col ">
                    <label htmlFor="">
                      {t('teacher_account.sciences')}{" "}
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
                        {t('teacher_account.enterSciences')}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              <SettingsSaveBtn text={t('teacher_account.saveChanges')}  type="submit"/>
            </form>
          </TeacherAccountContainer>
        </SettingsBar>
      </Layout>
    </>
  );
};
export default TeacherAccount;
