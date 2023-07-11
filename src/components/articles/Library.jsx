import { useEffect, useState } from "react";
import ModalCategory from "../../sections/layout/ModalCategory";
import Cards from "../../sections/utils/Cards";
import Navigation from "../../sections/utils/Navigation";
import Pagination from "../../sections/utils/Pagination";
import { LibraryContainer } from "../../styleComponents/articles/LibraryStyle";
import Layout from "../Layout";
import CategoryFilter from "../../sections/utils/CategoryFilter";
import SearchInput from "../../sections/utils/SearchInput";
import Calendar from "../../sections/utils/Calendar";
import Modal from "../../sections/layout/Modal";
import SimpleLoading from "../../sections/layout/SimpleLoading";
import Axios from "../../utils/httpClient";
import { useSearchParams } from "react-router-dom";
import ModalDate from "../../sections/homeSections/ModalDate";
import { useTranslation } from "react-i18next";
import { UiSelect } from "../../styleComponents/UiComponents/UISelect";
import { UiSelectLibrary } from "../../styleComponents/UiComponents/UiSelectLibrary";
import ModalDateMobile from "../../sections/homeSections/ModalDateMobile";
import ModalMobile from "../../sections/layout/ModalMobile";
import ModalLan from "../../sections/homeSections/ModalLan";

const Library = () => {
  const [isOper, setIsOpen] = useState(false);
  const [isDateModal, setIsDateModal] = useState(false);
  const [library, setLibrary] = useState([]);
  const [active, setActive] = useState(false);
  const [activelan, setActiveLan] = useState(false);
  const [activemobileLan, setActiveMobileLan] = useState(false);
  const [activemobile, setActiveMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { t } = useTranslation();
  const Down = () => (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.80562 1.35781L5.58206 5.58137C5.32288 5.84054 4.90267 5.84054 4.64349 5.58137L0.419927 1.35781C0.160747 1.09863 0.160748 0.678416 0.419927 0.419237C0.679105 0.160058 1.09932 0.160058 1.3585 0.419237L5.11277 4.17351L8.86705 0.419238C9.12623 0.160059 9.54644 0.160059 9.80562 0.419238C10.0648 0.678416 10.0648 1.09863 9.80562 1.35781Z"
        fill="#2A2C35"
      />
    </svg>
  );
  const Up = () => (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.80562 4.64219L5.58206 0.418634C5.32288 0.159455 4.90267 0.159455 4.64349 0.418634L0.419927 4.64219C0.160747 4.90137 0.160748 5.32158 0.419927 5.58076C0.679105 5.83994 1.09932 5.83994 1.3585 5.58076L5.11277 1.82649L8.86705 5.58076C9.12623 5.83994 9.54644 5.83994 9.80562 5.58076C10.0648 5.32158 10.0648 4.90137 9.80562 4.64219Z"
        fill="#2A2C35"
      />
    </svg>
  );

  const handleModal = () => {
    setIsDateModal(true);
  };

  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getList();
  }, [searchParams]);
  const getList = () => {
    const s = searchParams.get("search");
    getSearch(s);
  };
  const getWorks = () => {
    setLoading(true);
    Axios()
      .get("/works")
      .then((res) => {
        setLibrary(res?.data ?? []);
      })
      .catch((r) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const getSearch = (v) => {
    setSearch(v);
    if (v?.length) {
      setLoading(true);
      Axios()
        .get(`/works_by_key_words/${v}`)
        .then((res) => {
          const d = res?.data ?? [];
          setLibrary(d.error ? [] : d);
        })
        .catch((r) => {})
        .finally(() => {
          setLoading(false);
        });
    } else {
      getWorks();
    }
  };
  const changeSearch = (v) => {
    setSearch(v);
    setSearchParams({ search: v });
  };
  return (
    <>
      <Layout>
        <LibraryContainer>
          <Navigation active={t('library.library')} links={[]} />
          <h1 className="title">{t('library.resourceLibrary')}</h1>
          <div className="search_target">
            <SearchInput
              value={search}
              onChange={(v) => {
                changeSearch(v);
              }}
              placeholder={t('library.enterName')}
            />
          </div>

          <div className="btns">
            {/* <div className="btn" onClick={() => setIsOpen(true)}>
              <div>Все категории</div>
              <div className="close_btn">
                <img src="/img/bottom.svg" alt="close" />
              </div>
            </div> */}
            <div
              className="btn mobile"
              onClick={() => setActiveMobileLan(!activemobileLan)}
            >
              <div>{t('library.ruLang')}</div>
              <div className="close_btn">
                <img src="/img/bottom.svg" alt="close" />
              </div>
            </div>

            <div className="desktop">
              <UiSelectLibrary
                isActive={activelan}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLan(!activelan);
                }}
                style={{
                  backgroundColor: "white",
                  boxShadow: "0px 2px 0px #2A2C35",
                  marginRight: "16px",
                }}
              >
                <div
                  style={{
                    cursor: "pointer",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <span className="langspan">
                    {/* {lan === "ru" ? "Руc" : "Eng"} */}
                    {t('library.chooseLang')}
                  </span>
                  {activelan ? <Up /> : <Down />}
                </div>
                <ul>
                  <div>
                    <span>{t('library.ruLang')}</span>
                  </div>
                  <div>
                    <span>{t('library.engLang')}</span>
                  </div>
                </ul>
              </UiSelectLibrary>
            </div>
            {/* <div
              className="btn mobile"
              onClick={() => setActiveMobile(!activemobile)}
            >
              <div>{t("banner.yearSelection")}</div>
              <div className="close_btn">
                <img src="/img/bottom.svg" alt="close" />
              </div>
            </div> */}
            {/* <div className="desktop">
              <UiSelectLibrary
                isActive={active}
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(!active);
                }}
                style={{
                  backgroundColor: "white",
                  boxShadow: "0px 2px 0px #2A2C35",
                }}
              >
                <div
                  style={{
                    cursor: "pointer",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <span className="langspan"> 
                    {t("banner.yearSelection")}
                  </span>
                  {active ? <Up /> : <Down />}
                </div>
                <ul>
                  <div>
                    <span>{t("banner.allTime")}</span>
                  </div>
                  <div>
                    <span>{t("banner.from2023")}</span>
                  </div>
                  <div>
                    <span>{t("banner.from2022")}</span>
                  </div>
                  <div>
                    <span>{t("banner.from2021")}</span>
                  </div>
                  <div onClick={handleModal}>
                    <span>{t("banner.selectDates")}</span>
                  </div>
                </ul>
              </UiSelectLibrary>
            </div> */}
          </div>
          <div className="result">
            <div className="rtitle">{t('library.searchResults')} ({library.length})</div>
            {library.length === 0 ? (
              <div className="rtext">
                {t('library.nothingFound')}
              </div>
            ) : null}
          </div>
          {loading ? (
            <SimpleLoading />
          ) : (
            <>
              <Cards library={library} updateLibrary={(l) => setLibrary(l)} />
              {/* <Pagination/> */}
            </>
          )}
        </LibraryContainer>
      </Layout>
      <ModalCategory isOpen={isOper} onOpen={setIsOpen}>
        <CategoryFilter />
      </ModalCategory>
      <ModalMobile
        header={t('library.choosePeriod')}
        isOpen={activemobile}
        onOpen={setActiveMobile}
        // setIsDateModal={setIsDateModal}
      >
        <ModalDateMobile
          setmodal={setActiveMobile}
          setIsDateModal={setIsDateModal}
        />
      </ModalMobile>

      <ModalMobile
        header={t('library.chooseLang')}
        isOpen={activemobileLan}
        onOpen={setActiveMobileLan}
      >
        <ModalLan
          setmodal={setActiveMobileLan}
        
        />
      </ModalMobile>

      <Modal isOpen={isDateModal} onOpen={setIsDateModal}>
        <ModalDate setmodal={setIsDateModal} />
      </Modal>
    </>
  );
};
export default Library;
