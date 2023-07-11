import { Link, NavLink } from "react-router-dom";
import Cards from "../../sections/utils/Cards";
import Pagination from "../../sections/utils/Pagination";
import Layout from "../Layout";
import { MySavedContainer } from "../../styleComponents/articles/MySavedStyle";
import { useEffect, useState } from "react";
import Axios from "../../utils/httpClient";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

const MySaved = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [saved, setSaved] = useState([]);
  useEffect(() => {
    getSaved();
  }, []);

  const getSaved = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    Axios()
      .get("/bookmarks")
      .then((res) => {
        setSaved(res?.data ?? []);
      })
      .catch((e) => {})
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };

  return (
    <>
      <Layout>
        <MySavedContainer>
          <div className="hr"></div>
          <div className="bar">
            <h1 className="title">{t('my_saved.myLibrary')}</h1>
            <div className="btns">
              <Link to="/my-library" className="btn first">
                {t('my_saved.read')}
              </Link>
              <NavLink to="/my-library/saved" className="btn">
                {t('my_saved.saved')}
              </NavLink>
            </div>
          </div>
          {saved?.length ? (
            <Cards library={saved} updateLibrary={(l) => setSaved(l)} />
          ) : (
            <div className="no_data">
              <div className="target">
                <img src="/img/no_article.svg" alt="" />
                <div className="ntitle">{t('my_saved.yetEmpty')}</div>
                <div className="desc">
                  {t('my_saved.yetToBuy')}
                </div>
                <Link to={'/library'} className="btn">{t('my_saved.findPaper')}</Link>
              </div>
            </div>
          )}
          {/* <Pagination /> */}
        </MySavedContainer>
      </Layout>
    </>
  );
};
export default MySaved;
