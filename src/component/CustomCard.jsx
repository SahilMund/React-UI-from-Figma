import React from "react";

import "../styles/Card.css";

const CustomCard = ({ data }) => {
  return (
    <div className="grid-container">
      {data &&
        data.map((item) => (
          <div className="card-body">
            <div className="card-image">
              <img src={item.image} alt="" />
            </div>

            <div className="card-content">
              <div className="name">{item.name}</div>
              <div className="rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M5.5 7.91541L7.40209 9.06583C7.75042 9.27666 8.17667 8.96499 8.085 8.57083L7.58084 6.40749L9.26292 4.94999C9.57 4.68416 9.405 4.17999 9.00167 4.14791L6.78792 3.95999L5.92167 1.91583C5.76584 1.54458 5.23417 1.54458 5.07834 1.91583L4.21209 3.95541L1.99834 4.14333C1.595 4.17541 1.43 4.67958 1.73709 4.94541L3.41917 6.40291L2.915 8.56624C2.82334 8.96041 3.24959 9.27208 3.59792 9.06124L5.5 7.91541Z"
                    fill="black"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M5.5 7.91541L7.40209 9.06583C7.75042 9.27666 8.17667 8.96499 8.085 8.57083L7.58084 6.40749L9.26292 4.94999C9.57 4.68416 9.405 4.17999 9.00167 4.14791L6.78792 3.95999L5.92167 1.91583C5.76584 1.54458 5.23417 1.54458 5.07834 1.91583L4.21209 3.95541L1.99834 4.14333C1.595 4.17541 1.43 4.67958 1.73709 4.94541L3.41917 6.40291L2.915 8.56624C2.82334 8.96041 3.24959 9.27208 3.59792 9.06124L5.5 7.91541Z"
                    fill="black"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M5.5 7.91541L7.40209 9.06583C7.75042 9.27666 8.17667 8.96499 8.085 8.57083L7.58084 6.40749L9.26292 4.94999C9.57 4.68416 9.405 4.17999 9.00167 4.14791L6.78792 3.95999L5.92167 1.91583C5.76584 1.54458 5.23417 1.54458 5.07834 1.91583L4.21209 3.95541L1.99834 4.14333C1.595 4.17541 1.43 4.67958 1.73709 4.94541L3.41917 6.40291L2.915 8.56624C2.82334 8.96041 3.24959 9.27208 3.59792 9.06124L5.5 7.91541Z"
                    fill="black"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M5.5 7.91541L7.40209 9.06583C7.75042 9.27666 8.17667 8.96499 8.085 8.57083L7.58084 6.40749L9.26292 4.94999C9.57 4.68416 9.405 4.17999 9.00167 4.14791L6.78792 3.95999L5.92167 1.91583C5.76584 1.54458 5.23417 1.54458 5.07834 1.91583L4.21209 3.95541L1.99834 4.14333C1.595 4.17541 1.43 4.67958 1.73709 4.94541L3.41917 6.40291L2.915 8.56624C2.82334 8.96041 3.24959 9.27208 3.59792 9.06124L5.5 7.91541Z"
                    fill="black"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M5.5 7.91541L7.40209 9.06583C7.75042 9.27666 8.17667 8.96499 8.085 8.57083L7.58084 6.40749L9.26292 4.94999C9.57 4.68416 9.405 4.17999 9.00167 4.14791L6.78792 3.95999L5.92167 1.91583C5.76584 1.54458 5.23417 1.54458 5.07834 1.91583L4.21209 3.95541L1.99834 4.14333C1.595 4.17541 1.43 4.67958 1.73709 4.94541L3.41917 6.40291L2.915 8.56624C2.82334 8.96041 3.24959 9.27208 3.59792 9.06124L5.5 7.91541Z"
                    fill="black"
                  />
                </svg>

                <span className="rating_span">{item.rating}</span>
              </div>
              <div className="price">
                Rs. {item.price}
                <span className="originalPrice">Rs. {item.OriginalPrice}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CustomCard;
