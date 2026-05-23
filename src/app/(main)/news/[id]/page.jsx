import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;

    const news = await getNewsDetailsById(id);

    return {
        title: news.title,
        description: news.details,
    }
}

const NewsDetailsPage = async ({ params }) => {

    const { id } = await params;

    const news = await getNewsDetailsById(id);

    return (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-9">
                <h1 className="mb-5 text-xl font-bold text-slate-700">Dragon News</h1>
                <div className="surface-card p-4 sm:p-6 lg:p-8">
                    <div className="mb-5 flex h-[240px] items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:h-[320px] lg:h-[411px]">
                        <Image
                            className="h-full w-full object-contain"
                            src={news.thumbnail_url}
                            alt="News Image"
                            width={518}
                            height={411}
                            sizes="(max-width: 768px) 100vw, 518px"
                        />
                    </div>
                    <h1 className="mb-2 text-xl font-bold text-slate-800 sm:text-2xl lg:leading-11">{news.title}</h1>
                    <p className="mb-8 text-sm text-slate-600 sm:text-base">{news.details}</p>
                    <Link className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-3 text-base font-semibold text-white shadow-md sm:px-6 sm:text-xl" href={`/category/${news.category_id}`} > <FaArrowLeft /> All news in this category</Link>
                </div>
            </div>
            <div className="lg:col-span-3">
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsDetailsPage;
