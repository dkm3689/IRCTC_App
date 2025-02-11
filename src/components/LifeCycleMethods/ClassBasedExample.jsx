import {Component} from "react";


class ClassBasedExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        console.log("componentDidMount is running");
        fetch("https://jsonplaceholder.typicode.com/photos/1")
            .then((response) => response.json)
            .then((data) => this.setState({ photo: data.photo, loading: false  }))
            .catch((err) => this.setState({ error: err.message, loading: false }))
    }


    componentDidMount() {
        console.log("component will unmount is running");
    }




    render() {
        console.log("render is running");
        const { loading, error, photo} = this.state;
        return (
            <>
                <h1> Class based example </h1>
                { loading ? <h3> Loading...</h3> : photo.title }
            </>

        )
    }


}

export default ClassBasedExample;