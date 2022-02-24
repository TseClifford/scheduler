import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss";

export default function InterviewerList({ interviewers, setInterviewer, interviewer }) {
  const listItems = interviewers.map((individual) => {
    return (
      <InterviewerListItem
        key={individual.id}
        name={individual.name}
        avatar={individual.avatar}
        selected={individual.id === interviewer}
        setInterviewer={() => setInterviewer(individual.id)}
      />
    )
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listItems}</ul>
    </section>
  );
}