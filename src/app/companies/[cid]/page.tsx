import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getCompany from "@/libs/getCompany";
import { CompanyItem } from "../../../../interfaces";
import BookButton from "./BookButton";
import Link from "next/link";

export default async function CompanyDetailPage({ params }: { params: { cid: string } }) {
    const session = await getServerSession(authOptions);
    const company: CompanyItem = await getCompany(params.cid);

    return (
        <main className="relative min-h-screen bg-background flex flex-col items-center pt-24 pb-12">

            <h1 className="text-2xl font-bold text-primary tracking-widest mb-6">
                Company Detail
            </h1>

            <div className="bg-surface rounded-2xl shadow-md w-[90%] max-w-4xl p-8 relative border border-surface-border">

                {/* Back Button */}
                <Link
                    href="/companies"
                    className="absolute top-5 right-5 text-primary text-2xl hover:text-primary-hover transition-colors"
                    title="Back"
                >
                    ↩
                </Link>

                {/* Top Section: Logo + Info */}
                <div className="flex flex-row gap-8 mb-6">
                    <div className="w-48 h-40 bg-surface-border rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-foreground/50 font-bold text-center text-sm">
                            LOGO<br />{company.name}
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 justify-center">

                        {/* Name */}
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 21h18"/>
                                <path d="M5 21V7l7-4 7 4v14"/>
                                <path d="M9 10h.01"/>
                                <path d="M15 10h.01"/>
                            </svg>
                            <span className="text-base font-medium text-foreground">{company.name}</span>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10z"/>
                                <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path d="M5 11a7 7 0 0 1 14 0"/>
                                <path d="M12 21v-2"/>
                            </svg>
                            <span className="text-base text-foreground">
                                {company.address}, {company.district}, {company.province} {company.postalcode}
                            </span>
                        </div>

                        {/* Website */}
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 5h18v12H3z"/>
                                <path d="M3 9h18"/>
                                <path d="M12 17v4"/>
                                <path d="M8 21h8"/>
                            </svg>
                            <a
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base text-primary hover:text-primary-hover hover:underline"
                            >
                                {company.website}
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
                                <path d="M8 6h8"/>
                                <path d="M8 10h8"/>
                                <path d="M12 18h.01"/>
                            </svg>
                            <span className="text-base text-foreground">{company.tel}</span>
                        </div>

                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <path d="M14 2v6h6"/>
                            <path d="M8 13h8"/>
                            <path d="M8 17h8"/>
                        </svg>
                        <span className="font-bold text-base text-foreground">Description {company.name}</span>
                    </div>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                        {company.description}
                    </p>
                </div>

                {/* Company Pictures */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="bg-surface-border rounded-xl h-44 flex items-center justify-center"
                        >
                            <span className="text-foreground/50 font-bold text-center text-sm">
                                {company.name}<br />Picture
                            </span>
                        </div>
                    ))}
                </div>

                <hr className="border-surface-border my-4" />

                {/* Book Button */}
                <div className="flex justify-center mt-4">
                    {session ? (
                        <BookButton companyId={company.id} companyName={company.name} token={session.user.token} />
                    ) : (
                        <p className="text-foreground/40 text-sm">
                            Please{" "}
                            <Link href="/api/auth/login" className="text-primary hover:text-primary-hover hover:underline font-semibold">
                                sign in
                            </Link>{" "}
                            to book an interview session.
                        </p>
                    )}
                </div>

            </div>
        </main>
    );
}