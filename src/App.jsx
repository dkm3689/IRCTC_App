import './App.css'
import Home from "./pages/Home/home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ClassBasedExample from "./components/LifeCycleMethods/ClassBasedExample"
import WrapperForExample from './components/LifeCycleMethods/WrapperForExample';
import CustomHookUsage from './components/CustomHookUsage';
import BookingDetails from "./pages/BookingDetails/BookingDetails.jsx";
import BookingHistory from "./pages/BookingHistory/BookingHistory.jsx";
import Private from "./components/Private/Private.jsx"
import {Toaster} from "react-hot-toast"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
     path: "bookinghistory",
     element: <Private> <BookingHistory/> </Private>
    }
  ]);
  
  return (
    <>
    <RouterProvider router={router}/>
      {/* <Home/> */}
      {/* <CustomHookUsage/> */}
      {/* <Toaster position="top-right" />
      <BookingDetails/>
      <BookingHistory/> */}
      {/* <Register/> */}
      {/* <ClassBasedExample/> */}
      {/* <WrapperForExample/> */}
      {/* <Login/> */}
      {/* <h1> Hello world </h1> */}
    </>
  )
}

export default App;