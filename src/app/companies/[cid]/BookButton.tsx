"use client";

import { useState } from "react";
import addBooking from "@/libs/addBooking";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DATES = [
    { label: "10", month: "May", value: "2022-05-10" },
    { label: "11", month: "May", value: "2022-05-11" },
    { label: "12", month: "May", value: "2022-05-12" },
    { label: "13", month: "May", value: "2022-05-13" },
];

export default function BookButton({
    companyId,
    companyName,
    token,
}: {
    companyId: string;
    companyName: string;
    token: string;
}) {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleBook = async () => {
        if (!selectedDate) {
            alert("Please select a booking date.");
            return;
        }

        try {
            setLoading(true);
            await addBooking(companyId, token, selectedDate);
            alert("Booking successful!");
            setOpen(false);
            router.push("/bookings");
        } catch (err) {
            alert("Failed to create booking. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Book Trigger Button */}
            <button
                onClick={() => setOpen(true)}
                className="bg-primary hover:bg-primary-hover text-white font-bold px-16 py-3 rounded-xl transition-colors"
            >
                Book
            </button>

            {/* Modal Overlay */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-surface border border-surface-border rounded-[2.5rem] p-8 md:p-12 max-w-2xl w-full relative flex flex-col items-center shadow-2xl">

                        {/* Close Button */}
                        <button
                            onClick={() => { setOpen(false); setSelectedDate(null); }}
                            className="absolute top-8 right-8 text-primary hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 14L4 9l5-5" />
                                <path d="M4 9h10.5a5.5 5.5 0 015.5 5.5v.5" />
                            </svg>
                        </button>

                        {/* Headings */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-widest mb-2 mt-4">
                            Book Now
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold text-primary tracking-widest mb-10">
                            {companyName}
                        </h3>

                        {/* Date Cards */}
                        <div className="flex gap-4 md:gap-6 mb-8">
                            {DATES.map((d) => (
                                <button
                                    key={d.value}
                                    onClick={() => setSelectedDate(d.value)}
                                    className={`flex flex-col items-center justify-center w-20 h-24 md:w-24 md:h-28 rounded-2xl transition-all duration-300 cursor-pointer
                                        ${selectedDate === d.value 
                                            ? "bg-primary text-white scale-105 ring-4 ring-primary/30 shadow-lg" 
                                            : "bg-primary/5 text-foreground/50 border border-primary/10 hover:bg-primary hover:text-white hover:scale-105 hover:shadow-md"
                                        }`}
                                >
                                    <span className="text-3xl md:text-4xl font-bold">{d.label}</span>
                                    <span className="text-sm md:text-base font-bold tracking-widest uppercase mt-1">{d.month}</span>
                                </button>
                            ))}
                        </div>

                        {/* Hint */}
                        <p className="text-foreground font-bold text-xs md:text-sm tracking-widest uppercase mb-8 text-center">
                            Select your preferred interview date (May 10–13, 2022)
                        </p>

                        {/* Book Confirm Button */}
                        <button
                            onClick={handleBook}
                            disabled={loading || !selectedDate}
                            className="bg-primary hover:bg-primary-hover disabled:opacity-50 text-white px-16 py-3 rounded-full font-bold text-xl tracking-widest shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 mb-8 cursor-pointer"
                        >
                            {loading ? "Booking..." : "Book"}
                        </button>

                        {/* Note */}
                        <p className="text-foreground/80 text-xs font-bold tracking-widest mb-6 text-center">
                            Your booking can be edited or deleted at a later time.
                        </p>

                        {/* Illustration */}
                        <div className="relative w-24 h-32 md:w-32 md:h-40 -mb-8 md:-mb-12 pointer-events-none">
                            <Image
                                src="/images/resume.svg"
                                alt="Resume illustration"
                                fill
                                className="object-contain"
                            />
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}