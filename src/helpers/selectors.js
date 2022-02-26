export function getAppointmentsForDay(state, day) {
  const findDay = state.days.find(stateDay => stateDay.name === day);

  return findDay ? findDay.appointments.map((app) => state.appointments[app]) : [];
}

export function getInterview(state, interview) {
  let findInterview = null;

  if (interview) {
    findInterview = { ...interview };
  }

  return findInterview ?
    {
      student: findInterview.student,
      interviewer: { ...state.interviewers[findInterview.interviewer] }
    }
    :
    null;
}

export function getInterviewersForDay(state, day) {
  const findDay = state.days.find(stateDay => stateDay.name === day);

  return findDay ? findDay.interviewers.map((id) => state.interviewers[id]) : [];
}