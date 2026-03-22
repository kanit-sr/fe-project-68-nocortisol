import Link from "next/link";

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
    return (
        <Link 
            href={pageRef} 
            className="rounded-full px-4 py-2 font-sans text-[15px] font-semibold text-primary transition-all duration-200 ease-in-out hover:bg-primary/10"
        >
            {title}
        </Link>
    );
}