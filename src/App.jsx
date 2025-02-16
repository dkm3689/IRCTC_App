import './App.css'
import Home from "./pages/Home/home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ClassBasedExample from "./components/LifeCycleMethods/ClassBasedExample"
import WrapperForExample from './components/LifeCycleMethods/WrapperForExample';
import CustomHookUsage from './components/CustomHookUsage';
import {Toaster} from "react-hot-toast"

function App() {
  
  return (
    <>
      {/* <Home/> */}
      {/* <CustomHookUsage/> */}
      <Toaster position="top-right" />
      {/* <Register/> */}
      {/* <ClassBasedExample/> */}
      {/* <WrapperForExample/> */}
      <Login/>
      {/* <h1> Hello world </h1> */}
    </>
  )
}

export default App;