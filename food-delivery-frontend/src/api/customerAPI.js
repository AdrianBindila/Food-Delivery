import axios from "axios";
let restaurantList = undefined;
async function getRestaurantList() {
  await axios
    .get("http://localhost:8080/api/restaurant")
    .then((res) => {
      restaurantList = res.data;
    })
    .catch((err) => console.log(err));
  return restaurantList;
}
let menu = undefined;
async function getMenu(restaurantName) {
  await axios
    .get("http://localhost:8080/api/restaurant/food", {
      params: {
        restaurantName: restaurantName,
      },
    })
    .then((res) => {
      menu = res.data;
    })
    .catch((err) => console.log(err));
  return menu;
}
async function getOrdersHistory() {
  await axios.get();
}

export { getRestaurantList, restaurantList, menu, getMenu };