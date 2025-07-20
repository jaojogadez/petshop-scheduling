
// import dayjs from "dayjs";
// import { openingHours } from "../../utils/opening-hours.js";
// import { hoursClick } from "./hours-click.js";
  
// export function hoursLoad({ date }) {
//   const opening = openingHours.map((hour) => {
//      // Recupera somente a hora
//     const [scheduleHour] = hour.split(":");
  
//     // Adiciona a hora na date e verificar se é passado
//     const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
  
//     return {
//       hour,
//       available: isHourPast,
//     };

//   });
//   
//  // Renderiza os horários
//   opening.forEach(({ hour, available }) => {
//     const li = document.createElement("li");
//     li.classList.add("hour");
//     li.classList.add(available ? "hour-available" : "hour-unavailable");
//     li.textContent = hour;
//     
//    if (hour === "9:00") {
//       addHourHead("Manhã")
//     } else if (hour === "13:00"){
//       addHourHead("Tarde")
//     } else if (hour === "18:00"){
//       addHourHead("Noite")
//     }
//     
//     $hours.append(li)
//   });

//    hoursClick();
//   
// }

// function addHourHead(title) {
//   const header = document.createElement("li");
//   header.classList.add("hour-period");
//   header.textContent = title
//   $hours.append(header);
// }
