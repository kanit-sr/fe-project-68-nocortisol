"use client"
import removeBooking from "@/libs/removeBooking";
import { BookingItem, BookingResponse } from "../../../interfaces";
import { useState } from "react";

export default function BookingList({bookingsResponse, adminToken}: {bookingsResponse: BookingResponse, adminToken: string}) {
    
    const [bookings, setBookings] = useState<BookingItem[]>(bookingsResponse.data);
    const [bookingCount, setBookingCount] = useState<number>(bookingsResponse.count);

    return (
        <div className="text-xl font-bold items-center flex flex-col text-center">
          <h3 className="text-2xl">Bookings ({ bookingCount }):</h3>
          {
            bookings.map((booking) => (
              <div key={ booking.id } className="text-xl font-bold" onClick={ (e) => {
                e.stopPropagation();
                removeBooking(booking.id, adminToken);

                bookings.splice(bookings.indexOf(booking), 1);
                setBookings([...bookings]);
                setBookingCount(bookingCount - 1);
              }}>
                { booking.bookingDate + " | " + booking.company.name + " | " + booking.user.name + " | id(" + booking.id + ")"}
              </div>
            ))
          }
        </div>
    )
}