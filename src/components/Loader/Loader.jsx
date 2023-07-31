import React from "react";

import "./styles.scss";

function Loader({ size }) {
  return (
    <div className="loader-wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
