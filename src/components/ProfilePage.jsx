import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Header from './Header';
const LoadingComponent = () => (
  <div className="loading">
    <div className="loading-spinner"></div>
  </div>
);
const ProfilePage = () => {

    const [contribution, setCotribution] = useState([
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It increases the timeout for waiting for nodes to become ready, which can improve the stability of the application.",
        date: "2022-11-10",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new feature (--wait-for-nodes) to the application, which allows users to wait for the workload nodes to be ready before proceeding with the installation process.",
        date: "2022-11-03",
      },
      {
        legitimacy: "yes",
        impact: "low",
        summary:
          "The contribution is legitimate, but its impact is low. It adds a new optional argument to the command-line interface (CLI), allowing users to specify whether they want to wait for nodes to be ready before proceeding with the installation. This is a useful feature, but it is not a major change to the application.",
        date: "2022-11-03",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new feature to the tool, allowing users to wait for all workload cluster nodes to be ready before continuing with the installation process.",
        date: "2022-11-03",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new function `wait_for_number_of_nodes` that waits for a specified number of nodes to become ready before proceeding. This is a useful utility function that can be used in various scenarios, such as waiting for a cluster to scale up before deploying an application.",
        date: "2022-11-03",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new feature to the application and fixes a critical bug.",
        date: "2022-10-11",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "This contribution is legitimate and impactful as it enhances the installation capabilities of a tool, adds user-friendly configuration, and provides a better user experience.",
        additional_factors: [
          "It addresses a critical bug.",
          "It conforms to the project's coding standards.",
          "It has been reviewed and approved by a maintainer.",
        ],
        date: "2022-10-11",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution adds a new optional argument `install_path` to the `install_tools` function, allowing the user to specify a custom installation path for the tools.",
        additional_factors: [],
        date: "2022-10-11",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution adds an optional installation path parameter to the check_clusterctl(), check_kind(), and check_kubectl() functions, allowing users to specify a custom installation location for these binaries.",
        additional_factors: [],
        date: "2022-10-11",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution includes a new feature and fixes a bug, improving the functionality of the application.",
        additional_factors: [
          "The contribution is well-written and easy to understand.",
          "The contributor has provided clear instructions on how to use the new feature.",
          "The contribution has been reviewed by other developers and approved for merging.",
        ],
        date: "2021-08-11",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          'The contribution patch adds a new feature (handling "exec" events) and fixes a significant vulnerability (buffer overflow) making the application more secure and robust.',
        date: "2021-08-10",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "This contribution is both legitimate and impactful. It adds a new feature to the Brigade project by adding a way to create Jobs from the Brigade CLI. This is a valuable addition to the project, as it makes it easier to use the Brigade CLI to manage jobs.",
        additional_factors: [
          "The patch is well-written and follows the project's coding standards.",
          "It has been reviewed and approved by the project's maintainers.",
          "It has been tested and shown to work correctly.",
        ],
        date: "2021-08-09",
      },
      {
        legitimacy: "no",
        impact: "no",
        summary:
          "The contribution is not legitimate as it removes the validation of project IDs, which could lead to invalid or inconsistent project IDs being used. Furthermore, this contribution is not impactful as it does not add any new features or fix any bugs.",
        date: "2021-07-19",
      },
      {
        legitimacy: "yes",
        impact: "no",
        summary:
          "The contribution is legitimate but has a low impact. It adds a few test cases to the ValidateProjectID function, which is a utility function used to validate the format of a project ID.",
        date: "2021-07-19",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds new functions for validating project IDs and Git clone URLs, which enhances the robustness of the application.",
        date: "2021-07-19",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "This contribution adds a new feature to the application that validates project ID and Git clone URL. It includes several test cases to verify the functionality. The contribution is well-written and appears to be of high quality.",
        date: "2021-07-19",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution adds a new feature to the application that allows users to specify a git clone URL when creating a new project from a template. It also validates the URL before use.",
        date: "2021-07-19",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new method to the project client to validate project IDs.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds comprehensive test cases to validate project ID and ensures the projects API works correctly.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds two new flags, `--git` and `--language`, to the application, allowing users to interact with Git repositories and perform language-specific tasks.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution appears to be legitimate and impactful. It adds a new command to initialize a Brigade project and includes features such as choosing the scripting language, handling git repositories, and generating template files.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds test cases for the fileExtensionForLanguage and addLinesToFile functions.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution adds new functionality to the project template, making it easier for users to add GitHub source code and secrets to their Brigade projects. It also includes improved documentation and error handling, making the template more user-friendly.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds unit tests for the execTemplate and ProjectFileTemplate functions, which are used to generate Brigade project files.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "no",
        summary:
          "The contribution is legitimate but does not seem to have significant impact on the overall project.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "no",
        summary:
          "The contribution is legitimate but has a minimal impact. It updates dependencies and adds some indirect dependencies.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution adds a new module to the project and fixes a critical bug in the main application.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful as it adds a new feature to check if a directory exists and creates it if it doesn't exist.",
        additional_factors: {
          code_quality: "good",
          test_coverage: "high",
          documentation: "adequate",
        },
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new function to the file package, which creates a directory if it doesn't exist, and returns a boolean indicating whether the directory was created or already existed.",
        date: "2021-07-13",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is a legitimate and impactful addition of a new feature to the Brigade 2 application. It includes a new version of the application compatible with Kubernetes versions 1.16.0+. The patch also includes a note indicating that Brigade 2 is compatible with Kubernetes versions 1.16.0+, which is helpful information for users.",
        date: "2021-06-22",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It updates the prerequisites section of the documentation to include the required Kubernetes version for running kind and adds a new development environment setup guide for running kind.",
        additional_factors: [
          "The contribution is well-written and easy to understand.",
          "The contributor has provided a clear explanation of the changes and their impact.",
          "The contribution is in line with the project's goals and values.",
        ],
        date: "2021-06-22",
      },
      {
        legitimacy: "yes",
        impact: "minor",
        summary:
          "The contribution adds a new yarn-audit target to the Makefile, which can be used to check for vulnerabilities in the project's JavaScript dependencies.",
        date: "2021-06-07",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "This contribution adds a new feature to the application that will scan the project for vulnerabilities using the 'yarn audit' command. It also includes error handling and logging for better debugging.",
        additional_factors: {
          test_coverage: "unknown",
          code_quality:
            "Assuming good since the contribution follows the coding conventions and includes proper error handling.",
          security_implications:
            "Addresses security vulnerabilities by detecting and reporting them.",
        },
        date: "2021-06-07",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "This patch is legitimate and impactful. It fixes a potential security issue by preventing arbitrary file deletion outside of the application's directory.",
        date: "2021-08-05",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It updates the metrics exporter to use the new API client and adds a new start method to the exporter.",
        date: "2021-07-30",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new metrics exporter to the application, which can export various metrics such as projects count, users count, service accounts count, etc.",
        date: "2021-07-30",
      },
      {
        legitimacy: "yes",
        impact: "no",
        summary:
          "The contribution is legitimate, but it has a low impact. It adds a new configuration option for the decimals in the application.",
        date: "2021-07-30",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It improves the reliability of the application by removing a critical bug and adding a new feature.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds several new metrics to the application, including the number of projects, users, service accounts, pending jobs, and event counts by worker phase. These metrics are important for monitoring the health and performance of the application.",
        date: "2021-07-28",
      },
      {
        legitimacy: "no",
        impact: "no",
        summary:
          "The contribution is not legitimate and does not have any impact. It removes the minimum refresh interval for dashboards, which is a critical security feature.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It changes the refresh rate of the application from 2 seconds to 5 seconds, which can improve performance, and also adds a new interval option of 2 seconds to the timepicker, which gives users more flexibility.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful, It adds a new feature to the application and fixes a critical bug.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new dependency, `@brigadecore/brigadier` to the `brigade-metrics-ci-cd` package, which may add new functionalities or fix bugs.",
        additional_factors: [
          "The contribution comes from a trusted contributor.",
          "The contribution has been reviewed and approved by the maintainers of the project.",
        ],
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds Brigade 2 compatibility to the brigade-metrics project, enabling it to work with the latest version of Brigade.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "This is a legitimate and impactful contribution. It adds a new library to the project which provides better functionality for managing tasks.",
        date: "2021-07-28",
      },
      {
        legitimacy: "no",
        impact: "no",
        summary:
          "The contribution is not legitimate or impactful. It adds new files and folders to the project that are not related to the project's functionality.",
        date: "2021-07-28",
      },
      {
        legitimacy: "no",
        impact: "no",
        summary:
          "The contribution is not legitimate. It adds a code owner without any explanation or context.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "no",
        summary:
          "The contribution is legitimate, but it is unlikely to have a significant impact.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution adds a new feature to the project by integrating Prometheus, an open-source monitoring system. It involves changes to the Makefile, Dockerfile, and some shell scripts, as well as additions of new files for configuration and startup of Prometheus. The contributor has provided instructions on how to setup and use the new feature. Overall, the contribution appears to be well-thought-out and beneficial to the project.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "no",
        summary:
          "The contribution is legitimate but has a low impact. It updates the documentation and adds instructions for installing the Brigade Metrics add-on feature.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "no",
        summary:
          "The contribution does not introduce new features or fix bugs. It seems to be a minor refactoring or code cleanup.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "minor",
        summary:
          "The contribution adds dependencies to the project, which enhances its functionality.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "minor",
        summary:
          "The contribution is legitimate, but has a minor impact. It fixes a bug in the Helm chart for Brigade Metrics.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It updates the repository and image of the exporter and Grafana components to the brigadecore namespace, providing a consistent and centralized management of Brigade metrics components.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It updates the build command with the correct repository name and adds version information to the build flags.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new feature by integrating a metrics exporter and eliminates a critical vulnerability by updating to the latest version.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It improves the accuracy of the application by fixing a critical bug.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new 'file' dependency to the application and makes code more readable.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The patch is legitimate and impactful. It enhances the overall stability and performance of the exporter and adds telemetry for Brigade Core and Kubernetes system metrics.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds new metrics for projects, users, service accounts, events by worker phase, and pending jobs.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution adds new features to the software, including the ability to record metrics about projects, users, service accounts, workers, and pending jobs. It also fixes bugs in the existing code.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful as it fixes a bug related to metric display and modifies a major dependency.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "no",
        summary:
          "The contribution is legitimate but has low impact. It fixes a minor issue and does not add any new features or functionality",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It adds a new feature to kind, the Kubernetes-in-Docker tool, which allows users to run Kubernetes clusters locally. This feature adds support for using a local Docker image registry with the kind cluster, making it easier to develop and test containerized applications.",
        date: "2021-07-28",
      },
      {
        legitimacy: "yes",
        impact: "yes",
        summary:
          "The contribution is legitimate and impactful. It provides a comprehensive solution to a critical bug in the application, with thorough testing and documentation.",
        date: "2021-07-27",
      },
    ]);
     const legitimacyColorMap = {
       yes: "color-scale-green",
       no: "color-scale-red",
     };
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
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
          setLoading(false);
        }
      };

      fetchUserData();
    }, []);
    const [tooltipData, setTooltipData] = useState({ date: "", summary: "" });
    
      console.log(tooltipData);
    
    return (
      <>
        <Header />
        {userData && (
          <div class="profile-page">
            <div class="content">
              <div class="content__cover">
                <div
                  class="content__avatar"
                  style={{
                    background: `#8f6ed5 url(${userData?.avatar_url}) center center no-repeat`,
                  }}
                ></div>
                <div class="content__bull">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="content__actions">
                {/* <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                fill="currentColor"
                d="M192 256A112 112 0 1 0 80 144a111.94 111.94 0 0 0 112 112zm76.8 32h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 0 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 268.8 288z"
              ></path>
              <path
                fill="currentColor"
                d="M480 256a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592a48 48 0 0 0 48-48 111.94 111.94 0 0 0-112-112z"
              ></path>
            </svg>
            <span>Connect</span>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                fill="currentColor"
                d="M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 0 1-7.3-4.8 8 8 0 0 1 1.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z"
              ></path>
              <path
                fill="currentColor"
                d="M576 320c0 34.3-14.1 66-38 92 13.4 30.3 35.5 54.2 35.8 54.5a8 8 0 0 1 1.5 8.7 7.88 7.88 0 0 1-7.3 4.8c-36.6 0-66.9-12.3-88.7-25-32.2 15.8-70.3 25-111.3 25-86.2 0-160.2-40.4-191.7-97.9A299.82 299.82 0 0 0 208 384c132.3 0 240-86.1 240-192a148.61 148.61 0 0 0-1.3-20.1C522.5 195.8 576 253.1 576 320z"
              ></path>
            </svg>
            <span>Message</span>
          </a> */}
              </div>
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
            <div class="theme-switcher-button" id="theme-switcher-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M352 0H32C14.33 0 0 14.33 0 32v224h384V32c0-17.67-14.33-32-32-32zM0 320c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64v-32H0v32zm192 104c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24z"
                ></path>
              </svg>
            </div>
          </div>
        )}
        {loading && <LoadingComponent />}
        <h2 style={{ textAlign: "center" }}>Contibutions in 2021 to 2022</h2>
        <CalendarHeatmap
          startDate={new Date("2021-01-01")}
          endDate={new Date("2022-01-01")}
          values={contribution.map((contrib) => ({
            date: contrib.date,
            legitimacy: contrib.legitimacy,
            summary: contrib.summary,
          }))}
          classForValue={(value) => {
            if (!value || !legitimacyColorMap[value.legitimacy]) {
              return "color-empty";
            }
            return legitimacyColorMap[value.legitimacy];
          }}
          tooltipDataAttrs={(value) => {
            return {
              "data-tip": `submissions on`,
            };
          }}
        />
        <Tooltip id="my-tooltip" />

        <h2 style={{ textAlign: "center" }}>Contributions in 2021 to 2022</h2>
        <CalendarHeatmap
          startDate={new Date("2022-01-01")}
          endDate={new Date("2023-01-01")}
          values={contribution.map((contrib) => ({
            date: contrib.date,
            legitimacy: contrib.legitimacy,
            summary: contrib.summary, // assuming you have a summary property
          }))}
          classForValue={(value) => {
            if (!value || !value.legitimacy) {
              return "color-empty";
            }

            return value.legitimacy === "yes"
              ? "color-scale-green"
              : "color-scale-red";
          }}
        />
        <h2 style={{ textAlign: "center" }}>Contributions in 2023 to 2024</h2>
        <CalendarHeatmap
          startDate={new Date("2023-01-01")}
          endDate={new Date("2024-01-01")}
          values={contribution.map((contrib) => ({
            date: contrib.date,
            legitimacy: contrib.legitimacy,
          }))}
          classForValue={(value) => {
            if (!value || !legitimacyColorMap[value.legitimacy]) {
              return "color-empty";
            }
            return legitimacyColorMap[value.legitimacy];
          }}
        />
      </>
    );
}

export default ProfilePage
