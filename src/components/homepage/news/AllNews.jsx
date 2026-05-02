import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const AllNews = ({ allNews }) => {
    const news = allNews;

    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-xl text-[#403F3F] font-semibold">News By Category</h1>
            <div className="flex flex-col gap-8">
                {
                    news.map((n) => {
                        return <div className="" key={n._id}>
                            <div className="flex flex-col gap-4 rounded-t-xl bg-[#F3F3F3] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                                <div className="flex items-center gap-4">
                                    <Image className="rounded-full" src={n.author.img} alt="Author Image" width={40} height={40} />
                                    <div className="">
                                        <h1 className="text-base font-semibold text-[#403F3F] sm:text-lg">{n.author.name}</h1>
                                        <h1 className="text-sm text-[#706F6F] sm:text-base">{n.author.published_date}</h1>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-2xl text-[#706F6F] sm:text-3xl">
                                    <CiBookmark />
                                    <CiShare2 />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 rounded-b-xl border border-[#E7E7E7] p-4 sm:p-5">
                                <div className="">
                                    <h1 className="mb-5 mt-2 text-lg font-bold text-[#403F3F] sm:mt-4 sm:text-xl md:text-2xl">{n.title}</h1>
                                    <div className="mb-6 flex h-[220px] items-center justify-center overflow-hidden rounded-sm bg-[#F3F3F3] sm:h-[260px] md:h-[320px]">
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
                                        <p className="text-base text-[#706F6F] sm:text-lg">{n.details}</p>
                                        <Link className="text-base font-semibold text-[#FF8C47] sm:text-lg" href={`/news/${n._id}`}>Read More</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 border-t border-[#E7E7E7] pt-5 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-3">
                                        <ul className="flex gap-1 text-[#FF8C47]">
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                        </ul>
                                        <p className="text-base font-medium text-[#706F6F] sm:text-lg">{n.rating.number}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <IoEye className="text-[#706F6F] text-xl" />
                                        <p className="text-base text-[#706F6F] sm:text-lg">{n.total_view}</p>
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
