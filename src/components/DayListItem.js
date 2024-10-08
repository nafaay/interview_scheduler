import React from "react";

import "components/DayListItem.scss"

const classNames = require('classnames')
export default function DayListItem(props) {

    const formatSpots = () =>{
        let spotsRemaining = "no spots remaining"
        if(props.spots === 1){
            spotsRemaining = "1 spot remaining"
        }
        if(props.spots > 1){
            spotsRemaining = `${props.spots} spots remaining`
        }
        return spotsRemaining    
    }
    const dayClass = classNames(
        "day-list__item ", 
        {"day-list__item--selected" : props.selected},
        {"day-list__item--full": props.spots === 0 } 
    )
    return (
      <li className={dayClass} onClick={() => props.setDay(props.name)}>
        <h2 className="text--regular">{props.name}</h2> 
        <h3 className="text--light">{formatSpots()}</h3>
      </li>
    );
  }