import React from 'react'
import Navbar from "../Navbar/Navbar.jsx"
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="homepage">

        <Navbar/>
        {/* <div>Home</div> */}
        
        <div className="heading">
          <h2> Book Your Tickets </h2>
        </div>

        <div>
          <label className="from"> From </label>
          <input  type="text" placeholder="Enter Departure Station" />
        </div>

        <div>
          <label for="toInput" className="To"> To </label>
          <input  type="text" placeholder="Enter Arrival Station" id="toInput" />
        </div>

        <div>
          <label className="Date"> Date </label>
          <input  type="date" placeholder="dd-mm-yyyy" />
        </div>


        <div>
          <button> Search Trains </button>
        </div>

      </div>
    </>
  )
}

export default Home