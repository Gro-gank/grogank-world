export const createArrayNumber = (start, end) => {
  const array = [];
  for (let index = start; index <= end; index++) {
    array.push(index);
  }
  return array;
};
export const randomId = () => {
  const id = (Math.random() + 1).toString(36).substring(7);
  return id;
};

export const dayCounting = (from, to) => {
  const dayInConvert = new Date(from);
  const dayOutConvert = new Date(to);
  const days = Math.ceil((dayOutConvert - dayInConvert) / (1000 * 3600 * 24));
  return days;
};
export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const newestFirst = function (array) {
  const newArray = array.sort(
    (a, b) => new Date(b.release) - new Date(a.release)
  );
  return newArray;
};
export const sortView = function (array) {
  const newArray = array.slice(0).sort((a, b) => b.view - a.view);
  return newArray;
};
export const sortRate = function (array) {
  const newArray = array.slice(0).sort((a, b) => b.rate - a.rate);
  return newArray;
};

export const sortHightoLow = function (array) {
  const newArray = array.slice(0).sort((a, b) => b.price - a.price);
  return newArray;
};

export const sortLowtoHigh = function (array) {
  const newArray = array.slice(0).sort((a, b) => a.price - b.price);
  return newArray;
};
export const countItem = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count += 1;
  }
  return count;
};
