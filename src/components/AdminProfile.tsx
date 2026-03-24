import Image from "next/image";
import { UserItem } from "../../interfaces";

interface Props {
  user: UserItem;
}

export default function AdminProfile({ user }: Props) {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

      {/* ── Left: Admin Profile ── */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-widest uppercase mb-10 drop-shadow-sm">
          Admin Profile
        </h1>

        <div className="w-full bg-surface/50 border border-surface-border rounded-3xl p-8 md:p-14 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-[80px_20px_1fr] md:grid-cols-[100px_30px_1fr] gap-y-6 md:gap-y-8 items-center text-lg md:text-xl font-bold">

            <span className="text-primary tracking-widest text-right">Role</span>
            <span className="text-primary/70 text-center">:</span>
            <span className="text-foreground tracking-wide capitalize">{user.role}</span>

            <span className="text-primary tracking-widest text-right">Name</span>
            <span className="text-primary/70 text-center">:</span>
            <span className="text-foreground tracking-wide">{user.name}</span>

            <span className="text-primary tracking-widest text-right">Email</span>
            <span className="text-primary/70 text-center">:</span>
            <span className="text-foreground tracking-wide break-all">{user.email}</span>

            <span className="text-primary tracking-widest text-right">Tel</span>
            <span className="text-primary/70 text-center">:</span>
            <span className="text-foreground tracking-wide">{user.tel}</span>

          </div>
        </div>

        {/* Illustration */}
        <div className="mt-auto relative w-62.5 md:w-100 h-62.5 md:h-87.5 opacity-90 pointer-events-none">
          <Image
            src="/images/people-stance.svg"
            alt="Admin illustration"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* ── Right: Create Company (UI only) ── */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-widest uppercase mb-10 drop-shadow-sm">
          Create Company
        </h1>

        <div className="w-full bg-surface/50 border border-surface-border rounded-3xl p-8 md:p-14 shadow-xl backdrop-blur-sm flex flex-col gap-5">

          {[
            { label: "Name", type: "text" },
            { label: "Description", type: "text" },
            { label: "Website", type: "text" },
            { label: "Telephone number", type: "tel" },
            { label: "Address", type: "text" },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-1">
              <label className="text-foreground font-bold text-sm md:text-base tracking-widest">
                {field.label}
              </label>
              <input
                type={field.type}
                className="w-full border border-primary rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          ))}

          {/* Upload Logo */}
          <div className="flex flex-col items-center gap-2 pt-1">
            <span className="text-foreground font-bold text-sm md:text-base tracking-widest">
              Upload Logo
            </span>
            <div className="w-10 h-10 border border-primary rounded-lg flex items-center justify-center text-primary cursor-pointer hover:bg-primary-light transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
          </div>

          {/* CREATE button */}
          <button
            type="button"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold tracking-widest uppercase text-sm py-3 rounded-lg transition-colors mt-2"
          >
            CREATE
          </button>

        </div>
      </div>

    </div>
  );
}