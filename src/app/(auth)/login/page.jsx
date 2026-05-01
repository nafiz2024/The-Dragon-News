'use client'

import Link from "next/link";
import { useForm } from "react-hook-form"

// export const metadata = {
//   title: "The Dragon News | Login",
//   description: "The Grate Online News Portal In Bangladesh",
//   icons: {
//     icon: "/favicon-transparent.png",
//     shortcut: "/favicon-transparent.png",
//     apple: "/favicon-transparent.png",
//   },
// };

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogicFunc = (data) => {
    console.log(data)
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-[752px] bg-white p-20 rounded-sm mb-14">
        <h1 className="text-center text-4xl font-semibold text-[#403F3F] pb-14 border-b border-[#E7E7E7] mb-14">Login your account</h1>
        <form onSubmit={handleSubmit(handleLogicFunc)}>
          <fieldset className="fieldset px-4">

            <label className="label text-xl text[#403F3F] font-semibold pb-3">Email</label>
            <input type="email" className="input w-full h-13 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your email address" {...register("email", { required: "Email field is required" })} />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <label className="label text-xl text[#403F3F] font-semibold pb-3 mt-5">Password</label>
            <input type="password" className="input w-full h-13 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your password" {...register("password", { required: "Password field is required" })} />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-8 p-6 bg-[#403F3F] text-xl font-semibold">Login</button>
          </fieldset>
        </form>
        <div className="flex gap-2 mt-8 justify-center">
          <h1 className="text-lg font-semibold text-[#706F6F]">Don't Have An Account ? </h1>
          <Link className="text-lg font-semibold text-[#FF8C47]" href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;