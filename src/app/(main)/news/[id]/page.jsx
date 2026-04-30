import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {

    const { id } = await params;

    const news = await getNewsDetailsById(id);

    return (
        
    );
};

export default NewsDetailsPage;