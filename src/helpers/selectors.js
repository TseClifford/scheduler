export function getAppointmentsForDay(state, day) {
  const findDay = state.days.find(stateDay => stateDay.name === day);

  return findDay ? findDay.appointments.map((app) => state.appointments[app]) : [];
}
