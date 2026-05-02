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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-12 xl:gap-6">
                <div className="xl:col-span-3">
                    <LeftSideBar categories={categories} activeId={id} />
                </div>
                <div className="md:col-span-2 xl:col-span-6">
                    <AllNews allNews={allNews} />
                </div>
                <div className="md:col-span-2 xl:col-span-3">
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
};

export default NewsCategoryPage;
