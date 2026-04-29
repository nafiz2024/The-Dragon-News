import Link from "next/link";

const LeftSideBar = ({ categories }) => {

    const category = categories.news_category;
    return (
        <div>
            <div className="">
                <h1 className="text-xl text-[#403F3F] font-semibold mb-5">All Category</h1>
                <div className="flex flex-col gap-3 text-center">
                    {
                        category.map((c) => (
                            <Link href="" key={c.category_id} className="text-xl font-semibold text-[#403F3F] bg-[#E7E7E7] rounded-sm py-4 ">{c.category_name}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;