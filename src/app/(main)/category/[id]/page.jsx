import AllNews from "@/components/homepage/news/AllNews";
import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params

    const categories = await getCategories();
    const allNews = await getNewsByCategoryId(id);

    return (
        <div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-3">
                    <LeftSideBar categories={categories} activeId={id} />
                </div>
                <div className="col-span-6">
                    <AllNews allNews={allNews} />
                </div>
                <div className="col-span-3">
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
};

export default NewsCategoryPage;