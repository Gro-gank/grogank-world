import axiosApi from ".";

export const getGernebyCategoryApi = (category) => {
  return axiosApi.get(`/category?genre=${category}`);
};
