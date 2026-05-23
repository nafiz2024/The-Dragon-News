'use client'

import Link from "next/link";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import swimmingImg from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playgroundImg from "@/assets/playground.png";
import bannerImg from "@/assets/bg.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const RightSideBar = () => {

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        })
    }

    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        })
    }

    return (
        <div className="space-y-5">
            <div className="surface-card mb-8 flex flex-col p-4">
                <h1 className="section-title mb-5 text-xl">Login With</h1>
                <div className="flex flex-col gap-3">
                    <Link onClick={ handleGoogleSignIn } href="" className="btn w-full border-slate-300 bg-white text-slate-700 hover:border-sky-500 hover:text-sky-600"><FaGoogle /> Login with Google</Link>
                    <Link onClick={ handleGithubSignIn } href="" className="btn w-full border-slate-300 bg-white text-slate-700 hover:border-sky-500 hover:text-sky-600"><FaGithub /> Login with Github</Link>
                </div>
            </div>
            <div className="surface-card flex flex-col gap-5 p-4">
                <h1 className="section-title text-xl">Find us On</h1>
                <div className="overflow-hidden rounded-lg border border-slate-200">
                    <Link href="/" className="flex items-center gap-3 border-b border-slate-200 p-4 hover:bg-sky-50 hover:text-sky-600" >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100"><FaFacebookF /></div>
                        <h1 className="text-lg font-medium text-slate-600">Facebook</h1>
                    </Link>
                    <Link href="/" className="flex items-center gap-3 border-b border-slate-200 p-4 hover:bg-sky-50 hover:text-sky-600" >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100"><FaTwitter /></div>
                        <h1 className="text-lg font-medium text-slate-600">Twitter</h1>
                    </Link>
                    <Link href="/" className="flex items-center gap-3 p-4 hover:bg-sky-50 hover:text-sky-600" >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100"><GrInstagram /></div>
                        <h1 className="text-lg font-medium text-slate-600">Instagram</h1>
                    </Link>
                </div>
            </div>
            <div className="surface-card p-4">
                <h1 className="section-title mb-5 text-xl">Q-Zone</h1>
                <div className="flex flex-col justify-center items-center gap-5">
                    <Image className="h-auto w-full max-w-[258px] rounded-xl" src={swimmingImg} alt="Swimming Image" width={258} height={219} />
                    <Image className="h-auto w-full max-w-[258px] rounded-xl" src={classImg} alt="Swimming Image" width={258} height={219} />
                    <Image className="h-auto w-full max-w-[258px] rounded-xl" src={playgroundImg} alt="Swimming Image" height={219} />
                </div>
            </div>
            <div className="surface-card mt-5 w-full overflow-hidden">
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
