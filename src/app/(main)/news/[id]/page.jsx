import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetailsPage = async ({ params }) => {

    const { id } = await params;

    const news = await getNewsDetailsById(id);

    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-9">
                <h1 className=" mb-5">Dragon News</h1>
                <div className="border border-[#E7E7E7] p-8 rounded-sm">
                    <div className="flex h-[411px] items-center justify-center overflow-hidden rounded-sm bg-[#F3F3F3] mb-5">
                        <Image
                            className="h-full w-full object-contain"
                            src={news.thumbnail_url}
                            alt="News Image"
                            width={518}
                            height={411}
                            sizes="(max-width: 768px) 100vw, 518px"
                        />
                    </div>
                    <h1 className="text-2xl text-[#403F3F] font-bold leading-11 mb-2">{news.title}</h1>
                    <p className="text-[#706F6F] mb-8">{news.details}</p>
                    <Link className="inline-flex items-center gap-3 bg-[#D72050] px-6 py-3 text-xl font-medium text-white" href={`/category/${news.category_id}`} > <FaArrowLeft /> All news in this category</Link>
                </div>
            </div>
            <div className="col-span-3">
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsDetailsPage;
