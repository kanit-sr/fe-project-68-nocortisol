import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CompaniesContentLoader from "@/components/CompaniesContentLoader";

function CompaniesLoadingFallback() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-16">
      <LinearProgress color="warning" />
      <div className="py-16 text-center text-foreground/45">
        Loading companies...
      </div>
    </div>
  );
}

export default function CompaniesPage() {
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

      <Suspense fallback={<CompaniesLoadingFallback />}>
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <CompaniesContentLoader />
        </div>
      </Suspense>
    </main>
  );
}