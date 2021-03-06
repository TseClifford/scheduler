import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // Reassign variable to change inner day value in state without mutation
  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  // Returns a new days array with updated spots given state and new appointments object
  function updateSpots(state, appointments) {
    const indexOfDay = state.days.findIndex(
      (dayItem) => dayItem.name === state.day
    );
    const dayAppointments = state.days[indexOfDay].appointments;
    let spots = 0;

    dayAppointments.forEach((id) => {
      if (appointments[id].interview === null) {
        spots++;
      }
    });

    const updateDayObj = { ...state.days[indexOfDay], spots }; // Update spots in day
    const updateDaysArr = [...state.days]; // Spread days array to new array
    updateDaysArr[indexOfDay] = updateDayObj; // Update existing day with new updated spots day

    return updateDaysArr;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = updateSpots(state, appointments);

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments,
          days,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = updateSpots(state, appointments);

    return axios
      .delete(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments,
          days,
        });
      })
      .catch((err) => {
        throw err;
      });
  }
  return { state, setDay, bookInterview, cancelInterview };
}
