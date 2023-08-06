import React, { useState, useEffect, useCallback } from "react";
//
import api from "../../services/api";
import "./styles.scss";
import Header from "../../components/Header/Header.jsx";
import NavigateMenu from "../../components/NavigateMenu/NavigateMenu.jsx";
//

function HomePage({}) {
  const [state, setState] = useState({
    loading: false,
    modal: true,
    categoryList: [],
    selectedCategory: null,
    serviceList: [],
    selectedService: null,
  });

  const [formState, setFormState] = useState({});

  const getCategories = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true }));
    await api.wooppayApi
      .getCategories()
      .then((res) => res.json())
      .then((res) => {
        setState((prev) => ({
          ...prev,
          categoryList: res,
          selectedCategory: res[0],
          loading: false,
        }));
      });
  }, []);

  const getCategoryServices = async () => {
    setState((prev) => ({ ...prev, loading: true }));
    if (state.selectedCategory !== null) {
      await api.wooppayApi
        .getServicesListByCategoryId(state.selectedCategory.id)
        .then((res) => res.json())
        .then((res) => {
          setState((prev) => ({
            ...prev,
            serviceList: res,
            selectedService: res[0],
            loading: false,
          }));
        });
    } else {
      setState((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    getCategoryServices();
  }, [state.selectedCategory]);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavigateMenu
        modal={state.modal}
        categoryList={state.categoryList}
        selectedCategory={state.selectedCategory || state.categoryList[0]}
        onCategoryClick={(value) => {
          setState((prev) => ({
            ...prev,
            selectedCategory: value,
            modal: false,
          }));
        }}
        closeModal={() => setState((prev) => ({ ...prev, modal: false }))}
      />
      <Header
        onCatalogClick={() => setState((prev) => ({ ...prev, modal: true }))}
      />
      <main className="">
        {state.serviceList.map((service, index) => {
          return (
            <li className="" key={"service" + index}>
              {service.name}
            </li>
          );
        })}
      </main>
    </>
  );
}

export default HomePage;
