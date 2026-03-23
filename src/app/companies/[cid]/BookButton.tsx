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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="bg-background rounded-3xl shadow-2xl w-[90%] max-w-lg p-8 relative flex flex-col items-center border border-surface-border">

                        {/* Close Button */}
                        <button
                            onClick={() => { setOpen(false); setSelectedDate(null); }}
                            className="absolute top-4 right-5 text-primary text-2xl hover:text-primary-hover transition-colors"
                        >
                            ↩
                        </button>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-primary tracking-widest mb-1">Booking</h2>
                        <p className="text-2xl font-bold text-primary tracking-widest mb-6">{companyName}</p>

                        {/* Date Cards */}
                        <div className="flex gap-4 mb-4">
                            {DATES.map((d) => (
                                <button
                                    key={d.value}
                                    onClick={() => setSelectedDate(d.value)}
                                    className={`flex flex-col items-center justify-center w-20 h-24 rounded-2xl font-bold text-white transition-all duration-200
                                        ${selectedDate === d.value
                                            ? "bg-primary-hover scale-105 shadow-lg ring-2 ring-primary"
                                            : "bg-primary hover:bg-primary-hover hover:scale-105"
                                        }`}
                                >
                                    <span className="text-3xl font-extrabold leading-none">{d.label}</span>
                                    <span className="text-base mt-1">{d.month}</span>
                                </button>
                            ))}
                        </div>

                        {/* Hint */}
                        <p className="text-foreground/50 tracking-widest text-sm mb-5">
                            Select your preferred interview date (May 10–13, 2022)
                        </p>

                        {/* Book Confirm Button */}
                        <button
                            onClick={handleBook}
                            disabled={loading || !selectedDate}
                            className="bg-primary hover:bg-primary-hover disabled:opacity-50 text-white font-bold px-16 py-3 rounded-xl transition-colors mb-4"
                        >
                            {loading ? "Booking..." : "Book"}
                        </button>

                        {/* Note */}
                        <p className="text-foreground/50 tracking-widest text-sm mb-4">
                        Your booking can be edited or deleted at a later time.
                        </p>

                        {/* Illustration */}
                        <Image
                            src="/images/resume.svg"
                            alt="Resume illustration"
                            width={140}
                            height={140}
                            className="mt-2"
                        />

                    </div>
                </div>
            )}
        </>
    );
}