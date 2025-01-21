import React from 'react'
import Navbar from "../../components/Navbar/Navbar.jsx"
import "./Home.css"

const Home = () => {

  const handleSearch = () => {
    const toStation = document.getElementById('toStation').value;
    const fromStation = document.getElementById('fromStation').value;
    const date = document.getElementById('dateInput').value;
    if(!toStation || !fromStation || !date){
      alert("Please fill the station")
    }
  }

  return (
    <>
      <div className="homepage">

        <Navbar/>
        {/* <div>Home</div> */}
        
        <div className="heading">
          <h2> Book Your Tickets </h2>
        </div>

        <div>
          <label for="fromStation"  className="from"> From </label>
          <input  type="text" placeholder="Enter Departure Station" id="fromStation" />
        </div>

        <div>
          <label for="toStation" className="To"> To </label>
          <input  type="text" placeholder="Enter Arrival Station" id="toStation" />
        </div>

        <div>
          <label className="Date"> Date </label>
          <input  type="date" placeholder="dd-mm-yyyy" id="dateInput"/>
        </div>


        <div>
          <button onClick={() => handleSearch()}> Search Trains </button>
        </div>

      </div>
    </>
  )
}

export default Home