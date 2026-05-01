import Link from "next/link";

export const metadata = {
  title: "The Dragon News | Register",
  description: "The Grate Online News Portal In Bangladesh",
  icons: {
    icon: "/favicon-transparent.png",
    shortcut: "/favicon-transparent.png",
    apple: "/favicon-transparent.png",
  },
};

const RegisterPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[752px] bg-white p-20 rounded-sm mb-14">
          <h1 className="text-center text-4xl font-semibold text-[#403F3F] pb-14 border-b border-[#E7E7E7] mb-14">Register your account</h1>
          <fieldset className="fieldset px-4">

            <label className="label text-xl text[#403F3F] font-semibold pb-3">Your Name</label>
            <input type="text" className="input w-full h-13 mb-5 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your name address" />

            <label className="label text-xl text[#403F3F] font-semibold pb-3">Photo URL</label>
            <input type="name" className="input w-full h-13 mb-5 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your photo url" />

            <label className="label text-xl text[#403F3F] font-semibold pb-3">Email</label>
            <input type="email" className="input w-full h-13 mb-5 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your email address" />

            <label className="label text-xl text[#403F3F] font-semibold pb-3">Password</label>
            <input type="password" className="input w-full h-13 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your password" />

            <Link href="/" className="btn btn-neutral mt-8 p-6 bg-[#403F3F] text-xl font-semibold">Register</Link>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;