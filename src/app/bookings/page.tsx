import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import AdminBookings from "@/components/AdminBookings";
import UserBookings from "@/components/UserBookings";
import getBookings from "@/libs/getBookings";

export default async function BookingsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const bookingsResponse = await getBookings(session.user.token);

  if (session.user.role === "admin") {
    return <AdminBookings bookingsResponse={bookingsResponse} adminToken={session.user.token}/>;
  }

  return <UserBookings bookingsResponse={bookingsResponse} userToken={session.user.token}/>;
}