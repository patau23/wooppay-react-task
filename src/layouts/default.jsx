import React from "react";
// 
import LoadingSpinner from '../components/Loader/Loader'

function PageLayout({children}) {
  return true ? (
    <LoadingSpinner />
  ) : (
    <div className="wrapper">{children}</div>
  );
}
export default PageLayout;