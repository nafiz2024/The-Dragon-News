import Link from "next/link";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import swimmingImg from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playgroundImg from "@/assets/playground.png";
import bannerImg from "@/assets/bg.png";
import Image from "next/image";

const RightSideBar = () => {
    return (
        <div>
            <div className="flex flex-col mb-8">
                <h1 className="text-xl text-[#403F3F] font-bold mb-5">Login With</h1>
                <div className="flex flex-col gap-3">
                    <Link href="" className="btn bg-transparent border-black text-black hover:border-[#2563EB] hover:text-[#2563EB]"><FaGoogle /> Login with Google</Link>
                    <Link href="" className="btn bg-transparent border-black text-black hover:border-[#2563EB] hover:text-[#2563EB]"><FaGithub /> Login with Github</Link>
                </div>
            </div>
            <div className="flex flex-col gap-5 mb-5">
                <h1 className="text-xl text-[#403F3F] font-semibold">Find us On</h1>
                <div className="border border-[#E7E7E7] rounded-lg">
                    <Link href="/" className="flex gap-3 border border-[#E7E7E7] p-4 hover:text-[#2563EB]" >
                        <div className="w-8 h-8 bg-[#F3F3F3] rounded-full flex justify-center items-center"><FaFacebookF /></div>
                        <h1 className="text-lg text-[#706F6F] font-medium">Facebook</h1>
                    </Link>
                    <Link href="/" className="flex gap-3 border border-[#E7E7E7] p-4 hover:text-[#2563EB]" >
                        <div className="w-8 h-8 bg-[#F3F3F3] rounded-full flex justify-center items-center"><FaTwitter /></div>
                        <h1 className="text-lg text-[#706F6F] font-medium">Twitter</h1>
                    </Link>
                    <Link href="/" className="flex gap-3 border border-[#E7E7E7] p-4 hover:text-[#2563EB]" >
                        <div className="w-8 h-8 bg-[#F3F3F3] rounded-full flex justify-center items-center"><GrInstagram /></div>
                        <h1 className="text-lg text-[#706F6F] font-medium">Instagram</h1>
                    </Link>
                </div>
            </div>
            <div className="bg-[#F3F3F3] p-4">
                <h1 className="text-xl text-[#403F3F] font-semibold mb-5">Q-Zone</h1>
                <div className="flex flex-col justify-center items-center gap-5">
                    <Image src={swimmingImg} alt="Swimming Image" width={258} height={219} />
                <Image src={classImg} alt="Swimming Image" width={258} height={219} />
                <Image src={playgroundImg} alt="Swimming Image" height={219} />
                </div>
            </div>
            <div className="w-full mt-5">
                <Image
                    src={bannerImg}
                    alt="Banner Image"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default RightSideBar;
