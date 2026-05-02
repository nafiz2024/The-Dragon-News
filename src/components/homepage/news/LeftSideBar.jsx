import Link from "next/link";

const LeftSideBar = ({ categories, activeId }) => {

    const category = categories.news_category;
    return (
        <div>
            <div className="">
                <h1 className="text-xl text-[#403F3F] font-semibold mb-5">All Category</h1>
                <ul className="grid grid-cols-1 gap-3 text-center sm:grid-cols-2 lg:grid-cols-1">
                    {
                        category.map((c) => {
                            return (
                                <li
                                    key={c.category_id}
                                    className={`
                                    ${activeId === c.category_id && "bg-[#E7E7E7]"} rounded-sm text-base font-semibold text-[#403F3F] hover:bg-[#E7E7E7] sm:text-lg xl:text-xl`}
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
