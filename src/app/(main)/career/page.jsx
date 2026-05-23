
import Link from "next/link";

export const metadata = {
  title: "The Dragon News | Career",
  description: "The Grate Online News Portal In Bangladesh",
  icons: {
    icon: "/favicon-transparent.png",
    shortcut: "/favicon-transparent.png",
    apple: "/favicon-transparent.png",
  },
};

const CareerPage = () => {
    const openings = [
        {
            title: "Senior News Reporter",
            type: "Full Time",
            location: "Dhaka, Bangladesh",
        },
        {
            title: "Video Content Producer",
            type: "Full Time",
            location: "Remote",
        },
        {
            title: "Social Media Editor",
            type: "Part Time",
            location: "Dhaka, Bangladesh",
        },
        {
            title: "Frontend Engineer (Next.js)",
            type: "Full Time",
            location: "Remote",
        },
    ];
    const perks = [
        "Competitive salary and yearly performance bonus",
        "Flexible working hours and remote-friendly culture",
        "Learning budget for courses and conferences",
        "Modern tools and newsroom innovation projects",
    ];
    const process = ["Apply", "Screening", "Interview", "Offer"];

    return (
        <div className="space-y-6 pb-8">
            <section className="relative overflow-hidden rounded-3xl border border-fuchsia-100 bg-gradient-to-br from-fuchsia-100 via-white to-sky-100 p-8 shadow-lg sm:p-12">
                <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-fuchsia-300/40 blur-2xl" />
                <div className="absolute -left-6 bottom-0 h-36 w-36 rounded-full bg-sky-300/40 blur-2xl" />
                <p className="relative inline-flex rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-fuchsia-700">We Are Hiring</p>
                <h1 className="relative mt-4 text-4xl font-black leading-tight text-slate-800 sm:text-5xl">
                    Careers at Dragon News
                </h1>
                <p className="relative mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                    Build the future of media with a team that values speed, creativity, and public impact.
                    From newsroom operations to product engineering, your work will reach millions.
                </p>
                <div className="relative mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {process.map((item, index) => (
                        <div key={item} className="rounded-2xl bg-white/80 p-4 text-center">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Step {index + 1}</p>
                            <p className="mt-1 text-lg font-extrabold text-slate-800">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {openings.map((role, index) => (
                    <div
                        key={role.title}
                        className={`rounded-2xl border p-6 shadow-sm ${
                            index % 2 === 0
                                ? "border-sky-100 bg-gradient-to-br from-white to-sky-50"
                                : "border-rose-100 bg-gradient-to-br from-white to-rose-50"
                        }`}
                    >
                        <h2 className="text-2xl font-black text-slate-800">{role.title}</h2>
                        <p className="mt-2 font-semibold text-slate-600">{role.type} | {role.location}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 ring-1 ring-slate-200">Urgent Hiring</span>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 ring-1 ring-slate-200">Team Expansion</span>
                        </div>
                        <Link
                            href="/login"
                            className="mt-5 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2.5 font-bold text-white shadow-md"
                        >
                            Apply Now
                        </Link>
                    </div>
                ))}
            </section>

            <section className="surface-card p-6 sm:p-8">
                <h3 className="text-2xl font-black text-slate-800 sm:text-3xl">Why You Will Love Working Here</h3>
                <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {perks.map((perk) => (
                        <div key={perk} className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700">
                            {perk}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CareerPage;
