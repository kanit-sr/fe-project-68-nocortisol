import Link from "next/link";
import { CompanyItem } from "../../interfaces";

interface Props {
  company: CompanyItem;
  isLoggedIn: boolean;
}

export default function CompanyCard({ company, isLoggedIn }: Props) {
  return (
    <div className="flex rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
      {/* Left: Logo placeholder */}
      <div className="w-44 flex-shrink-0 flex items-center justify-center bg-white border-r border-gray-200 py-6">
        <div className="text-gray-400 text-sm text-center px-3">
          <div className="w-16 h-16 rounded bg-gray-100 mb-1 mx-auto flex items-center justify-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" />
            </svg>
          </div>
          Logo<br />{company.name}
        </div>
      </div>

      {/* Right: Info — orange background */}
      <div className="flex-1 bg-orange-400 p-5 flex flex-col gap-1.5 relative">
        {/* Name */}
        <div className="flex items-center gap-2 text-white font-bold text-base">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5" />
          </svg>
          {company.name}
        </div>

        {/* Description */}
        {company.description && (
          <div className="flex items-start gap-2 text-white text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="leading-relaxed line-clamp-3">{company.description}</span>
          </div>
        )}

        {/* Website */}
        {company.website && (
          <div className="flex items-center gap-2 text-white text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
            {company.website}
          </div>
        )}

        {/* Tel */}
        <div className="flex items-center gap-2 text-white text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {company.tel}
        </div>

        {/* Address */}
        <div className="flex items-center gap-2 text-white text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {company.address}
        </div>

        {/* Book button */}
        <Link
          href={isLoggedIn ? `/companies/${company.id}/book` : "/auth/login"}
          className="absolute bottom-4 right-4 bg-white text-orange-500 font-semibold text-sm px-5 py-1.5 rounded hover:bg-orange-50 transition-colors"
        >
          Book
        </Link>
      </div>
    </div>
  );
}