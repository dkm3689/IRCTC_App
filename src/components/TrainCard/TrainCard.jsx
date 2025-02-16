import React from 'react'
import "./TrainCard.css"

const TrainCard = ({train}) => {
  return (
    <>
        <div className="train-card">
            <div>{train.name}</div>
            <p> From: {train.from} </p>
            <p> To: {train.To} </p>
            <p> Departure Time: {train.departureTime} </p>
            <p> Arrival Time: {train.arrivalTime} </p>
            <p> Fare: {train.fare} </p>
            <button> Book Now </button>
        </div>
    </>
  )
}

export default TrainCard