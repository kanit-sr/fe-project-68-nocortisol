"use client"
import deleteCompany from "../libs/deleteCompany";
import Link from "next/link";
import { CompanyItem } from "../../interfaces";

export default function AdminCompanyDetail({
  company,
  adminToken
}: {
  company: CompanyItem,
  adminToken: string
}) {

  const handleDelete = async () => {
    await deleteCompany(company.id, adminToken);
    window.location.href = "/companies";
  };

  return (
    <div className="bg-surface rounded-2xl shadow-md w-[90%] max-w-4xl p-8 relative border border-surface-border">

      <Link href="/companies" className="absolute top-5 right-5 text-primary text-2xl">
        ↩
      </Link>

      {/* reuse same UI structure */}
      <h2 className="font-bold text-xl mb-4">{company.name}</h2>

      <p className="text-sm text-foreground/60 mb-6">
        {company.description}
      </p>

      {/* Actions */}
      <div className="flex justify-center gap-4">
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
      </div>
    </div>
  );
}