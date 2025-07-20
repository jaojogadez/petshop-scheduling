import { scheduleFetchByDay } from "../schedules/schedule-fetch.js"; // ou o caminho correto

export async function updateHourSelect(dateSelected) {
  try {
    const schedules = await scheduleFetchByDay({ date: dateSelected });

    const select = document.querySelector("#hour");
    const options = select.querySelectorAll("option");

    // Cria um array com os horários já agendados para o dia
    const hoursAgendadas = schedules.map((schedule) => schedule.hour); // ex: ["09:00", "14:00"]

    options.forEach((option) => {
      // Ignora opções sem valor ou não numéricas (ex: "Selecione um horário")
      if (!option.value || isNaN(option.value)) return;

      const hora = `${option.value.padStart(2, "0")}:00`;

      if (hoursAgendadas.includes(hora)) {
        option.disabled = true;
        option.textContent = `${hora} (indisponível)`;
      } else {
        option.disabled = false;
        option.textContent = `${hora}`;
      }
    });

  } catch (error) {
    alert("Erro ao realizar operação ;-;");
    console.log(error);
  }
}
