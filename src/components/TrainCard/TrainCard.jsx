import React from 'react'
import "./TrainCard.css"
import {useNavigate} from "react-router-dom";

const TrainCard = ({train}) => {

  const navigate = useNavigate();

  const proceedToBooking = (train) => {
    navigate("/booking", {state:{train}})
  }

  return (
    <>
        <div className="train-card">
            <div>{train.name}</div>
            <p> From: {train.from} </p>
            <p> To: {train.to} </p>
            <p> Departure Time: {train.departureTime} </p>
            <p> Arrival Time: {train.arrivalTime} </p>
            <p> Fare: {train.fare} </p>
            <button onClick={() => proceedToBooking(train)}> Book Now </button>
        </div>
    </>
  )
}

export default TrainCard