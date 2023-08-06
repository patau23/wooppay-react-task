import React, { useState, useEffect } from "react";
//
import "./styles.scss";
//

function NavigateMenu({
  modal,
  categoryList,
  selectedCategory,
  onCategoryClick,
  closeModal,
}) {
  if (!modal) {
    return null;
  }
  return (
    <div className="modal" onClick={closeModal}>
      <nav className="modal__content menu">
        <div className="menu__section">
          <p className="menu__section-title">Категории: </p>
          <ul className="menu__list">
            {categoryList.map((category, index) => {
              let isActive = selectedCategory.id === category.id;
              return (
                <li
                  className={
                    isActive
                      ? "menu__list-item menu__list-item_selected"
                      : "menu__list-item"
                  }
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    onCategoryClick(category);
                  }}
                >
                  {category.title}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavigateMenu;
