import dayjs from "dayjs";
import { apiConfig } from "../../services/api-config.js";

const form = document.querySelector("form");
const dateInput = document.querySelector("#date");
const selectedDates = document.querySelectorAll("input[type='date']");

const todayDate = dayjs(new Date()).format("YYYY-MM-DD");

selectedDates.forEach((date) => {
  date.value = todayDate;
  date.min = todayDate;
});

form.onsubmit = async (event) => {
  event.preventDefault();

  const petName = document.querySelector("#pet-name");
  const personName = document.querySelector("#tutor-name");
  const phoneNumber = document.querySelector("#tutor-phone");
  const service = document.querySelector("#description");
  const date = document.querySelector("#date");
  const hour = document.querySelector("#hour");

  const data = {
    pet: petName.value,
    person: personName.value,
    service: service.value,
    phone: phoneNumber.value,
    date: date.value,
    hour: `${hour.value}:00`,
  };

  await fetch(`${apiConfig.baseURL}/schedules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  form.reset();
};
