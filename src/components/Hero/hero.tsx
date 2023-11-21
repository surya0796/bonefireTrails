import { useEffect, useState } from "react";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";
import "./hero.scss";

const DEFAULTCLS = "hero";

const Hero = () => {
  const [videoIdx, setVideoIdx] = useState(0);
  const videoArr = [video1, video2, video3, video4, video5];

  useEffect(() => {
    const interval = setTimeout(() => {
      setVideoIdx((prev) => (prev + 1) % videoArr.length);
    }, 10000);
    return () => clearTimeout(interval);
  }, [videoIdx]);

  useEffect(() => {
    console.log(videoIdx);
  }, [videoIdx]);

  const handlePrev = () => {
    if (videoIdx != 0) {
      setVideoIdx((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (videoIdx < videoArr.length - 1) {
      setVideoIdx((prev) => prev + 1);
    }
  };
  return (
    <div className={DEFAULTCLS}>
      <span
        className={`${DEFAULTCLS}__carousel-btn ${DEFAULTCLS}__prev-btn`}
        onClick={handlePrev}
      >
        {"<"}
      </span>
      <div className={`${DEFAULTCLS}__overlay`}>
        <div className={`${DEFAULTCLS}__card`}>
          <video
            src={videoArr[videoIdx]}
            className={`${DEFAULTCLS}__video`}
            controls={false}
            autoPlay
            muted
          ></video>
          <div className={`${DEFAULTCLS}__cta-container`}>
            <button className={`${DEFAULTCLS}__book-btn ${DEFAULTCLS}__cta`}>
              Book Now
            </button>
            <button className={`${DEFAULTCLS}__info-btn ${DEFAULTCLS}__cta`}>
              More info
            </button>
          </div>
        </div>
      </div>
      <span
        className={`${DEFAULTCLS}__carousel-btn ${DEFAULTCLS}__next-btn`}
        onClick={handleNext}
      >
        {">"}
      </span>
    </div>
  );
};

export default Hero;
