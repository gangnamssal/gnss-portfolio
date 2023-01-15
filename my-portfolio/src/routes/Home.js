import React from "react";
import MovieProject from "../components/MovieProject";
import styled from "../style/Home.module.css";
import profileImg from "../style/profile.jpg";

function Home() {
  return (
    <div>
      <header>
        <h1>header</h1>
      </header>
      <div className={styled.container}>
        <div className={styled.profile}>
          <div>
            <h1>profile</h1>
            <img className={styled.profileImg} src={profileImg} alt="profile" />
          </div>
        </div>

        <div className={styled.content}>
          <div>
            <h1>content</h1>
          </div>
          <div className={styled.section2Container}>
            <div className={styled.gridBox}>
              <MovieProject />
            </div>
            <div className={styled.gridBox}>2</div>
            <div className={styled.gridBox}>3</div>
            <div className={styled.gridBox}>4</div>
          </div>
        </div>
      </div>
      <footer>fsa</footer>
    </div>
  );
}

export default Home;
