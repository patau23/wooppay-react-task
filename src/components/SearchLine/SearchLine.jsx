import React from "react";
//
import "./styles.scss";
//

function SearchLine({ value, setValue, onBtnClick }) {
  return (
    <form className="search-line">
      <input
        className="search-line__input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите название сервиса ..."
      />
      <button className="search-line__btn" onClick={(e) => onBtnClick(e)}>
        <img
          className="search-line__btn-image"
          src="src/assets/img/search.svg"
          alt="btn-logo"
        />
      </button>
    </form>
  );
}

export default SearchLine;
