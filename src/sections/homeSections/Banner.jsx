import Select from "react-select";
import { BannerContainer } from "../../styleComponents/home/BannerStyle";
import { useState } from "react";
import { UiSelect } from "../../styleComponents/UiComponents/UISelect";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../layout/Modal";
import ModalDate from "./ModalDate";
import { useEffect } from "react";
import ModalCategory from "../layout/ModalCategory";
import CategoryFilter from "../utils/CategoryFilter";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Banner = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState(false);
  const [activecategory, setActiveCategory] = useState(false);
  const [isOper, setIsOpen] = useState(false);
  const [search, setSerach] = useState("");
  const defaultOptions = {
    isMulti: true,
    isSearchable: false,
    isDisabled: false,
    styles: {
      container: (styles) => ({
        ...styles,
        // marginRight: "16px",
      }),
      singleValue: (style) => ({
        ...style,
        fontFamily: "Golos",
      }),
      control: (styles) => ({
        ...styles,
        width: "100%",
        padding: "0px 20px",
        fontFamily: "Golos",
        fontSize: "16px",
        background: "#F0F3F4",
        border: " 1px solid #2A2C35",
        boxShadow: "0px 2px 0px",
        // minHeight: "38.5px",
        borderRadius: "1000px",
        height: "48px",
        // border: "1px solid #2A2C35",
        color: "",
        "&:hover": {
          border: " 1px solid #2A2C35",
          boxShadow: "0px 2px 0px",
        },
      }),
      valueContainer: (styles) => ({
        ...styles,
        color: "black",
        padding: "0px!important",
        // marginRight: "100px",
        fontWeight: 500,
        display: "flex",
        fontSize: "14px",
      }),
      indicatorSeparator: (styles) => ({
        ...styles,
        backgroundColor: "#F0F3F4",
        with: "0px",
      }),
      dropdownIndicator: (base) => ({
        ...base,
        color: "#2A2C35",
        padding: "0px",
        marginLeft: "5px",
        "&:hover": {
          color: "#2A2C35",
        },
      }),
      //   indicatorsContainer: (styles) => ({
      //     ...styles,
      //     color: "black",
      //     height: "48px",
      //   }),
      MultiValueGeneric: (styles) => ({
        ...styles,
      }),
      //   multiValue: (styles) => ({
      //     ...styles,
      //     borderRadius: "5px",
      //     marginLeft: "-6px",
      //     marginRight: "8px",
      //     background: "#F4F6F9",
      //     padding: "2px",
      //     "@media (max-width:900px)": {
      //       ...styles["max-width:900px"],
      //       marginRight: "0px",
      //     },
      //   }),
      placeholder: (styles) => ({
        ...styles,
        color: "#2A2C35",
        fontFamily: "Golos",
        fontSize: "16px",
      }),
    },
  };
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
    setIsOpen(true);
  };
  useEffect(() => {
    const onClick = () => {
      setActive(false);
    };
    if (active) {
      window.addEventListener("click", onClick);
      window.scroll({
        top: 240,
        left: 0,
        behavior: "smooth",
      });
    }
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [active]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.length) {
      navigate(`/library?search=${search}`);
    }
  };
  return (
    <>
      <BannerContainer>
        <div className="banner">
          {console.log(window.pageYOffset, "p")}
          <h1>{t('banner.mainHeading')}</h1>

          <p>{t('banner.subHeading')}</p>
          <form className="search_target" onSubmit={handleSearch}>
            <img src="/img/search.png" alt="" className="search_icon" />
            <input
              value={search}
              onChange={(e) => setSerach(e.target.value)}
              id="search"
              type="search"
              name="search"
              className="search_input"
              placeholder={t('banner.searchPlaceholder')}
            />
          </form>
          <div className="filters ">
            {/* <div className="filter">
              <UiSelect
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCategory(true);
                }}
                style={{
                  backgroundColor: "#F0F3F4",
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
                    {t('banner.allCategories')}
                  </span>
                  {activecategory ? <Up /> : <Down />}
                </div>
              </UiSelect>
            </div> */}
            <div className="filter decktop">
              <Select {...defaultOptions} placeholder= {t('banner.allLanguages')} />
            </div>
            {/* <div className="filter">
              <UiSelect
                isActive={active}
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(!active);

                  // console.log(window.pageYOffset)
                }}
                style={{
                  backgroundColor: "#F0F3F4",
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
                    {t('banner.yearSelection')}
                  </span>
                  {active ? <Up /> : <Down />}
                </div>
                <ul>
                  <div>
                    <span>{t('banner.allTime')}</span>
                  </div>
                  <div>
                    <span>{t('banner.from2023')}</span>
                  </div>
                  <div>
                    <span>{t('banner.from2022')}</span>
                  </div>
                  <div>
                    <span>{t('banner.from2021')}</span>
                  </div>
                  <div onClick={handleModal}>
                    <span>{t('banner.selectDates')}</span>
                  </div>
                </ul>
              </UiSelect>
            </div> */}

            <div className="filter mobile">
              <Link to={"/library"}>
                <UiSelect
                  style={{
                    backgroundColor: "#F0F3F4",
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
                    <span className="langspan">{t('banner.findArticle')}</span>
                  </div>
                </UiSelect>
              </Link>
            </div>
          </div>
        </div>
        <div className="stamp_target">
          <img className="stamp" src="/img/stamp.svg" alt="banner_img"></img>
        </div>
      </BannerContainer>
      <Modal isOpen={isOper} onOpen={setIsOpen}>
        <ModalDate setmodal={setIsOpen} />
      </Modal>
      <ModalCategory isOpen={activecategory} onOpen={setActiveCategory}>
        <CategoryFilter />
      </ModalCategory>
    </>
  );
};
export default Banner;
