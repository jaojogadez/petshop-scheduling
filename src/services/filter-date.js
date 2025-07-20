import { updateHourSelect } from "../modules/form/hours-load.js";

const dateInput = document.querySelector("#date");

dateInput.addEventListener("change", () => {
  updateHourSelect(dateInput.value);
});

document.addEventListener("DOMContentLoaded", () => {
  updateHourSelect(dateInput.value);
});
