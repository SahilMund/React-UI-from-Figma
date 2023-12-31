import React from "react";

import "../styles/Wellness.css";

function Wellness() {
  return (
    <div className="wellness">
      <div className="overview">
        <div className="heading">Wellness Overview :</div>
        <div className="overweight">
          <span style={{ fontSize: "35px" }}>
            <b>40</b>
          </span>
          &nbsp;&nbsp; <span className="overweight-text">overweight</span>
        </div>
        <div style={{ fontSize: "10px" }}>your current BMI</div>
      </div>
      <div className="wellnessDetails">
        <div className="details">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.0789 14.3333C15.0576 14.7161 14.8905 15.0762 14.612 15.3397C14.3334 15.6032 13.9645 15.75 13.5811 15.75H4.41912C4.0357 15.75 3.66683 15.6032 3.38828 15.3397C3.10973 15.0762 2.94265 14.7161 2.92137 14.3333L2.33825 3.83325C2.32693 3.6296 2.35726 3.42577 2.42739 3.23424C2.49753 3.04271 2.60598 2.8675 2.74613 2.71931C2.88629 2.57112 3.05519 2.45307 3.24251 2.37238C3.42984 2.29168 3.63166 2.25004 3.83562 2.25H14.1646C14.3686 2.24999 14.5705 2.29159 14.7578 2.37226C14.9452 2.45293 15.1142 2.57098 15.2544 2.71917C15.3946 2.86737 15.503 3.0426 15.5732 3.23416C15.6434 3.42571 15.6737 3.62957 15.6624 3.83325L15.0789 14.3333ZM12.8416 6.66712C13.1491 6.46462 13.2264 6.063 12.974 5.80162C12.5459 5.35988 12.0456 4.99439 11.4946 4.72087C10.7296 4.34141 9.88927 4.13807 9.03537 4.12575C8.1807 4.11158 7.33367 4.28865 6.55625 4.644C5.99574 4.90011 5.48282 5.24958 5.03937 5.6775C4.778 5.931 4.84062 6.3345 5.141 6.54675L6.758 7.689C7.058 7.90125 7.481 7.83262 7.79187 7.63462C7.87207 7.58375 7.95564 7.5384 8.042 7.49887C8.31802 7.37262 8.61749 7.30581 8.921 7.30275L10.1934 5.83987C10.2586 5.76479 10.351 5.71869 10.4502 5.71173C10.4994 5.70828 10.5487 5.71454 10.5954 5.73016C10.6421 5.74578 10.6853 5.77044 10.7225 5.80275C10.7597 5.83506 10.7901 5.87437 10.8121 5.91844C10.8341 5.96252 10.8472 6.01049 10.8506 6.05962C10.8541 6.10876 10.8478 6.15809 10.8322 6.2048C10.8166 6.25151 10.7919 6.29469 10.7596 6.33187L9.77262 7.46625C9.9063 7.52157 10.034 7.59043 10.1536 7.67175C10.4574 7.87913 10.8774 7.9605 11.1849 7.758L12.8412 6.66675L12.8416 6.66712Z"
              fill="#FE8276"
            />
          </svg>
          <span style={{ fontSize: "14px" }}>
            <b>80.5 Kgs</b>
          </span>
        </div>

        <div className="details">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <mask
              id="mask0_0_224"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="1"
              y="3"
              width="16"
              height="11"
            >
              <path
                d="M15.8613 9.89105H2M2 4V12.3168V4ZM15.8613 9.89105V12.3168V9.89105Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.23767 5.38623V9.89115H15.8614V6.42583C15.8614 6.15011 15.7519 5.88568 15.5569 5.69072C15.3619 5.49576 15.0975 5.38623 14.8218 5.38623H8.23767Z"
                fill="white"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.11855 7.8121C5.69271 7.8121 6.15815 7.34666 6.15815 6.77251C6.15815 6.19835 5.69271 5.73291 5.11855 5.73291C4.5444 5.73291 4.07896 6.19835 4.07896 6.77251C4.07896 7.34666 4.5444 7.8121 5.11855 7.8121Z"
                fill="white"
                stroke="white"
                stroke-width="2"
              />
            </mask>
            <g mask="url(#mask0_0_224)">
              <path d="M0 0H17V17H0V0Z" fill="#F23CB4" />
            </g>
          </svg>
          <span style={{ fontSize: "14px" }}>
            <b>7/8 Hours</b>
          </span>
        </div>

        <div className="details">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M9.00021 1.50012C5.00271 4.91262 3.00021 7.86012 3.00021 10.3501C3.00021 14.0851 5.85021 16.5001 9.00021 16.5001C12.1502 16.5001 15.0002 14.0851 15.0002 10.3501C15.0002 7.86012 12.9977 4.91262 9.00021 1.50012ZM5.87271 10.5001C6.15021 10.5001 6.37521 10.6951 6.42771 10.9651C6.73521 12.6301 8.13771 13.2001 9.15771 13.1176C9.48021 13.1026 9.75021 13.3576 9.75021 13.6801C9.75021 13.9801 9.51021 14.2276 9.21021 14.2426C7.61271 14.3401 5.74521 13.4251 5.31771 11.1526C5.30468 11.0722 5.30926 10.9899 5.33115 10.9115C5.35304 10.833 5.39172 10.7602 5.44449 10.6982C5.49727 10.6361 5.5629 10.5863 5.63683 10.5521C5.71077 10.5179 5.79125 10.5002 5.87271 10.5001Z"
              fill="#2F72F0"
            />
          </svg>
          <span style={{ fontSize: "14px" }}>
            <b>4/8 Glasses</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Wellness;
