import { schedulesDay } from "./schedules/schedule-load.js";
import { clearPastSchedules } from "./schedules/clearPastSchedules.js";

document.addEventListener("DOMContentLoaded", function () {
  schedulesDay();
  clearPastSchedules();
});
