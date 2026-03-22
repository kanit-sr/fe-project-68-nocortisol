import Image from "next/image";
import Link from "next/link";
import { BookingItem } from "../../interfaces";

export default function UserBookings({bookings}: {bookings: BookingItem[]}) {


    {/* MOCK UP ONLY */}



  return (
    <main className="relative min-h-screen bg-background flex flex-col justify-start pt-24 pb-12 overflow-hidden">      
    
      {/* Background Illustration */}
      <div className="absolute bottom-0 left-[-10%] md:left-2 md:bottom-[-10%] w-62.5 md:w-112.5 aspect-3/4 opacity-20 md:opacity-80 z-0 pointer-events-none">
        <Image 
          src="/images/file-bundle.svg" 
          alt="Woman with Files Illustration"
          fill
          className="object-contain"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-widest uppercase drop-shadow-sm">
            My Sessions
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-primary/80 tracking-widest mt-2">
            2/3
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center">
          
          {/* ==================== CARD 1 ==================== */}
          <div className="bg-background border-2 border-surface-border rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 h-85 w-full max-w-70">
            {/* Top White Area */}
            <div className="flex-1 flex flex-col items-center justify-center text-foreground/40 font-bold text-xl text-center">
              <span>Logo</span>
              <span>Company A</span>
            </div>
            
            {/* Bottom Orange Area */}
            <div className="bg-primary text-white p-5 flex flex-col justify-between h-32.5">
              <div className="text-center">
                <h3 className="font-bold text-lg leading-tight">Company A</h3>
                <span className="text-[11px] text-white/80 font-medium tracking-wide">More information</span>
              </div>
              
              <div className="flex justify-between items-end text-[10px] font-bold tracking-wider uppercase">
                <span>May 10 2022</span>
                <div className="flex gap-3">
                  {/* Edit Icon */}
                  <svg className="w-4 h-4 hover:text-white/70 cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  {/* Delete Icon */}
                  <svg className="w-4 h-4 hover:text-white/70 cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== CARD 2 ==================== */}
          <div className="bg-background border-2 border-surface-border rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 h-85 w-full max-w-70">
            <div className="flex-1 flex flex-col items-center justify-center text-foreground/40 font-bold text-xl text-center">
              <span>Logo</span>
              <span>Company B</span>
            </div>
            
            <div className="bg-primary text-white p-5 flex flex-col justify-between h-32.5">
              <div className="text-center">
                <h3 className="font-bold text-lg leading-tight">Company B</h3>
                <span className="text-[11px] text-white/80 font-medium tracking-wide">More information</span>
              </div>
              
              <div className="flex justify-between items-end text-[10px] font-bold tracking-wider uppercase">
                <span>May 12 2022</span>
                <div className="flex gap-3">
                  <svg className="w-4 h-4 hover:text-white/70 cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <svg className="w-4 h-4 hover:text-white/70 cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== EMPTY / ADD CARD ==================== */}
          <Link href="/companies" className="group bg-background border-2 border-surface-border rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 h-85 w-full max-w-70 cursor-pointer">
            {/* Top Area with question mark */}
            <div className="flex-1 flex items-center justify-center bg-background group-hover:bg-primary/5 transition-colors duration-300">
              <span className="text-7xl text-surface-border font-bold group-hover:text-primary transition-colors duration-300 drop-shadow-sm">?</span>
            </div>
            
            {/* Bottom Orange Area */}
            <div className="bg-primary text-white p-5 flex items-center justify-center h-32.5">
              <h3 className="font-bold text-xl tracking-wider">Book Session</h3>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}