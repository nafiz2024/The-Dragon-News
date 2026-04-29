import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories } from "@/lib/data";


const Home = async () => {

  const categories = await getCategories();

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null} />
      </div>
      <div className="font-bold text-3xl bg-red-100 col-span-6">
        All news
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
}

export default Home;
