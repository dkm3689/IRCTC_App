import React from "react";
import { getAuth } from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  getFirestore,
} from "firebase/firestore";
import useForm from "../../hooks/useForm.jsx";
import {
  showSuccessToast,
  showErrorToast,
  showInfoToast,
} from "../../utils/toast.js";
import {useLocation} from "react-router-dom"
import styles from "./BookingDetails.module.css";
import Navbar from "../../components/Navbar/Navbar.jsx"

const BookingDetails = () => {

  const location = useLocation();
  const trainInfo = location.state?.train;
  console.log("train data", trainInfo);

  if(!trainInfo) {
    return <h2> No train selected! </h2>
  }

  const [formData, handleChange] = useForm({
    name: trainInfo.name,
    to: trainInfo.to,
    from: trainInfo.from,
    fare: trainInfo.fare,
    passengers: 1
  });

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inside handlesubmit");
    if (!user) {
      console.log("inside if for info toast")
      showInfoToast("User not verified");
      return;
    }

    const booking = {
      bookingId: `b${Date.now()}`,
      ...formData
    };

    try {
      const userDocSnap = await getDoc(doc(db, "bookingDetails", user.uid));

      if (!userDocSnap.exists()) {
        await setDoc(doc(db, "bookingDetails", user.uid), {
          bookings: arrayUnion(booking),
        });
      } else {
        await updateDoc(doc(db, "bookingDetails", user.uid), {
          bookings: arrayUnion(booking),
        });
      }
      showSuccessToast("Booking Created Successfully");
      console.log("inside try of booking details");
    } catch (e) {
      showErrorToast("Error in saving booking details ");
      console.log("error", e);
    }
  };

  return (
    <>
    <Navbar/>

      {!formData.name && <h2> No booking done </h2> }

      <div className={styles.bookingContainer}>
        <div className={styles.headingBox}>
          <h2> Booking Details </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <label htmlFor="name" className={styles.label}>
              {" "}
              Train Name{" "}
            </label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className={styles.inputBox}>
            <label htmlFor="from" className={styles.label}>
              {" "}
              From{" "}
            </label>
            <input type="text" id="from" value={formData.from} onChange={handleChange} />
          </div>

          <div className={styles.inputBox}>
            <label htmlFor="to" className={styles.label}>
              {" "}
              To{" "}
            </label>
            <input type="text" id="to" value={formData.from} onChange={handleChange} />

            <label htmlFor="amount" className={styles.label}>
              {" "}
              Amount{" "}
            </label>
            <input type="number" id="amount" value={formData.fare} onChange={handleChange} />

            <label htmlFor="passengers" className={styles.label}>
              {" "}
              Number of Passengers{" "}
            </label>
            <input type="number" id="passengers" onChange={handleChange} />

          </div>
          <div className={styles.buttonBox}>
            <button> Save Booking </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingDetails;
