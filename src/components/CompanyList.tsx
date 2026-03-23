"use client";

import { useState } from "react";
import { CompanyItem } from "../../interfaces";
import CompanyCard from "./CompanyCard";

interface Props {
  companies: CompanyItem[];
  isLoggedIn: boolean;
}

export default function CompanyList({ companies, isLoggedIn }: Props) {
  const [query, setQuery] = useState("");

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.province?.toLowerCase().includes(query.toLowerCase()) ||
    c.district?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="flex justify-center mb-5">
        <div className="relative w-full max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Find company"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Order List label */}
      <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        Order List
      </div>

      {/* Company Cards */}
      <div className="flex flex-col gap-4">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-16">No companies found.</p>
        ) : (
          filtered.map((company) => (
            <CompanyCard key={company.id} company={company} isLoggedIn={isLoggedIn} />
          ))
        )}
      </div>
    </>
  );
}