'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form"
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

  const handleLogicFunc = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      image: photo,
      email: email,
      password: password,
      callbackURL: "/",
    })

    if (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 3000,
      })
    }

    if(res) {
      toast.success(`Sign Up Successfull`, {
        position: "top-center",
        autoClose: 3000,
      })
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[752px] bg-white p-20 rounded-sm mb-14">
          <h1 className="text-center text-4xl font-semibold text-[#403F3F] pb-14 border-b border-[#E7E7E7] mb-14">Register your account</h1>
          <form onSubmit={handleSubmit(handleLogicFunc)}>
            <fieldset className="fieldset px-4">

              <label className="label text-xl text[#403F3F] font-semibold pb-3">Your Name</label>
              <input type="text" className="input w-full h-13 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your name address" {...register("name", { required: "Name field is required" })} />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <label className="label text-xl text[#403F3F] font-semibold pb-3 mt-5">Photo URL</label>
              <input type="name" className="input w-full h-13 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your photo url" {...register("photo", { required: "Photo field is required" })} />
              {errors.photo && (
                <p className="text-red-500">{errors.photo.message}</p>
              )}

              <label className="label text-xl text[#403F3F] font-semibold pb-3 mt-5">Email</label>
              <input type="email" className="input w-full h-13 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your email address" {...register("email", { required: "Email field is required" })} />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <label className="label text-xl text[#403F3F] font-semibold pb-3 mt-5">Password</label>
              <input type="password" className="input w-full h-13 bg-[#F3F3F3] border-none p-5 placeholder:text-[16px]" placeholder="Enter your password" {...register("password", { required: "Password field is required" })} />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <button type="submit" className="btn btn-neutral mt-8 p-6 bg-[#403F3F] text-xl font-semibold">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;