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
      <div className="surface-card mb-14 w-full max-w-[752px] p-5 sm:p-8 lg:p-12 xl:p-20">
        <h1 className="mb-8 border-b border-slate-200 pb-8 text-center text-2xl font-bold text-slate-800 sm:mb-10 sm:pb-10 sm:text-3xl lg:mb-14 lg:pb-14 lg:text-4xl">Login your account</h1>
        <form onSubmit={handleSubmit(handleLogicFunc)} className="px-0 sm:px-4">
          <fieldset className="fieldset">

            <legend className="label pb-3 text-xl font-semibold text-slate-700">Email</legend>
            <input type="email" className="input h-13 w-full border-slate-200 bg-slate-50 p-5 placeholder:text-[16px]" placeholder="Enter your email address" {...register("email", { required: "Email field is required" })} />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="label mt-5 pb-3 text-xl font-semibold text-slate-700">Password</legend>
            <input type={isShowPassword ? "text" : "password"} className="input h-13 w-full border-slate-200 bg-slate-50 p-5 placeholder:text-[16px]" placeholder="Enter your password" {...register("password", { required: "Password field is required" })} />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <span className="absolute right-4 top-5 text-xl cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            <button type="submit" className="btn mt-8 w-full border-none bg-gradient-to-r from-sky-500 to-blue-600 p-6 text-lg font-semibold text-white shadow-md sm:w-auto sm:text-xl">Login</button>
          </fieldset>
        </form>
        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
          <h1 className="text-base font-semibold text-slate-500 sm:text-lg">Don&apos;t Have An Account ? </h1>
          <Link className="text-lg font-semibold text-sky-600" href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
