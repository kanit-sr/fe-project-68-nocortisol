import Link from "next/link";
import { CompanyItem } from "../../interfaces";

interface Props {
  company: CompanyItem;
  isLoggedIn: boolean;
}

export default function CompanyCard({ company, isLoggedIn }: Props) {
  return (
    <Link
      href={`/companies/${company.id}`}
      className="flex flex-col rounded-xl border border-surface-border bg-surface shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
    >
      {/* Top: logo + info side by side */}
      <div className="flex flex-1 p-3 gap-3">
        {/* Logo box */}
        <div className="w-36 h-32 flex-shrink-0 rounded-lg bg-surface flex items-center justify-center text-center text-[11px] text-foreground/45 font-bold tracking-wide overflow-hidden">
          <img
            src={`/images/${company.id}.png`}
            alt={company.name + " logo"}
            className="object-contain w-full h-full"
            onError={e => {
              e.currentTarget.style.display = 'none';
              const fallback = document.createElement('span');
              fallback.className = 'text-foreground/50 font-bold text-center text-sm';
              fallback.innerHTML = `LOGO<br />${company.name}`;
              e.currentTarget.parentNode?.appendChild(fallback);
            }}
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-2 min-w-0">
          {/* Name */}
          <div className="flex items-center gap-1.5 text-base font-bold tracking-wide text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5" />
            </svg>
            <span className="truncate">{company.name}</span>
          </div>

          {/* Full Address (address, district, province, postalcode) */}
          <div className="flex items-start gap-1.5 text-xs font-medium tracking-wide text-foreground/65">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-2">
              {company.address && `${company.address}, `}
              {company.district && `${company.district}, `}
              {company.province && `${company.province} `}
              {company.postalcode && `${company.postalcode}`}
            </span>
          </div>

          {/* Website */}
          {company.website && (
            <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="truncate text-primary hover:underline">{company.website}</span>
            </div>
          )}

          {/* Tel */}
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-foreground/55">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{company.tel}</span>
          </div>
        </div>
      </div>

      {/* Bottom: "Click for more detail" */}
      <div className="text-right px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/45 border-t border-surface-border">
        Click for more details
      </div>
    </Link>
  );
}