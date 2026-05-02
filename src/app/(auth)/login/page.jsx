'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

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

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLogicFunc = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    })

    if (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 3000,
      })
    }

    if (res) {
      toast.success(`Login Successfull`, {
        position: "top-center",
        autoClose: 3000,
      })
    }

  }

  return (
    <div className="flex items-center justify-center pb-10 sm:pb-14">
      <div className="mb-14 w-full max-w-[752px] rounded-sm bg-white p-5 sm:p-8 lg:p-12 xl:p-20">
        <h1 className="mb-8 border-b border-[#E7E7E7] pb-8 text-center text-2xl font-semibold text-[#403F3F] sm:mb-10 sm:pb-10 sm:text-3xl lg:mb-14 lg:pb-14 lg:text-4xl">Login your account</h1>
        <form onSubmit={handleSubmit(handleLogicFunc)} className="px-0 sm:px-4">
          <fieldset className="fieldset">

            <legend className="label text-xl text[#403F3F] font-semibold pb-3">Email</legend>
            <input type="email" className="input w-full h-13 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your email address" {...register("email", { required: "Email field is required" })} />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="label text-xl text[#403F3F] font-semibold pb-3 mt-5">Password</legend>
            <input type={isShowPassword ? "text" : "password"} className="input w-full h-13 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your password" {...register("password", { required: "Password field is required" })} />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <span className="absolute right-4 top-5 text-xl cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            <button type="submit" className="btn btn-neutral mt-8 w-full p-6 bg-[#403F3F] text-lg font-semibold sm:w-auto sm:text-xl">Login</button>
          </fieldset>
        </form>
        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
          <h1 className="text-base font-semibold text-[#706F6F] sm:text-lg">Don&apos;t Have An Account ? </h1>
          <Link className="text-lg font-semibold text-[#FF8C47]" href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
