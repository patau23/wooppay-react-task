const API = process.env.API_WOOPPAY_URL;
export default {
  getCategories: () => {
    return fetch(`${API}/v1/service-category`);
  },
  getServicesListByCategoryId: (categoryId) => {
    return fetch(`${API}/v1/service?category_id=${categoryId}`);
  },
  getServiceFormByName: (serviceName) => {
    return fetch(`${API}/v1/service/${serviceName}`);
  },
  searchServiceFormByName: (serviceName) => {
    return fetch(`${API}/v1/service/search?name=${serviceName}`);
  },
};
