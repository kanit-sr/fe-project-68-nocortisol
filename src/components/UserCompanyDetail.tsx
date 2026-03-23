"use client"
import { CompanyItem } from "../../interfaces";
import BookButton from "../app/companies/[cid]/BookButton";
import Link from "next/link";

export default function UserCompanyDetail({
  company,
  token
}: {
  company: CompanyItem,
  token?: string
}) {
  return (
    <>
      {/* your existing UI unchanged */}

      <div className="flex justify-center mt-4">
        {token ? (
          <BookButton companyId={company.id} companyName={company.name} token={token} />
        ) : (
          <p>Please <Link href="/api/auth/login">sign in</Link></p>
        )}
      </div>
    </>
  );
}