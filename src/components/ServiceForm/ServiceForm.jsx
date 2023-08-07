import React, { useState, useEffect } from "react";
//
import "./styles.scss";
//

function ServiceForm({ service, isActive, closeForm }) {
  if (!isActive) {
    return null;
  }

  return (
    <form className="search-form">
      <header className="search-form__header">
        <h1 className="search-form__title">Форма отправки "{service.title}"</h1>
        <button className="search-form__close-form-btn close-btn" onClick={(e) => closeForm(e)}>
          <img
            className="close-btn__icon"
            src="src/assets/img/close-icon.png"
            alt=""
          />
        </button>
      </header>
      <br />
      <div className="search-form__content">
        {service?.fields.map((field) => {
          if (field.hidden) {
            return null;
          }
          let mask = field.mask
            ? "(s*)?(+)?([- _():=+]?d[- _():=+]?){10,14}(s*)?"
            : "";
          switch (field.type) {
            case "string":
              return (
                <div>
                  <label
                    className="search-form__input-label"
                    htmlFor={field.name}
                  >
                    {field.title}
                  </label>
                  <input
                    className="search-form__input search-form__input_string"
                    type="text"
                    pattern={mask}
                    name={field.name}
                    readOnly={field.readonly}
                  />
                </div>
              );
            case "number":
              return;
            case "amount":
              return (
                <div className="search-form__item">
                  <label
                    className="search-form__input-label"
                    htmlFor={field.name}
                  >
                    {field.title}
                  </label>
                  <input
                    className="search-form__input search-form__input_amount"
                    type="number"
                  />
                </div>
              );
            default:
              return;
          }
        })}
      </div>
    </form>
  );
}

export default ServiceForm;
