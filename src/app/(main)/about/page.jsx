
import Link from "next/link";
import { getCategories } from "@/lib/data";

export const metadata = {
  title: "The Dragon News | About",
  description: "The Grate Online News Portal In Bangladesh",
  icons: {
    icon: "/favicon-transparent.png",
    shortcut: "/favicon-transparent.png",
    apple: "/favicon-transparent.png",
  },
};

const AboutPage = async () => {
    const categoriesData = await getCategories();
    const categories = categoriesData?.news_category?.slice(0, 8) || [];
    const values = [
        { title: "Truth First", details: "Fact-checked reporting with credibility at the center." },
        { title: "Fast Coverage", details: "Real-time updates from local and global desks." },
        { title: "People Focused", details: "Stories that matter to communities and everyday life." },
    ];

    return (
        <div className="space-y-6 pb-8">
            <section className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-cyan-100 via-white to-rose-100 p-8 shadow-lg sm:p-12">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pink-300/40 blur-2xl" />
                <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-sky-300/40 blur-2xl" />
                <p className="relative inline-flex rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-sky-700">Who We Are</p>
                <h1 className="relative mt-4 text-4xl font-black leading-tight text-slate-800 sm:text-5xl">
                    About Dragon News
                </h1>
                <p className="relative mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                    Dragon News is a bold, digital-first newsroom delivering fast and trusted journalism.
                    We mix sharp storytelling, technology, and visual clarity to keep readers informed.
                </p>
                <div className="relative mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="rounded-2xl bg-white/80 p-4 text-center">
                        <p className="text-3xl font-black text-sky-700">24/7</p>
                        <p className="text-sm font-semibold text-slate-600">Live Updates</p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 text-center">
                        <p className="text-3xl font-black text-rose-600">100+</p>
                        <p className="text-sm font-semibold text-slate-600">Daily Stories</p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 text-center">
                        <p className="text-3xl font-black text-amber-600">8+</p>
                        <p className="text-sm font-semibold text-slate-600">News Sections</p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 text-center">
                        <p className="text-3xl font-black text-emerald-600">1M+</p>
                        <p className="text-sm font-semibold text-slate-600">Monthly Reads</p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {values.map((value) => (
                    <div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-2xl font-extrabold text-slate-800">{value.title}</h2>
                        <p className="mt-3 text-slate-600">{value.details}</p>
                    </div>
                ))}
            </section>

            <section className="surface-card p-6 sm:p-8">
                <h2 className="text-2xl font-black text-slate-800 sm:text-3xl">Popular Categories</h2>
                <p className="mt-2 text-slate-600">Explore the most read and most searched sections.</p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <Link
                            key={category.category_id}
                            href={`/category/${category.category_id}`}
                            className="rounded-xl border border-slate-200 bg-gradient-to-r from-white to-sky-50 px-4 py-3 text-center font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
                        >
                            {category.category_name}
                        </Link>
                    ))}
                </div>
            </section>
            <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 p-8 text-white shadow-lg sm:p-10">
                <h3 className="text-2xl font-black sm:text-3xl">Want to collaborate with us?</h3>
                <p className="mt-2 max-w-3xl text-sky-100">
                    We are always open to partnerships, expert opinions, and impactful community stories.
                </p>
                <Link href="/career" className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 font-bold text-blue-700">
                    Join Our Team
                </Link>
            </div>
        </div>
    );
};

export default AboutPage;
