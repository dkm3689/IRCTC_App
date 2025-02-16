import React, {useState, useEffect} from 'react'
import Navbar from "../../components/Navbar/Navbar.jsx"
import "./Home.css"
import trainData from "../../trainData.json"
import TrainCard from "../../components/TrainCard/TrainCard.jsx"
import TrainList from "../../components/TrainList/TrainList.jsx"
import useForm from "../../hooks/useForm.jsx"

const Home = () => {
 
  const [formData, handleChange] = useForm({
    toStation: '',
    fromStation: '',  
    date: ''
 } );

  const [trainList, setTrainList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    setIsLoading(true);
    // setTrainList(formData);
    // const toStation = document.getElementById('toStation').value;
    // const fromStation = document.getElementById('fromStation').value;
    // const date = document.getElementById('dateInput').value;
    // if(!toStation || !fromStation || !date){
    //   alert("Please fill the station")
    // }
  }

  //
  useEffect(() => {
    console.log("inside useEffect");
    setTimeout(() => {
      setTrainList(trainData);
      setIsLoading(false);
    }, 2000)

  }, [isLoading, formData]);

  return (
    <>
      <div className="homepage">

        <Navbar/>
        {/* <div>Home</div> */}
        
        <div className="heading">
          <h2> Book Your Tickets </h2>
        </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fromStation"> From </label>
          <input  type="text" 
                  placeholder="Enter Departure Station" 
                  id="fromStation" 
                  onChange={handleChange}
                  value={formData.fromStation}
                  />  
        </div>

        <div className="form-group">
          <label htmlFor="toStation" > To </label>
          <input  type="text" 
                  placeholder="Enter Arrival Station" 
                  id="toStation" 
                  onChange={handleChange}  //captures the input and sets the value to state
                  value={formData.toStation}
                  />
        </div>

        <div className="form-group">
          <label htmlFor="date" > Date </label>
          <input  type="date" 
                  placeholder="dd-mm-yyyy" 
                  id="date"
                  onChange={handleChange}
                  value={formData.date}
                  />
        </div>

        <div className="form-group">
          <button> Search Trains </button>
        </div>
      </form>
      <h2> Available Trains: </h2>
      <TrainList/>
      </div>
    </>
  )
}

export default Home