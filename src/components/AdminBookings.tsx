"use client"
import { useState } from "react";
import { BookingResponse, BookingItem } from "../../interfaces";
import UpdateBookingPanel from "@/components/modals/UpdateBookingPanel";
import DeleteBookingPanel from "@/components/modals/DeleteBookingPanel";
import deleteBooking from "@/libs/deleteBooking";
import updateBooking from "@/libs/updateBooking";

export default function AdminBookings({bookingsResponse, adminToken}: {bookingsResponse: BookingResponse, adminToken: string}) {
  
    const [searchQuery, setSearchQuery] = useState("");
    const [bookings, setBookings] = useState<BookingItem[]>(bookingsResponse?.data || []);
    const [updatingBooking, setUpdatingBooking] = useState<BookingItem | null>(null);
    const [deletingBooking, setDeletingBooking] = useState<BookingItem | null>(null);


    const handleDelete = (e: React.MouseEvent, id: string, token: string) => {
        e.stopPropagation();
        deleteBooking(id, token);
        setBookings((prev) => prev.filter((booking) => booking.id !== id));
    };

    const handleUpdate = async (e: React.MouseEvent, id: string, token: string, date: string) => {
        e.stopPropagation();
        updateBooking(id, token, date);
        setBookings((prev) => prev.map((booking) => booking.id === id ? {...booking, bookingDate: date} : booking));
    }

    const filteredBookings = bookings.filter((booking) => {
        const query = searchQuery.toLowerCase();
        const userName = (booking.user?.name || "Unknown User").toLowerCase();
        const companyName = (booking.company?.name || "Unknown Company").toLowerCase();
        const bookingDate = (new Date(booking.bookingDate)).toLocaleDateString();
        
        return userName.includes(query) || companyName.includes(query) || bookingDate.includes(query);
    });

    return (
        <main className="min-h-screen bg-background pt-24 pb-12 px-6">
            <div className="w-full max-w-5xl mx-auto space-y-8">
                
                {/* Header & Search Bar Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-3xl font-bold text-foreground tracking-tight">
                        All {filteredBookings.length} Bookings
                    </h1>
                
                    <div className="w-full md:w-96 relative">
                        <input 
                        type="text" 
                        placeholder="Search by user, company, or date..." 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        className="w-full pl-4 pr-10 py-3 rounded-lg border-2 border-surface-border bg-surface text-foreground focus:border-primary focus:outline-none transition-colors shadow-sm"
                        />
                        <span className="absolute right-3 top-3 text-surface-border font-bold">
                        ⌕
                        </span>
                    </div>
                </div>

                {/* Minimal Booking Cards List */}
                <div className="flex flex-col gap-4">

                {
                    filteredBookings.map((booking) => (
                        <div key={booking.id} className="bg-surface border border-surface-border rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                            
                            {/* Booking Details */}
                            <div className="flex flex-col">
                                <span className="font-bold text-lg text-foreground">{booking.user?.name || "Unknown User"}</span>
                                <span className="text-sm text-foreground/60 font-medium">Interviewing with: <strong className="text-primary">{booking.company?.name || "Unknown Company"}</strong></span>
                                <span className="text-xs text-foreground/50 mt-1">{ (new Date(booking.bookingDate)).toLocaleDateString() || "Unknown Date"}</span>
                            </div>

                            {/* Admin Action Buttons */}
                            <div className="flex gap-3 w-full md:w-auto">
                                <button className="flex-1 md:flex-none px-4 py-2 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-bold text-sm transition-colors cursor-pointer"
                                    onClick={(e) => setUpdatingBooking(booking)}
                                >
                                    Update
                                </button>
                                <button className="flex-1 md:flex-none px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold text-sm transition-colors cursor-pointer shadow-sm"
                                    onClick={(e) => setDeletingBooking(booking)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
                </div>

            </div>
            {
                (updatingBooking !== null) && (
                <UpdateBookingPanel 
                    companyName={updatingBooking.company?.name || "Unknown Company"} 
                    oldDate={updatingBooking.bookingDate}  
                    onClose={() => setUpdatingBooking(null)} 
                    onUpdate={(e, date) => { handleUpdate(e, updatingBooking.id, adminToken, date); setUpdatingBooking(null); }}
                />)
            }

            {   
                (deletingBooking !== null) && (
                <DeleteBookingPanel 
                    booking={deletingBooking} 
                    onClose={() => setDeletingBooking(null)} 
                    onDelete={(e) => { handleDelete(e, deletingBooking.id, adminToken); setDeletingBooking(null); }}
                />)
            }

        </main>
    );    
}