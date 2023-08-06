import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//
import SearchLine from "../SearchLine/SearchLine.jsx";
import "./styles.scss";
//

function Header({ onCatalogClick }) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    loading: false,
    inputValue: "",
  });
  const searchService = async (e) => {
    e.preventDefault();
    console.log(state.inputValue);
    navigate(`search/${state.inputValue}`);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          className="header__logo logo"
          src="src/assets/img/Logo.svg"
          alt="logo"
        />
        <button
          className="header__button catalog-button"
          onClick={(e) => onCatalogClick(e)}
        >
          <img
            className="catalog-button__prepend-logo"
            src="src/assets/img/menu.svg"
            alt="menu-logo"
          />
          <span className="catalog-button__title">КАТАЛОГ</span>
        </button>
        <SearchLine
          value={state.inputValue}
          setValue={(value) =>
            setState((prev) => ({
              ...prev,
              inputValue: value,
            }))
          }
          onBtnClick={(e) => searchService(e)}
        />
      </div>
    </header>
  );
}

export default Header;
