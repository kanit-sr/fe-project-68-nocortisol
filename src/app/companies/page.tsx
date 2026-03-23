import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getCompanies from "@/libs/getCompanies";
import { CompanyItem } from "../../../interfaces";
import CompanyList from "@/components/CompanyList";

export default async function CompaniesPage() {
  const session = await getServerSession(authOptions);
  const companiesRes = await getCompanies();
  const companies: CompanyItem[] = companiesRes.data ?? [];

  return (
    <main className="min-h-screen bg-background">
      <div className="text-center pt-24 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-widest uppercase">
          Company Lists
        </h1>
        <p className="mt-2 text-sm font-bold tracking-widest uppercase text-foreground/90">
          Participating Companies in Online Job Fair 2022
        </p>
        <p className="text-sm font-semibold tracking-wide text-foreground/70">
          Explore leading companies and discover career opportunities waiting for you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <CompanyList companies={companies} isLoggedIn={!!session} />
      </div>
    </main>
  );
}