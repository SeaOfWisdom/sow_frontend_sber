
/*export default function Video(props) {
  const {  } = props;
  return (
    <div className="video">
      <div className="video-list">
        <video src={videouz}></video>
        <i className="material-icons video-close" onClick={handleShowVideo}>
          close
        </i>
      </div>
    </div>
  );
}
 */
import Plyr from "plyr";
import { string } from "prop-types";
import { useEffect, useRef } from "react";
import styled from "styled-components";
const StyledElement = styled.div`
  & * {
    box-sizing: border-box;
  }
  & .plyr {
    overflow: hidden !important;
    & .plyr__controls {
      display: flex;
      justify-content: flex-end;
      padding: 12px 12px 12px 12px;
      background: black;
      & .plyr__controls__item {
        margin: 0;
        padding: 7px;
        /* background-color: #5762f7; */
      }
    }
    & .plyr__video-wrapper--fixed-ratio video{
     background-image: url('/img/videobackground.svg')!important;
    }
    & .plyr__control--overlaid {
      border-radius: 14.5783px;
      padding: 15px 38px;
      background: #f00000;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      & svg {
        width: 49.97px;
        height: 40.97px;
      }
    }
    & .plyr__poster {
      background-size: cover;
    }
  }
`;
export default function Video({ source, poster, handleShowVideo }) {
  const ref = useRef(null);
  const player = useRef(null);
  useEffect(() => {
    const defaultOptions = {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        // "settings",
        // "pip",
        "airplay",
        "fullscreen",
      ],
      ratio: "16:9",
      autoplay: true,
      debug: true,
      volume: 0,
      muted: true,
    };
    player.current = new Plyr(ref.current, defaultOptions);
  }, [source]);
  return (
    <div className="video">
      <div className="video-list">
        <StyledElement>
          <video
            controls
            crossOrigin="true"
            playsInline
            preload="none"
            poster={poster}
            ref={ref}
            src={'video/17_021_03 (1).mov'}
            allowfullscreen
            allowtransparency
          />
        </StyledElement>
        <div className="material-icons video-close" onClick={handleShowVideo}>
          <img src="/img/close-circle.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
Video.defaultProps = {
  source: "",
  poster: "",
};
Video.propTypes = {
  source: string,
  poster: string,
};
