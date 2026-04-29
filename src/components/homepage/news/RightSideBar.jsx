import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
    return (
        <div>
            <div className="flex flex-col">
                <h1 className="text-xl text-[#403F3F] font-bold mb-5">Login With</h1>
                <div className="flex flex-col gap-3">
                    <Link href="" className="btn bg-transparent border-black text-black hover:border-[#2563EB] hover:text-[#2563EB]"><FaGoogle /> Login with Google</Link>
                    <Link href="" className="btn bg-transparent border-black text-black hover:border-[#2563EB] hover:text-[#2563EB]"><FaGithub /> Login with Github</Link>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;