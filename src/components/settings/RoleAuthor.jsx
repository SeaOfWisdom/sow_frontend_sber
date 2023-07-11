import { get, indexOf } from "lodash";
import SelectRole from "../../sections/settings/SelectRole";
import SettingsInput from "../../sections/settings/SettingsInput";
import SettingsSelect from "../../sections/settings/SettingsSelect";
import Checkbox from "../../sections/utils/Checkbox";
import { RoleAuthorContainer } from "../../styleComponents/settings/RoleAuthorStyle";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Axios from "../../utils/httpClient";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { DefaultOptionsMulti } from "../../sections/utils/DefaultOptionsMulti";
import { DefaultOptionsSingle } from "../../sections/utils/DefaultOptionsSingle";
import { useTranslation } from 'react-i18next';


const RoleAuthor = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const language = [
    { id: 1, name: t('role_author.ruLang') },
    { id: 2, name: t('role_author.enLang') },
  ];
  const { account } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [obj, setObj] = useState({});
  const [err, setErr] = useState({});
  const [selectauthor, setSelectAuthor] = useState([]);
  const [selectLanguage, setSelectlanguage] = useState({});
  const [selectSciences, setSelectSciencess] = useState({});
  const become_author = (e) => {
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
    if (!obj?.chek1) {
      error = { ...error, chek1: true };
      t = false;
    }
    if (!obj?.chek2) {
      error = { ...error, chek2: true };
      t = false;
    }
    if (!obj?.sciences) {
      error = { ...error, sciences: true };
      t = false;
    }
    console.log(error);
    if (t) {
      Axios()
        .post(
          `/become_author`,
          obj
          // sciences: [obj?.sciences]
        )
        .then((res) => {
          dispatch({type: 'SET_ACCOUNT', payload: {...obj} });
          dispatch({type: 'SET_ROLE', payload: 2 });
          navigate("/author/my-articles");
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

  useEffect(() => {
    getSelectAuthorData();
    // getSelectWorkData();
  }, []);
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name]: false });
  };
  //   const getSelectWorkData = () => {
  //     Axios()
  //       .get(`/work_data`)
  //       .then((res) => {
  //         setSelectWorkData(res?.data?.tags);
  //         console.log(res?.data?.tags);
  //       })
  //       .catch((r) => {});
  //   };
  const getSelectAuthorData = () => {
    Axios()
      .get(`/author_data`)
      .then((res) => {
        setSelectAuthor(res?.data?.sciences);
        console.log(res?.data?.sciences);
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
  return (
    <>
      <Layout>
        <RoleAuthorContainer>
          <div className="role_container">
           
            <SelectRole />
            <form onSubmit={become_author}>
              <div className="profile">
                <div className="title">{t('role_author.fillProfile')}</div>
                <div>
                  <div className="input_container">
                    <div className="row">
                      <div className="col">
                        <SettingsInput
                          label={t('role_author.surname')}
                          value={get(obj, "surname", "")}
                          onChange={handleChange}
                          name="surname"
                          is_error={get(err, "surname", false)}
                          errorText={t('role_author.enterSurname')}
                          
                        />
                      </div>
                      <div className="col">
                        <SettingsInput
                          label={t('role_author.name')}
                          value={get(obj, "name", "")}
                          onChange={handleChange}
                          name="name"
                          is_error={get(err, "name", false)}
                          errorText={t('role_author.enterName')}
                        />
                      </div>
                      <div className="col">
                        <SettingsInput
                          label={t('role_author.middleName')}
                          is_requared={false}
                          value={get(obj, "middlename", "")}
                          onChange={handleChange}
                          name="middlename"
                          is_error={get(err, "middlename", false)}
                          errorText={t('role_author.enterMiddleName')}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <SettingsInput
                          label={t('role_author.username')}
                          value={account?.nickname}
                          is_requared={false}
                          disabled={true}
                        />
                      </div>
                      <div className="col">
                        <SettingsInput
                          label={t('role_author.email')}
                          value={get(obj, "email_address", "")}
                          onChange={handleChange}
                          name="email_address"
                          is_error={get(err, "email_address", false)}
                          errorText={t('role_author.enterEmail')}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="" className="select_label">
                          {t('role_author.enterLang')}
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
                          label={t('role_author.location')}
                          is_requared={false}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <SettingsInput
                          label={t('role_author.googleScholar')}
                          is_requared={false}
                          value={get(obj, "scholar_ship_profile", "")}
                          onChange={handleChange}
                          name="scholar_ship_profile"
                          is_error={get(err, "scholar_ship_profile", false)}
                          errorText={t('role_author.enterGoogleScholar')}
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
                          errorText={t('role_author.enterORCID')}
                          type="number"
                          is_orcid={true}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col ">
                        <label htmlFor=""  className="select_label">
                          {t('role_author.sciences')}{" "}
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
                        {console.log(selectauthor, selectSciences?.sciences, "a")}
                        {err?.sciences === true ? (
                          <span
                            style={{
                              fontFamily: "Golos",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "17px",
                              color: "rgb(255, 106, 106)",
                              marginLeft: "2px",
                            }}
                          >
                            {t('role_author.enterSciences')}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="row row_check">
                      <div className="col ">
                        <label
                          className="checkbox"
                          style={
                            get(err, "chek1", false) ? { color: "rgb(255, 106, 106)" } : {}
                          }
                        >
                          <Checkbox
                            className="check"
                            onChange={(e) =>
                              handleChange({
                                target: {
                                  name: "chek1",
                                  value: !get(obj, "chek1", false),
                                },
                              })
                            }
                            checked={get(obj, "chek1", false)}
                            name="chek1"
                          />
                          {t('role_author.agreePrivacy')}
                          <span>*</span>
                        </label>
                      </div>
                    </div>
                    <div className="row row_check">
                      <div className="col">
                        <label
                          className="checkbox"
                          style={
                            get(err, "chek2", false) ? { color: "rgb(255, 106, 106)" } : {}
                          }
                        >
                          <Checkbox
                            className="check"
                            onChange={(e) =>
                              handleChange({
                                target: {
                                  name: "chek2",
                                  value: !get(obj, "chek2", false),
                                },
                              })
                            }
                            checked={get(obj, "chek2", false)}
                            name="chek2"
                          />
                          {t('role_author.readAndAgree')}{" "}
                          <span className="bolt"
                              style={
                                get(err, "chek2", false) ? { color: "rgb(255, 106, 106)" } : {}
                              }
                          >{t('role_author.rulesAndConditions')}</span>
                          <span>*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btns">
                <Link to="/" className="cancel">
                  {t('role_author.reject')}
                </Link>
                <button className="save" type="submit">
                  {t('role_author.save')}
                </button>
              </div>
            </form>
          </div>
        </RoleAuthorContainer>
      </Layout>
    </>
  );
};
export default RoleAuthor;
