import React, {useEffect, useState} from 'react'

const FunctionalBasedExample = () => {

    const [response, setResponse] = useState({
        photo: null,
        loading: true,
        error: null
});

    //1. Mounting phase
    useEffect (() => {
        console.log("mounting phase is running");
        fetch("https://jsonplaceholder.typicode.com/photos/1")
        .then((response) => response.json)
        .then((data) => this.setResponse({ photo: data.photo, loading: false  }))
        .catch((err) => this.setResponse({ error: err.message, loading: false }))
    }, [])

 
    //2. Updation [dependency1, dependency2]
    useEffect (() => {
        console.log("Updating phase is running");
    }, [response])


    //3. Unmounting
    useEffect (() => {
        return() => {
            console.log("Unmounting phase is running");
        }
       
    }, [response])


  return (
    <>
      <div>FunctionalBasedExample</div>
      {response.loading ? <p> Loading... </p> :  response.photo.title}
    </>
  )
}

export default FunctionalBasedExample