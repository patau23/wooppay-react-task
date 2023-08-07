import React, { useState, useEffect } from "react";
//
import "./styles.scss";
//

function ServiceCard({ service, onBtnClick }) {
  return (
    <div className="card">
      <div className="card__row">
        <img
          src={service.picture_url || "src/assets/img/service-stock-image.jpg"}
          alt="service-logo"
          className="card__image"
        />
      </div>
      <div className="card__row card__text-holder">
        <header className="card__header">
          <a className="card__site" href={service.site} target="_blank">
            {service.site}
          </a>
          <p className="card__title">{service.title}</p>
        </header>
        <footer className="card__footer">
          <span className="card__id-title">ID: {service.id}</span>
          <button className="card__btn" onClick={(e) => onBtnClick(e)}>
            Check
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ServiceCard;
