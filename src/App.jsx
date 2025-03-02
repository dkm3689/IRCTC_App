import "./App.css";
import Home from "./pages/Home/home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ClassBasedExample from "./components/LifeCycleMethods/ClassBasedExample";
import WrapperForExample from "./components/LifeCycleMethods/WrapperForExample";
import CustomHookUsage from "./components/CustomHookUsage";
import BookingDetails from "./pages/BookingDetails/BookingDetails.jsx";
import BookingHistory from "./pages/BookingHistory/BookingHistory.jsx";
import Private from "./components/Private/Private.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "booking",
      element: <BookingDetails />,
      // element: <Private> <BookingDetails/> </Private>
    },
    {
      path: "history",
      //  element: <Private> <BookingHistory/> </Private>
      element: <BookingHistory />,
    },
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        {/* <Home/> */}
        {/* <CustomHookUsage/> */}
        <div style={{ position: "absolute", top: "50px", right: "10px" }}>
          <Toaster position="top-right" />
        </div>
        {/* <BookingDetails/>
      <BookingHistory/> */}
        {/* <Register/> */}
        {/* <ClassBasedExample/> */}
        {/* <WrapperForExample/> */}
        {/* <Login/> */}
        {/* <h1> Hello world </h1> */}
      </AuthProvider>
    </>
  );
}

export default App;
