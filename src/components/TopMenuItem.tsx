import Link from "next/link";
import React from "react";

export default function TopMenuItem({ title, pageRef, icon }: { title: string, pageRef: string, icon: React.ReactElement }) {
    return (
        <Link 
            href={pageRef} 
            className="flex items-center justify-center gap-2 rounded-full px-3 py-2 font-sans text-[15px] font-semibold text-primary transition-all duration-200 ease-in-out hover:bg-primary/10 whitespace-nowrap"
        >
            {icon}
            {title}
        </Link>
    );
}