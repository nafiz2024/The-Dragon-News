'use client'

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

// export const metadata = {
//   title: "The Dragon News | Register",
//   description: "The Grate Online News Portal In Bangladesh",
//   icons: {
//     icon: "/favicon-transparent.png",
//     shortcut: "/favicon-transparent.png",
//     apple: "/favicon-transparent.png",
//   },
// };

const RegisterPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLogicFunc = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      image: photo,
      email: email,
      password: password,
      callbackURL: "/login",
    })

    if (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 3000,
      })
    }

    if (res) {
      toast.success(`Sign Up Successfull`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center pb-10 sm:pb-14">
        <div className="surface-card mb-14 w-full max-w-[752px] p-5 sm:p-8 lg:p-12 xl:p-20">
          <h1 className="mb-8 border-b border-slate-200 pb-8 text-center text-2xl font-bold text-slate-800 sm:mb-10 sm:pb-10 sm:text-3xl lg:mb-14 lg:pb-14 lg:text-4xl">Register your account</h1>
          <form onSubmit={handleSubmit(handleLogicFunc)} className="space-y-5 px-0 sm:px-4">
            <fieldset className="fieldset">

              <legend className="label pb-3 text-xl font-semibold text-slate-700">Your Name</legend>
              <input type="text" className="input h-13 w-full border-slate-200 bg-slate-50 p-5 placeholder:text-[16px]" placeholder="Enter your name address" {...register("name", { required: "Name field is required" })} />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="label pb-3 text-xl font-semibold text-slate-700">Photo URL</legend>
              <input type="name" className="input h-13 w-full border-slate-200 bg-slate-50 p-5 placeholder:text-[16px]" placeholder="Enter your photo url" {...register("photo", { required: "Photo field is required" })} />
              {errors.photo && (
                <p className="text-red-500">{errors.photo.message}</p>
              )}
            </fieldset>

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

              <button type="submit" className="btn mt-8 w-full border-none bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-lg font-semibold text-white shadow-md sm:w-auto sm:text-xl">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
