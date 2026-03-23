import { CompanyItem } from "../../interfaces";

export default async function getCompany(id: string): Promise<CompanyItem>{
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/companies/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch company");
    }

    return (await response.json()).data;
}