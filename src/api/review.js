import axiosApi from ".";

export const addReviewApi = (data) => {
  return axiosApi.post("/rate", data);
};

export const addReviewtoItem = (data) => {
  const id = data.itemId;
  console.log("data.rate", data.rate);
  const lastRate = data.rate;

  const newReview = {
    rate: lastRate,
  };
  return axiosApi.put(`/item/${id}`, newReview);
};
export const getItemReviewApi = (itemId) => {
  return axiosApi.get(`/rate?itemId=${itemId}`);
};
