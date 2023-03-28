import axiosApi from ".";

export const getAllItemApi = () => {
  return axiosApi.get("/item");
};
export const getItembyCategoryApi = (category) => {
  return axiosApi.get(`/item?categoryId=${category}`);
};

export const getSaleItemApi = () => {
  return axiosApi.get("/item?isSale=true");
};
export const getItemDetailApi = (itemId) => {
  return axiosApi.get(`/item?itemId=${itemId}`);
};
export const getItembySearchApi = (keyword) => {
  return axiosApi.get(`/item?name=${keyword}`);
};
export const viewCountApi = (item) => {
  const newItem = {
    view: item.view + 1,
  };
  console.log("newItem", newItem);
  return axiosApi.put(`/item/${item.itemId}`, newItem);
};
1;
