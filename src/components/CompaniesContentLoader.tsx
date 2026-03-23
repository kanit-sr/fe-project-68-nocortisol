import { CompanyItem } from "../../interfaces";
import getCompanies from "@/libs/getCompanies";
import CompanyList from "./CompanyList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function CompaniesContentLoader() {
  const session = await getServerSession(authOptions);
  const companiesRes = await getCompanies();
  const companies: CompanyItem[] = companiesRes.data ?? [];

  return <CompanyList companies={companies} isLoggedIn={!!session} />;
}
