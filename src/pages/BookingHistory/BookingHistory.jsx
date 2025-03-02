import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Navbar from "../../components/Navbar/Navbar.jsx";
import styles from "./BookingHistory.module.css";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchBooking = async () => {
      try {
        const docRef = doc(db, "bookingDetails", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBookings(docSnap.data().bookings || []);
        } else {
          setBookings([]);
        }
      } catch (error) {
        setError("Error fetching bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [user]);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Booking History</h1>

        {loading ? (
          <p className={styles.message}>Loading...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : bookings.length > 0 ? (
          <ul className={styles.bookingList}>
            {bookings.map((booking, index) => (
              <li key={index} className={styles.bookingCard}>
                <h2>Booking # {booking.bookingId}</h2>
                <p><strong>Location:</strong> {booking.from}</p>
                <p><strong>Amount:</strong> ${booking.fare * booking.passengers}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.message}>No bookings found.</p>
        )}
      </div>
    </>
  );
};

export default BookingHistory;