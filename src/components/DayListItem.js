import React from "react";
import classNames from "classnames";

import "./DayListItem.scss";

export default function DayListItem(props) {
  let dayClass = classNames(
    "day-list__item",
    { "day-list__item--selected": props.selected },
    { "day-list__item--full": !props.spots }
  );

  // Conditional rendering based on number of spots calculation
  const formatSpots = (numSpots) => {
    if (numSpots === 0) {
      return "no spots remaining";
    }
    if (numSpots === 1) {
      return `${numSpots} spot remaining`;
    }
    return `${numSpots} spots remaining`;
  };

  return (
    <li
      onClick={props.setDay}
      className={dayClass}
      selected={props.selected}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
