import axiosApi from ".";

export const signInApi = (email) => {
  return axiosApi.get(`/users?email=${email}`);
};
export const signUpAPI = (data) => {
  return axiosApi.post("/users", data);
};
export const createPersionalApi = (dataPersional) => {
  return axiosApi.post("/userItem", dataPersional);
};
export const getPersionalApi = (userId) => {
  console.log("userid", userId);
  return axiosApi.get(`/userItem?userId=${userId}`);
};
export const updatePersonalApi = (newpayment) => {
  console.log("newpayment.userId", newpayment);
  return axiosApi.put(`/userItem/${newpayment.userId}`, newpayment);
};
export const updateCartApi = (newCart) => {
  console.log("newpayment.userId", newCart);
  return axiosApi.put(`/userItem/${newCart.userId}`, newCart);
};
export const getProfileApi = (userId) => {
  return axiosApi.get(`/users?userId=${userId}`);
};
export const updateProfileApi = (profile) => {
  return axiosApi.put(`/users/${profile.userId}`, profile);
};
export const deleteCartApi = (data) => {
  return axiosApi.put(`/userItem/${data.userId}`, data);
};
