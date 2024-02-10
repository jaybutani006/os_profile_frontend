import React, { useState } from 'react'
import './Home.css'
import Header from './Header';
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import Tooltip from './Tooltip';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const Home = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    return (
      <>
        <Header />
        <div
          class="flex flex-col items-center mx-auto text-center max-w-6xl px-4"
          style={{ marginTop: "30px" }}
        >
          <div class="text-center flex flex-col items-center">
            <h1
              style={{ fontSize: "80px" }}
              class="font-instrument text-[56px] md:text-[120px] text-center leading-[110%] mb-10 md:mb-8"
            >
              The{" "}
              <i>
                Unveiling Authenticity: Redefining GitHub Contributions with
              </i>{" "}
              <span class="text-gray-gray4"> Legitimacy vs. Fakes.</span>
            </h1>
            <div
              class="mx-auto"
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                style={{
                  width: "30vw",
                  height: "50px",
                  borderRadius: "60px",
                  padding: "20px",
                  fontSize: "20px",
                }}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                width={"50vw"}
                height={"30px"}
              />
              <div
                style={{
                  borderRadius: "50%",
                  border: "2px solid black",
                  marginLeft: "15px",
                }}
              >
                <img
                  type="submit"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (username) {
                      navigate(`/profile/${username}`);
                    } else {
                      alert("Please enter username");
                    }
                  }}
                  src="https://cdn.iconscout.com/icon/free/png-256/free-next-arrow-2537334-2130489.png?f=webp"
                  height="43px"
                  width="50px"
                ></img>
              </div>
            </div>
          </div>
            </div>
            <Footer/>
      </>
    );
}

export default Home
