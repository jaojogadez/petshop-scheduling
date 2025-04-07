import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDates = document.querySelectorAll("input[type='date']");

const todayDate = dayjs(new Date()).format("YYYY-MM-DD");

selectedDates.forEach((date) => {
    date.value = todayDate
    date.min = todayDate
})

form.onsubmit = (event) => {
    event.preventDefault();
    alert("Enviado!")
}