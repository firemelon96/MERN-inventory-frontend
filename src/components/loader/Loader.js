import React from "react";
import loaderimg from "../../assets/loader.gif";
import ReactDom from "react-dom";
import "./Loader.scss";

const Loader = () => {
  return ReactDom.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderimg} alt="loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="--center-all">
      <img src={loaderimg} alt="loading..." />
    </div>
  );
};

export default Loader;
