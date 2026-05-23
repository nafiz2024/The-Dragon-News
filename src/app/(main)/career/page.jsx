
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

    return (
        <div className="surface-card p-6 sm:p-8">
            <h1 className="section-title text-3xl">Careers at Dragon News</h1>
            <p className="mt-4 max-w-3xl text-slate-600">
                Join our newsroom and build the future of digital journalism with design,
                technology, and high-impact storytelling.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {openings.map((role) => (
                    <div key={role.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                        <h2 className="text-xl font-bold text-slate-800">{role.title}</h2>
                        <p className="mt-2 text-slate-600">{role.type} | {role.location}</p>
                        <Link
                            href="/login"
                            className="mt-4 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 font-semibold text-white"
                        >
                            Apply Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareerPage;
