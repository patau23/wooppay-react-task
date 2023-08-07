import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function SearchPage({}) {
  const params = useParams();
  return <div>{params.name}</div>;
}

export default SearchPage;
