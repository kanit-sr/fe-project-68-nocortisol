"use client"
import deleteCompany from "../libs/deleteCompany";
import Link from "next/link";
import { CompanyItem } from "../../interfaces";
import UserCompanyDetail from "./UserCompanyDetail";

export default function AdminCompanyDetail({
  company,
  adminToken
}: {
  company: CompanyItem;
  adminToken?: string;
}) {

  const handleDelete = async () => {
    if (!adminToken) return;
    await deleteCompany(company.id, adminToken);
    window.location.href = "/companies";
  };

  return (
    <UserCompanyDetail
      company={company}
      showBooking={false}
      footerActions={
        <>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Delete
          </button>

          <Link href={`/companies/update/${company.id}`}>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold">
              Update
            </button>
          </Link>
        </>
      }
    />
  );
}