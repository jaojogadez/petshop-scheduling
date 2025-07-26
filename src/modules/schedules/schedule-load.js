import { apiConfig } from "../../services/api-config.js";

export async function schedulesDay() {
  const response = await fetch(`${apiConfig.baseURL}/schedules`);
  const schedules = await response.json();

  const selectedDate = document.querySelector("#date-header");
  document.querySelectorAll(".period").forEach((ul) => (ul.innerHTML = ""));

  schedules.forEach((schedule) => {
    if (schedule.date != selectedDate.value) {
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <div class="header-item">
            <strong id="hour-strong">${schedule.hour}</strong>
            <p class="m-0">
                <strong class="name-pet">${schedule.pet}</strong> /
                <span class="name-person">${schedule.person}</span>
            </p>
        </div>
        <span class="service-item"> ${schedule.service} </span>
        <span class="remove-item"> Remover agendamento </span>
    `;

    const scheduleHour = parseInt(schedule.hour);
    let ulID = "";

    if (scheduleHour >= 9 && scheduleHour <= 12) {
      ulID = "#period-morning";
    } else if (scheduleHour >= 13 && scheduleHour <= 18) {
      ulID = "#period-afternoon";
    } else {
      ulID = "#period-night";
    }

    document.querySelector(ulID).appendChild(li);
  });
}
