import BookingList from "@/components/test/BookingList";
import addBooking from "@/libs/addBooking";
import getBookings from "@/libs/getBookings";
import getCompanies from "@/libs/getCompanies";
import getUserProfile from "@/libs/getUserProfile";
import userLogIn from "@/libs/userLogIn";

export default async function Test() {

    const companiesJson = await getCompanies();
    const companies = companiesJson.data;

    const adminToken = (await userLogIn("narongdech@example.com", "123456")).token; 
    const admin = await getUserProfile(adminToken);

    const userToken = (await userLogIn("somchai@example.com", "123456")).token; 
    const user = await getUserProfile(userToken);

    addBooking(companies[0].id, adminToken, "2022-05-10");

    const bookingsResponse = await getBookings(adminToken);

    return (
        <main className="flex flex-col gap-[32px] items-center pt-[50px]">
        {
            companies.map((company) => (
            <div key={ company.id } className="flex flex-col items-center">
                <div className="text-4xl font-bold">
                { company.name }
                </div>
                <div className="text-xl font-bold">
                { company.id }
                </div>
            </div>

            ))
        }

        <div className="text-xl font-bold items-center flex flex-col">
            <h2 className="text-2xl">{ admin.data.name }</h2>
            <h2>{ admin.data.email }</h2>
            <h2>{ admin.data.id }</h2>
        </div>

        <div className="text-xl font-bold items-center flex flex-col">
            <h2 className="text-2xl">{ user.data.name }</h2>
            <h2>{ user.data.email }</h2>
            <h2>{ user.data.id }</h2>
        </div>

        <BookingList bookingsResponse={ bookingsResponse } adminToken={ adminToken }/>

        <div className="pb-[50px]"/>

        </main>
    );
}
