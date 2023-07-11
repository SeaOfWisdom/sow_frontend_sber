import { useEffect, useState } from "react";
import SelectRole from "../../sections/settings/SelectRole";
import SettingsInput from "../../sections/settings/SettingsInput";
import SettingsSelect from "../../sections/settings/SettingsSelect";
import Checkbox from "../../sections/utils/Checkbox";
import { RoleValidatorContainer, SuccesModalStyle } from "../../styleComponents/settings/RoleValidatorStyle";
import Layout from "../Layout";
import ModalDiplom from "../../sections/layout/ModalDiplom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../utils/httpClient";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { get, remove } from "lodash";
import Modal from "../../sections/layout/Modal";
import { setToken } from "../../utils/tokenStorge";
import { DefaultOptionsMulti } from "../../sections/utils/DefaultOptionsMulti";
import { DefaultOptionsSingle } from "../../sections/utils/DefaultOptionsSingle";

const RoleValidator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const language = [
    { id: 1, name: "Russian" },
    { id: 2, name: "English" },
  ];
  
  
  const {account} = useSelector(s=>s);
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
    if (!files?.length) {
      error = { ...error, images: true };
      t = false;
    } 
    if (t) {
      Axios()
        .post(`/become_validator `, {...obj})
        .then((res) => {
          if(res?.data?.jwt_token){
            uploadFiles();
            setToken(res?.data?.jwt_token)
            dispatch({type: 'SET_ACCOUNT', payload: {role: 4, ...obj} });
            dispatch({type: 'SET_ROLE', payload: 4 });
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
  useEffect(() => {
    getSelectAuthorData();
    // getSelectWorkData();
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
      sciences: val?.map((label)=>{
        return label?.label
      }),
    });

    setErr({ ...err, sciences: false });
  };
  
  const selectFiles = e =>{ 
    const f = e?.target?.files??[];
    let file_list = [];
    for (let i = 0; i < f.length; i++)  {
      const imgUrl = URL.createObjectURL(get(f, i))
      file_list.push({
        id: i,
        name: get(f, `${i}.name`, ''),
        size: Number.parseFloat(get(f, `${i}.size`, 0)/1048576).toFixed(2),
        url: imgUrl
      })
    }
    setFiles(file_list);
    setErr({ ...err, images: false });
  }
  const uploadFiles = () => {
    var fd = new FormData();
    const diplom_docs = window.document.getElementById('diplom_docs').files; 
    // fd.append("doc", diplom_docs[0]);
    for (let i = 0; i < diplom_docs.length; i++) {
      fd.append("doc", diplom_docs[i]);
    } 
    Axios()
    .put(`/upload_doc/diploma `, fd)
    .then((res) => { 
    })
    .catch((e) => {})
    .finally(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    });
  }
  return (
    <>
      <Layout>
        <RoleValidatorContainer>
         
          <div className="role_container">
            <SelectRole />
            <form onSubmit={become_validator}> 
              <div className="profile">
                <div className="title">Заполнение профиля</div>
                <div>
                  <div className="input_container">
                    <div className="row">
                      <div className="col">
                        <SettingsInput
                          label="Фамилия"
                          value={get(obj, "surname", "")}
                          onChange={handleChange}
                          name="surname"
                          is_error={get(err, "surname", false)}
                          errorText="Введите Фамилия"
                      
                        />
                      </div>
                      <div className="col">
                        <SettingsInput
                          label="Имя"
                          value={get(obj, "name", "")}
                          onChange={handleChange}
                          name="name"
                          is_error={get(err, "name", false)}
                          errorText="Введите Имя"
                        />
                      </div>
                      <div className="col">
                        <SettingsInput
                          label="Отчество"
                          is_requared={false}
                          value={get(obj, "middlename", "")}
                          onChange={handleChange}
                          name="middlename"
                          is_error={get(err, "middlename", false)}
                          errorText="Введите Отчество"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <SettingsInput
                          label="Имя пользователя"
                          value={account?.nickname}
                          is_requared={false}
                          disabled={true}
                        />
                      </div>
                      <div className="col">
                        <SettingsInput
                          label="Email"
                          value={get(obj, "email_address", "")}
                          onChange={handleChange}
                          name="email_address"
                          is_error={get(err, "email_address", false)}
                          errorText="Введите Email (xxxxx@mail.com)"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor=""   className="select_label">
                          Выберите язык на котором Вы пишете
                        </label>

                        <Select
                          name="language"
                          value={selectLanguage?.language}
                          options={language.map((val) => ({
                            label: val?.name,
                            value: val?.id,
                          }))}
                          // {...defaultOptions}
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
                        <label htmlFor=""   className="select_label">
                          Отрасли науки, в которых вы работаете{" "}
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
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "17px",
                              color: "rgb(255, 106, 106)",
                              marginLeft: "2px",
                            }}
                          >
                            Введите Отрасли науки
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="diploma_target">
                <div className="head">
                  <div className="title">Добавление дипломов</div>
                  <div className="bolt">Посмотреть пример</div>
                </div>
                <div className="desc">
                  Загрузите диплом кандидата или доктора наук для того, чтобы
                  наши администраторы могли проверить вашу квалификацию
                </div>
                <label className="file_input" id="dropContainer">
                  <img alt="" src="/img/paper.svg" />
                  <div className="ftext1">
                    Перенесите файлы jpg, png в эту область или выберите их
                    вручную{" "}
                  </div>
                  <div className="ftext2">
                    Максимальный размер файла не должен превышать 50MB
                  </div>
                  <span className="btn">Выбрать файл</span>
                  {err?.images?<div className="image_err">Загрузить фотографии</div>:''}
                  <input id="diplom_docs" className="file_input" type="file" name="file"  accept="image/*" multiple
                    onChange={e=>selectFiles(e)}
                  />
                  {/* <button onClick={()=>uploadFiles()}>test upload</button> */}
                </label>
                
                <div className="images">
                  {files.map((item, index)=>(
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
                    <div className="delete" onClick={()=>{
                      const l = remove(files, f=>f.id!==index)
                      setFiles(l);
                    }}>
                      <img src="/img/close.svg" alt="" />
                    </div>
                  </div> ))}
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
                      Я согласен на обработку персональных данных
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
                      Я прочитал и согласен с{" "}
                      <span className="bolt"
                      style={
                        get(err, "chek2", false) ? { color: "rgb(255, 106, 106)" } : {}
                      }>Правилами и условиями</span>
                      <span>*</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="btns">
                <Link to="/" className="cancel">
                  Отменить
                </Link>
                <button className="save" type="submit">
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </RoleValidatorContainer>
      </Layout>
      <ModalDiplom
        isOpen={isOpen}
        onOpen={setIsOpen}
        images={files.map(item=>item?.url)}
      ></ModalDiplom>
      <Modal is_strong={true} onOpen={v=>setSuccesModal(v)} isOpen={succesModal}>
        <SuccesModalStyle>
          <div className="title">Вы успешно прошли верификацию и стали рецензентом.</div> 
          <div className="text">
            Пожалуйста, добавьте этот уникальный телеграм бот @Reviewer_123_bot,
            где вы будете получать статьи для оценки.
          </div>
          <div className="btn_target">
              <button className="btn"
                onClick={()=>{
                  setSuccesModal(false);
                  navigate("/validator/articles-for-review");
                }}
              >К разделу “Статьи на рецензию”</button>
          </div>
        </SuccesModalStyle>
      </Modal>
    </>
  );
};
export default RoleValidator;
