import Link from "next/link";

const LeftSideBar = ({ categories, activeId }) => {

    const category = categories.news_category;
    return (
        <div className="surface-card p-4">
            <div className="">
                <h1 className="section-title mb-5 text-xl">All Category</h1>
                <ul className="grid grid-cols-1 gap-3 text-center sm:grid-cols-2 lg:grid-cols-1">
                    {
                        category.map((c) => {
                            return (
                                <li
                                    key={c.category_id}
                                    className={`
                                    ${activeId === c.category_id ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md" : "bg-white text-slate-700 hover:bg-sky-50"} rounded-xl border border-slate-200 text-base font-semibold sm:text-lg`}
                                >
                                    <Link 
                                    href={`/category/${c.category_id ?? c.id}`}
                                    className="block px-3 py-3 sm:py-4"
                                    >
                                        {" "}
                                        {c.category_name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeftSideBar;
