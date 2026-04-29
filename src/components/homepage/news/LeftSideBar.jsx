import Link from "next/link";

const LeftSideBar = ({ categories, activeId }) => {

    const category = categories.news_category;
    return (
        <div>
            <div className="">
                <h1 className="text-xl text-[#403F3F] font-semibold mb-5">All Category</h1>
                <ul className="flex flex-col gap-3 text-center">
                    {
                        category.map((c) => {
                            return (
                                <li
                                    key={c.category_id}
                                    className={`
                                    ${activeId === c.category_id && "bg-[#E7E7E7]"} text-xl font-semibold text-[#403F3F] rounded-sm hover:bg-[#E7E7E7]`}
                                >
                                    <Link 
                                    href={`/category/${c.category_id ?? c.id}`}
                                    className="block py-4"
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
