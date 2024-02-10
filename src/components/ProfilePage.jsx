import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import { Row, Col } from "react-bootstrap";

import "react-calendar-heatmap/dist/styles.css";
// import "react-tooltip/dist/react-tooltip.css";
import Header from "./Header";
import Footer from "./Footer";
const LoadingComponent = () => (
  <div className="loading">
    <div className="loading-spinner"></div>
  </div>
);
const ProfilePage = () => {
  const [contribution, setCotribution] = useState(null);
  const legitimacyColorMap = {
    yes: "color-scale-green",
    no: "color-scale-red",
  };
  const [userData, setUserData] = useState(null);
  const [userRepo, setUserRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingRepo, setLoadingRepo] = useState(true);
  const [error, setError] = useState(null);

  const { username } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
          //   setLoading(false);
           setTimeout(() => {
             ReactTooltip.rebuild(); // Add a delay before rebuilding tooltips
           }, 0);
      }
    };
    const fetchUserRepo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/json/repo/${username}`
        );
        setUserRepo(response.data);
        setLoadingRepo(false);
      } catch (error) {
        setError(error.message);
      } finally {
        //   setLoading(false);
      }
    };
    const fetchUserContribute = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/json/json/${username}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
          { username: username }
        );
        const contributionsWithDateObjects = response.data.contributions.map(
          (contrib) => ({
            ...contrib,
            date: new Date(contrib.date),
          })
        );

        setCotribution(contributionsWithDateObjects);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserContribute();
    fetchUserData();
      fetchUserRepo();
    //   ReactTooltip.rebuild(); 
  }, []);
    useEffect(() => {
      ReactTooltip.rebuild();
    }, [contribution, userData]);
    
  const [tooltipData, setTooltipData] = useState({ date: "", summary: "" });

  console.log(tooltipData);
  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
  }
  const today = new Date();
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomValues2 = contribution?.map((contrib) => {
    return {
      date: contrib.date, // Assuming count should be a random value between 1 and 3
      legitimacy: contrib.legitimacy,
      summary: contrib.summary,
    };
  });
  const randomValues = getRange(200).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });
  console.log(randomValues2, "randome value2");
  // useEffect(() => {
  //   ReactTooltip.rebuild();
  // }, []);
  const RepositoryBox = ({ repositoryName, onClick }) => (
    <Col xs={12} sm={6} md={4} lg={4} style={{ marginBottom: "20px" }}>
      {/* Adjusted column sizes for different screen sizes */}
      <div
        className="repository-box"
        onClick={onClick}
        style={{
          borderRadius: "10px",
          fontSize: "20px",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          height: "100%", // Ensure each box has the same height
        }}
      >
        <p style={{ cursor: "pointer", color: "black" }}>{repositoryName}</p>
      </div>
    </Col>
  );
  return (
    <>
      <Header avtar={userData?.avatar_url} />
      {userData && (
        <div class="profile-page">
          <div class="content">
            <div class="content__cover">
              <div class="content__avatar">
                <img
                  src={userData?.avatar_url}
                  alt="User Avatar"
                  style={{
                    objectFit: "cover", // This property ensures the image covers the entire container
                    width: "100%", // Set width and height to 100% to fill the container
                    height: "100%",
                    borderRadius: "50%", // To make it a circular container
                  }}
                />
              </div>
              <div class="content__bull">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="content__actions"></div>
            <div class="content__title">
              <h1 style={{ marginTop: "20px" }}>{userData?.name}</h1>
              <span>{userData?.location}</span>
            </div>
            <div class="content__description">
              <p>{userData?.bio}</p>
            </div>
            <ul class="content__list">
              <li>
                <span>{userData?.followers}</span>Followers
              </li>
              <li>
                <span>{userData?.public_repos}</span>Public Repositories
              </li>
              <li>
                <span>{userData?.following}</span>Following
              </li>
            </ul>
            {/* <div class="content__button">
          <a class="button" href="#">
            <div class="button__border"></div>
            <div class="button__bg"></div>
            <p class="button__text">Show more</p>
          </a>
        </div> */}
          </div>
          {/* <ContributionGraph /> */}
          <div class="bg">
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="theme-switcher-wrapper" id="theme-switcher-wrapper">
            <span>Themes color</span>
            <ul>
              <li>
                <em class="is-active" data-theme="orange"></em>
              </li>
              <li>
                <em data-theme="green"></em>
              </li>
              <li>
                <em data-theme="purple"></em>
              </li>
              <li>
                <em data-theme="blue"></em>
              </li>
            </ul>
          </div>

          {/* <div class="theme-switcher-button" id="theme-switcher-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M352 0H32C14.33 0 0 14.33 0 32v224h384V32c0-17.67-14.33-32-32-32zM0 320c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64v-32H0v32zm192 104c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24z"
                ></path>
              </svg>
            </div> */}
        </div>
      )}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Forked Repositories
      </h2>
      {loadingRepo && <LoadingComponent />}
      <div
        className="repository-box-container"
        style={{ marginLeft: "20px", marginRight: "20px", overflowX: "hidden" }}
      >
        {/* Add marginLeft and marginRight for space at start and end */}
        <Row>
          {userRepo?.map((repo, index) => (
            <RepositoryBox
              key={repo[0]}
              repositoryName={repo[0]}
              onClick={() =>
                window.open(`https://github.com/${repo[0]}`, "_blank")
              }
            />
          ))}
        </Row>
      </div>
      {/* <h2 style={{ textAlign: "center" }}>Contibutions in 2021 to 2022</h2> */}
      {/* {loading && <LoadingComponent />} */}
      <div>
        {/* <CalendarHeatmap
          startDate={shiftDate(today, -150)}
          endDate={today}
          values={randomValues}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-github-${value.count}`;
          }}
          tooltipDataAttrs={(value) => {
            return {
              "data-tip": `${value.date
                .toISOString()
                .slice(0, 10)} has count: ${value.count}`,
            };
          }}
          showWeekdayLabels={true}
          onClick={(value) =>
            alert(`Clicked on value with count: ${value.count}`)
          }
        /> */}
      </div>
      <h2 style={{ textAlign: "center" }}>Contributions in 2022 to 2023</h2>
      {console.log(contribution)}
      {contribution && (
        <CalendarHeatmap
          startDate={new Date("2022-01-01")}
          endDate={new Date("2023-01-01")}
          values={randomValues2}
          classForValue={(value) => {
            if (!value || !value.legitimacy) {
              return "color-empty";
            }
            return value.legitimacy === "yes"
              ? "color-scale-green"
              : "color-scale-red";
          }}
          tooltipDataAttrs={(value) => {
            if (!value || !value.date) {
              return {};
            }
            return {
              "data-tip": `${value?.date
                ?.toISOString()
                .slice(0, 10)} has summary: ${value?.summary}`,
            };
          }}
          onClick={(value) =>
            alert(`Clicked on value for with summary: ${value?.summary}`)
          }
        />
      )}
      <ReactTooltip />
      {loading && <LoadingComponent />}
      <h2 style={{ textAlign: "center" }}>Contributions in 2023 to 2024</h2>
      {contribution && (
        <CalendarHeatmap
          startDate={new Date("2023-01-01")}
          endDate={new Date("2024-01-01")}
          values={randomValues2}
          classForValue={(value) => {
            if (!value || !value.legitimacy) {
              return "color-empty";
            }
            return value.legitimacy === "yes"
              ? "color-scale-green"
              : "color-scale-red";
          }}
          tooltipDataAttrs={(value) => {
            if (!value || !value.date) {
              return {};
            }
            const tooltipId = `tooltip-${value.date
              .toISOString()
              .slice(0, 10)}`;
            return {
              "data-tip": `${value?.date
                ?.toISOString()
                .slice(0, 10)} has summary: ${value?.summary}`,
            };
          }}
          onClick={(value) =>
            alert(`Clicked on value for with summary: ${value?.summary}`)
          }
        />
      )}
      {loading && <LoadingComponent />}
      <Footer />
    </>
  );
};

export default ProfilePage;
