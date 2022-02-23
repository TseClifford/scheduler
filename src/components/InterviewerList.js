import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";

export default function InterviewerList({ interviewers, setInterviewer, interviewer }) {
  const listItems = interviewers.map((person) => {
    return (
      <InterviewerListItem
        id={person.id}
        name={person.name}
        avatar={person.avatar}
        selected={person.id === interviewer ? true : false}
        setInterviewer={setInterviewer}
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