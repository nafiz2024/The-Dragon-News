
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

    return (
        <div className="surface-card p-6 sm:p-8">
            <h1 className="section-title text-3xl">About Dragon News</h1>
            <p className="mt-4 max-w-3xl text-slate-600">
                Dragon News is a modern digital newsroom focused on reliable reporting,
                fast updates, and easy browsing across categories.
            </p>

            <h2 className="mt-8 text-xl font-bold text-slate-800">Popular Categories</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((category) => (
                    <Link
                        key={category.category_id}
                        href={`/category/${category.category_id}`}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                    >
                        {category.category_name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;
