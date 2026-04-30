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
                            <div className="flex justify-between items-center py-4 px-5 bg-[#F3F3F3] rounded-t-xl">
                                <div className="flex justify-between items-center gap-4">
                                    <Image className="rounded-full" src={n.author.img} alt="Author Image" width={40} height={40} />
                                    <div className="">
                                        <h1 className="text-lg text-[#403F3F] font-semibold">{n.author.name}</h1>
                                        <h1 className="text-[#706F6F]">{n.author.published_date}</h1>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-3xl text-[#706F6F]">
                                    <CiBookmark />
                                    <CiShare2 />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 p-5 border border-[#E7E7E7] rounded-b-xl">
                                <div className="">
                                    <h1 className="text-xl text-[#403F3F] font-bold mb-5 mt-4">{n.title}</h1>
                                    <div className="flex h-[220px] items-center justify-center overflow-hidden rounded-sm bg-[#F3F3F3]  mb-8">
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
                                        <p className="text-lg text-[#706F6F] ">{n.details}</p>
                                        <Link className="text-lg text-[#FF8C47] font-semibold" href="/">Read More</Link>
                                    </div>
                                </div>
                                <div className="pt-5 border-t border-[#E7E7E7] flex justify-between items-center">
                                    <div className="flex gap-3 items-center">
                                        <ul className="flex gap-1 text-[#FF8C47]">
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                        </ul>
                                        <p className="text-lg text-[#706F6F] font-medium">{n.rating.number}</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <IoEye className="text-[#706F6F] text-xl" />
                                        <p className="text-[#706F6F] text-lg">{n.total_view}</p>
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
