import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import AdminBookings from "@/components/AdminBookings";
import UserBookings from "@/components/UserBookings";
import { redirect } from "next/navigation";
import getBookings from "@/libs/getBookings";

export default async function BookingsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (session.user.role === "admin") {
    const bookings = await getBookings(session.user.token);
    return <AdminBookings bookings={bookings.data}/>;
  }

  const bookings = await getBookings(session.user.token);
  return <UserBookings bookings={bookings.data}/>;
}