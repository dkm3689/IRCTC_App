import React from 'react'
import { getAuth } from "firebase/auth"
import {doc, setDoc, getDoc, updateDoc, arrayUnion, getFirestore} from "firebase/firestore"
import useForm from "../../hooks/useForm.jsx"
import { showSuccessToast, showErrorToast, showInfoToast} from '../../util/toast.js'
import styles from "./BookingDetails.module.css"

const BookingDetails = () => {

    const [ formData, handleChange] = useForm({
        location: "",
        date: "",
        amount: "",
    });

    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("inside handlesubmit");
        if(!user) {
            showInfoToast("User not verified");
            return;
        }

        const booking = {
            bookingId: `b${Date.now()}`,
            location: formData.location,
            date: formData.date,
            amount: parseFloat(formData.amount)
        }

        try{
            const userDocSnap = await getDoc(doc(db, "bookingDetails", user.uid ));

            if(!userDocSnap.exists()) {
              await setDoc(doc(db, "bookingDetails", user.uid ), {
                bookings: arrayUnion(booking)
              });
            } else {
              await updateDoc(doc(db, "bookingDetails", user.uid ), {
                bookings: arrayUnion(booking),
              })
            }

            console.log("inside try");
        } catch(e) {
            showErrorToast("Error in saving booking details ")
            console.log("error", e);
        }
        
    }


  return (
    <>
    <div>BookingDetails</div>

    <div className={styles.registerContainer}>
          
          <div className={styles.headingBox}>
            <h2> Booking Details </h2>
          </div>
    
          <form onSubmit={handleSubmit}>

          <div className={styles.inputBox}>
              <label htmlFor="location" className={styles.label}> Location </label>
              <input  type="text" id="location" onChange={handleChange}/>
            </div>


            <div className={styles.inputBox}>
              <label htmlFor="date" className={styles.label}> Date </label>
              <input  type="date" id="date" onChange={handleChange}/>
            </div>
    
            <div className={styles.inputBox}>
              <label htmlFor="amount" className={styles.label}> amount </label>
              <input  type="number" id="amount"  onChange={handleChange}/>
            </div>

              <button> Book Details </button>    
          </form>
    
    </div>
    </>
  );
};

export default BookingDetails