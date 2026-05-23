import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const AllNews = ({ allNews }) => {
    const news = allNews;
    const createPreview = (text = "") => {
        if (text.length <= 230) return text;
        return `${text.slice(0, 230)}...`;
    };

    return (
        <div className="flex flex-col gap-5">
            <h1 className="section-title text-2xl">News By Category</h1>
            <div className="flex flex-col gap-8">
                {
                    news.map((n) => {
                        return <div className="surface-card overflow-hidden transition-transform duration-300 hover:-translate-y-1" key={n._id}>
                            <div className="flex flex-col gap-4 bg-gradient-to-r from-slate-50 to-sky-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                                <div className="flex items-center gap-4">
                                    <Image className="rounded-full ring-2 ring-sky-200" src={n.author.img} alt="Author Image" width={40} height={40} />
                                    <div className="">
                                        <h1 className="text-base font-semibold text-slate-800 sm:text-lg">{n.author.name}</h1>
                                        <h1 className="text-sm text-slate-500 sm:text-base">{n.author.published_date}</h1>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-2xl text-slate-500 sm:text-3xl">
                                    <CiBookmark />
                                    <CiShare2 />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 p-4 sm:p-5">
                                <div className="">
                                    <h1 className="mb-5 mt-2 text-lg font-bold text-slate-800 sm:mt-4 sm:text-xl md:text-2xl">{n.title}</h1>
                                    <div className="mb-6 flex h-[220px] items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:h-[260px] md:h-[320px]">
                                        <Image
                                            className="h-full w-full object-contain"
                                            src={n.thumbnail_url}
                                            alt="News Image"
                                            width={518}
                                            height={262}
                                            sizes="(max-width: 768px) 100vw, 518px"
                                        />
                                    </div>
                                    <div className="">
                                        <p className="text-base leading-7 text-slate-600 sm:text-lg">{createPreview(n.details)}</p>
                                        <Link className="mt-3 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-base font-semibold text-sky-600 hover:bg-sky-100 hover:text-sky-700 sm:text-lg" href={`/news/${n._id}`}>
                                            Read Full Story
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-3">
                                        <ul className="flex gap-1 text-amber-500">
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                        </ul>
                                        <p className="text-base font-medium text-slate-500 sm:text-lg">{n.rating.number}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <IoEye className="text-xl text-slate-500" />
                                        <p className="text-base text-slate-500 sm:text-lg">{n.total_view}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AllNews;
