import React, {useState} from 'react'
// import ClassBasedExample from './ClassBasedExample'
import FunctionalBasedExample from './FunctionalBasedExample'

const WrapperForExample = () => {

  const [ showComponent, setShowComponent ] = useState(true);

  return (
    <>
        <div>WrapperForExample</div>
        <button onClick={ () => setShowComponent((prevState) => !prevState) } > Toggle Component visibility </button>
        { showComponent ? <FunctionalBasedExample/> : <></>}
    </>
  );

};

export default WrapperForExample