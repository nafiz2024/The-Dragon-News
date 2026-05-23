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
        <div className="surface-card flex flex-col gap-4 p-3 sm:flex-row sm:items-center sm:gap-5 sm:p-4">
            <button className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2.5 text-lg font-semibold text-white shadow-md sm:w-auto sm:text-xl">Latest</button>
            <Marquee className="min-w-0 text-base font-semibold text-slate-700 sm:text-lg" pauseOnHover={true} speed={85}>
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
