import React from "react";
import { useState } from "react";

import mainPage from "../style/mainPage.png";
import mainPage2 from "../style/mainPage2.png";
import detailPage2 from "../style/detailPage2.png";
import recomandationMBTI from "../style/recomandationMBTI.png";

import styled from "../style/MovieProject.module.css";

function MovieProject() {
  const poster = [mainPage, mainPage2, detailPage2, recomandationMBTI];
  const [id, setId] = useState(0);
  const onHover = (e) => {
    let cnt = 0;
    const timeoutId = setInterval(() => {
      e.target.src = poster[cnt];
      cnt++;
      if (cnt === 4) cnt = 0;
    }, 700);
    setId(timeoutId);
  };

  const leaveHover = () => {
    clearInterval(id);
  };

  return (
    <div>
      <img
        className={styled.img}
        src={mainPage}
        alt="mainPage"
        onMouseOver={onHover}
        onMouseOut={leaveHover}
      />
    </div>
  );
}

export default MovieProject;
