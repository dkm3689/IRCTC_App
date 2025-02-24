import React from "react";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
            setUser(user)
        } else {
            console.log("user is not authenticated");
            setLoading(false);
        }
    });

    return () => unsubscribe();

  }, [auth]);

  useEffect(() => {
    if (!user) return;

    console.log("Bookings: ", bookings)

    const fetchBooking = async () => {
      try { 
        const docRef = doc(db, "bookingDetails", user.uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            console.log("No such document!");
            setBookings([]); 
          } else {
            console.log("Fetched data:", docSnap.data());
            setBookings(docSnap.data().bookings || []); 
          }

        // console.log("docSnap", docSnap);
        // setBookings(docSnap.data().bookings || []);
      } catch (error) {
        console.log("error fetching user");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [db, user]);

  return (
    <>
      {loading ? (
        <p> Loading...</p>
      ) : error ? (
        <p> {error} </p>
      ) : bookings.length > 0 ? (
        <ul>
          {bookings.map((booking, index) => (
             <li key={index}> 
             <h3>  Booking# {booking.uid} </h3>
             <p>  Location: {booking.location} </p>
             <p>  Date: {booking.date} </p>
             <p>  Amount: {booking.amount} </p>
         </li>
          ))}
        </ul>
      ) : (
        <p> No bookings </p>
      )}
    </>
  );
};

export default BookingHistory;