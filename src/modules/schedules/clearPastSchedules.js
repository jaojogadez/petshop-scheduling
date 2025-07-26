import { apiConfig } from "../../services/api-config.js";
import dayjs from "dayjs";

export async function clearPastSchedules() {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const schedules = await response.json();

    const today = dayjs().startOf("day");

    for (const schedule of schedules) {
      const scheduleDay = dayjs(schedule.date, "YYYY-MM-DD");

      if (scheduleDay.isBefore(today)) {
        await fetch(`${apiConfig.baseURL}/schedules/${schedule.id}`, {
          method: "DELETE",
        });
        console.log(`Agendamento ${schedule.id} removido com sucesso!`);
      }
    }
  } catch (error) {
    console.log("Erro ao limpar agendamentos: ", error);
  }
}
