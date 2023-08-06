import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

function NotFoundPage() {
  return (
    <div>
      <Link to={"/"}>go back</Link>
      <h1>404</h1>
      <h3>page not found</h3>
    </div>
  );
}

export default NotFoundPage;
