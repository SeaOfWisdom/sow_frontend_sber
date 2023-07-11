import { useState } from "react";
import { Banner3Container } from "../../styleComponents/home/Banner3Style";
import Video from "./Video";
import { useEffect, useRef } from "react";
import Plyr from "plyr";
import { string } from "prop-types";
import styled from "styled-components";
import { UiSelect } from "../../styleComponents/UiComponents/UISelect";
import { useTranslation } from 'react-i18next';


const StyledVideo = styled.div`
  & video {
    /* width: 480px; */
    /* height: 473px; */
    border-radius: 16px;
  }
`;
const Banner3 = () => {
  const { t } = useTranslation();
  const [videoshow, setVideoshow] = useState(false);
  const handleShowVideo = () => {
    setVideoshow(!videoshow);
  };

  return (
    <>
      <Banner3Container>
        <div className="video-mobile">
          <StyledVideo>
            <video autoPlay muted loop>
              <source src={"/video/home_video.mov"} type="video/mp4" />
            </video>
          </StyledVideo>
        </div>
        <div className="video-respons"></div>
        <div className="banner">
          <div className="text_target">
            <h2>{t('banner3.alternative')}</h2>
            {/* <button className="btn" onClick={handleShowVideo}>
              <img src="/img/play.svg" alt="play" />
              Смотреть видео
            </button> */}
          </div>

          <div className="img_target">
            {/* <img className="banner_img" src="/img/b3.svg" alt="banner_img" /> */}
            <StyledVideo>
              <video autoPlay muted loop>
                <source src={"/video/home_video.mov"} type="video/mp4" />
              </video>
            </StyledVideo>

            <img className="stamp" src="/img/stamp.svg" alt="banner_img" />
          </div>
          <div className="banner__text-resp">
            <div className="banner__text-resp-items">
              <p>
                {t('banner3.generalInfo')}
              </p>
              <div className="btn">
                <UiSelect
                  style={{
                    width: "200px",
                    backgroundColor: "#F0F3F4",
                    boxShadow: "0px 2px 0px #2A2C35",
                  }}
                >
                  <div
                    style={{
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <span className="langspan" style={{ display: "flex" }}>
                      {/* {lan === "ru" ? "Руc" : "Eng"} */}
                      <img
                        src="/img/play.svg"
                        alt="play"
                        style={{ marginRight: "8px" }}
                      />
                      {t('banner3.watchVideo')}
                    </span>
                  </div>
                </UiSelect>
              </div>
            </div>
          </div>
        </div>
      </Banner3Container>
      {videoshow && <Video handleShowVideo={handleShowVideo} />}
    </>
  );
};
export default Banner3;

Video.defaultProps = {
  source: "",
  poster: "",
};
Video.propTypes = {
  source: string,
  poster: string,
};
