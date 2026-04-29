import Marquee from "react-fast-marquee";

const news = [
    {
        _id: "1",
        title: "Breaking News: Major Event Unfolds in the City",
    },
    {
        _id: "2",
        title: "Breaking News: New Policy Announced by the Government",
    },
    {
        _id: "3",
        title: "Breaking News: Sports Team Wins Championship",
    }
]

const BreakingNews = () => {
    return (
        <div className="p-4 flex gap-5 bg-[#F3F3F3]">
            <button className="bg-[#D72050] py-2.5 px-5 text-white font-medium text-xl">Latest</button>
            <Marquee className="text-[#403F3F] font-semibold text-lg" pauseOnHover={true} speed={100}>
                {
                    news.map((n) =>
                        <span className="px-10" key={n._id}>{n.title}</span>
                    )
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;