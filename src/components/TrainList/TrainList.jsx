import React, { Component } from 'react'
import trainData from "../../trainData.json"
import TrainCard from "../TrainCard/TrainCard"

export default class TrainList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trains: [],
            isLoading: true,
            error: true
        }
    }

    componentDidMount() {
        fetch("url")
            .then((res) => res.json())
            .then((data) => this.setState({ trains: data, isLoading: false}) )
            .catch((err) => this.setState({ error: err, isLoading:false}) )
            .finally(() => this.setState({ trains: trainData, isLoading: false, error: null } ) )
    }

  componentWillUnmount() {
        console.log("componentwillunmount is working");
  }


  render() {
    const {trains, isLoading, error} = this.state;
    return (
      <>
      {isLoading && <p> Loading... </p> }
        <div>
            {trainData.map((train) => 
                <TrainCard train={train} />
            )}
        </div>
      </>
    )
  }
}