import Image from "next/image";
import TopMenuItem from "@/components/TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu() {
    const session = await getServerSession(authOptions);

    return (
        <div className="bg-surface/90 backdrop-blur-md border-b border-surface-border fixed top-0 h-16 w-full z-50 flex flex-row items-center justify-start px-10 gap-5 shadow-sm transition-all">

            <Link href="/">
                <Image 
                    src={"/img/logo.png"}
                    className="h-12.5 w-auto cursor-pointer mx-4"
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vh"
                    priority
                />
            </Link>

            <TopMenuItem title="Booking" pageRef="/companies"/>
            <TopMenuItem title="My Sessions" pageRef="/bookings"/>

            <div className="absolute right-0 flex flex-row px-10 gap-6 items-center">

                <TopMenuItem title="Profile" pageRef="/profile"/>

                <div className="flex items-center">
                    {
                        session ? 
                        <Link 
                            href="/api/auth/signout"
                            className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full font-bold text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap"
                        >
                            Sign-Out of {session.user?.name}
                        </Link>
                        : 
                        <Link 
                            href="/api/auth/signin"
                            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full font-bold text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap"
                        >
                            Sign-In
                        </Link>
                    }
                </div>

            </div>

        </div>
    )
}