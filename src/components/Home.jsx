import React from 'react'
import './Home.css'
import Header from './Header';
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import Tooltip from './Tooltip';
const Home = () => {
    return (
      <>
        <Header />
        <div
          class="flex flex-col items-center mx-auto text-center max-w-6xl px-4"
          style={{ marginTop: "30px" }}
        >
          <div class="text-center flex flex-col items-center">
            <h1
              style={{ fontSize: "120px" }}
              class="font-instrument text-[56px] md:text-[120px] text-center leading-[110%] mb-10 md:mb-8"
            >
              The <i>Professional Network for</i>{" "}
              <span class="text-gray-gray4"> people in tech!</span>
            </h1>
            <div class="mx-auto" style={{ marginTop: "30px" }}>
              <input
                type="text"
                style={{
                  width: "30vw",
                  height: "50px",
                  borderRadius: "60px",
                  padding: "20px",
                }}
                placeholder="Username"
                width={"50vw"}
                height={"30px"}
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home
