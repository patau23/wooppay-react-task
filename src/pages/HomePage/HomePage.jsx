import React, { useState, useEffect, useCallback } from "react";
//
import api from "../../services/api";
import "./styles.scss";
import Header from "../../components/Header/Header.jsx";
import NavigateMenu from "../../components/NavigateMenu/NavigateMenu.jsx";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import ServiceForm from "../../components/ServiceForm/ServiceForm.jsx";
//

function HomePage({}) {
  const [state, setState] = useState({
    loading: false,
    modal: false,
    formStatus: false,
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
          selectedCategory: res[5],
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

  const openForm = (service) => {
    setState((prev) => ({
      ...prev,
      formStatus: true,
      selectedService: service,
    }));
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
      <main className="main">
        <div className="main__wrapper">
          <article
            className={
              state.formStatus
                ? "main__content main__content_minimized"
                : "main__content"
            }
          >
            {state.serviceList.map((service, index) => {
              return (
                <ServiceCard
                  key={"service" + index}
                  service={service}
                  onBtnClick={(e) => openForm(service)}
                />
              );
            })}
          </article>
          <article className="main__form-content">
            <ServiceForm
              isActive={state.formStatus}
              service={state.selectedService}
              closeForm={(e) =>
                setState((prev) => ({
                  ...prev,
                  formStatus: false,
                }))
              }
            />
          </article>
        </div>
      </main>
    </>
  );
}

export default HomePage;
