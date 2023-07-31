import React from "react";
// 
import LoadingSpinner from '../components/Loader/Loader'

function PageLayout(props) {
  return true ? (
    <LoadingSpinner />
  ) : (
    <div className="wrapper">{props.children}</div>
  );
}
export default PageLayout;
ƒ;
