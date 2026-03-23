import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import getUserProfile from "@/libs/getUserProfile";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const user = (await getUserProfile(session.user.token)).data;
  const role = user.role || "User";
  const name = user.name || "Userlnwza";
  const email = user.email || "User@gmail.com";
  const tel = user.tel || "0123456789";

  return (
    <main className="min-h-screen bg-background flex flex-col items-center pt-32 md:pt-40 px-6">
      
      <div className="w-full max-w-3xl flex flex-col items-center z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-widest uppercase mb-10 drop-shadow-sm">
          User Profile
        </h1>

        <div className="w-full bg-surface/50 border border-surface-border rounded-3xl p-8 md:p-14 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-[80px_20px_1fr] md:grid-cols-[100px_30px_1fr] gap-y-6 md:gap-y-8 items-center text-lg md:text-xl font-bold">
            
            <span className="text-primary tracking-widest text-right">Name</span>
            <span className="text-primary/70 text-center">:</span>
            <span className="text-foreground tracking-wide">{name}</span>

            <span className="text-primary tracking-widest text-right">Email</span>
            <span className="text-primary/70 text-center">:</span>
            <span className="text-foreground tracking-wide break-all">{email}</span>

            <span className="text-primary tracking-widest text-right">Tel</span>
            <span className="text-primary/70 text-center">:</span>
            <span className="text-foreground tracking-wide">{tel}</span>

            <span className="text-primary tracking-widest text-right">Role</span>
            <span className="text-primary/70 text-center">:</span>
            <span className="text-foreground tracking-wide capitalize">{role}</span>

          </div>
        </div>

      </div>

      <div className="mt-auto relative w-62.5 md:w-87.5 h-62.5 md:h-87.5 opacity-90 z-0 pointer-events-none mb-8">
        <Image 
          src="/images/working-home.svg" 
          alt="Profile Background Decoration"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

    </main>
  );
}