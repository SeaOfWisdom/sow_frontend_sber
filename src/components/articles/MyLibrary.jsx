import { Link, NavLink } from "react-router-dom";
import Cards from "../../sections/utils/Cards"; 
import Pagination from "../../sections/utils/Pagination";
import { MyLibraryContainer } from "../../styleComponents/articles/MyLibraryStyle";
import Layout from "../Layout";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Axios from "../../utils/httpClient";
import { useTranslation } from 'react-i18next';

const MyLibrary = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    useEffect(() => {
        getWorks();
    }, []);

    const getWorks = () => {
        dispatch({ type: "SET_LOADING", payload: true });
        Axios()
        .get("/purchased_works")
        .then((res) => {
            setData(res?.data ?? []);
        })
        .catch((e) => {})
        .finally(() => {
            dispatch({ type: "SET_LOADING", payload: false });
        });
    };
    return(<>
    <Layout> 
    <MyLibraryContainer> 
        <div className="hr"></div>
        <div className="bar">
            <h1 className="title">{t('my_library.myLibrary')}</h1>
            <div className="btns">
                <NavLink to="/my-library" className="btn first">{t('my_library.read')}</NavLink>
                <NavLink to="/my-library/saved" className="btn">{t('my_library.saved')}</NavLink>
            </div>
        </div> 
        {/* <Pagination/> */}
        {data?.length ? (
            <Cards library={data} updateLibrary={(l) => setData(l)} />
          ) : (
        <div className="no_data">
            <div className="target">
                <img src='/img/no_article.svg' alt=''/>
                <div className="ntitle">{t('my_library.emptyYet')}</div>
                <div className="desc">{t('my_library.noPurchasesDesc')}</div>
                <Link to={'/library'} className="btn">{t('my_library.findPaper')}</Link>
            </div>
        </div>
          )}
    </MyLibraryContainer>
    </Layout>
    </>)
}
export default MyLibrary;