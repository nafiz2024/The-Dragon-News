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
        <div className="flex flex-col gap-4 bg-[#F3F3F3] p-4 sm:flex-row sm:items-center sm:gap-5">
            <button className="w-full bg-[#D72050] px-5 py-2.5 text-lg font-medium text-white sm:w-auto sm:text-xl">Latest</button>
            <Marquee className="min-w-0 text-base font-semibold text-[#403F3F] sm:text-lg" pauseOnHover={true} speed={100}>
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
