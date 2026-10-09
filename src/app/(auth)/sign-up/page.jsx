"use client";


import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function SignUp() {

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  // 1. Validate password confirmation first
  if (data.password !== data.confirmPassword) {
    toast.error("পাসওয়ার্ড দুটি মিলছে না!");
    return;
  }

  try {
    // 2. Register with Better Auth
    const { data: resData, error } =
      await authClient.signUp.email({
        name: data.name,
        email: data.email,
        image: data.image,
        password: data.password,
      });

    // 3. Handle registration failure
    if (error) {
      toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি!");
      return;
    }

    // 4. Show success only after successful registration
    if (resData) {
      toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
    }
  } catch (err) {
    console.error("Sign-up error:", err);
    toast.error("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  }
};

return ( <main className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:py-10"> <div className="mx-auto w-full max-w-[416px]">


    {/* Heading */}
    <header className="mb-7 text-center">
      <h1 className="text-2xl font-bold tracking-tight text-[#202b24] sm:text-[27px]">
        অ্যাকাউন্ট তৈরি করুন
      </h1>
      <p className="mt-2 text-sm text-[#7a817b]">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>
    </header>

    {/* Registration Card */}
    <div className="rounded-2xl border border-[#dce5dc] bg-[#fbfcfb] px-6 py-6">
      <Form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <TextField isRequired name="image" type="text">
          <Label className="mb-1.5 block text-sm font-medium text-[#202b24]">
            ইমেজ
          </Label>
          <Input
            placeholder="ইমেজ লিঙ্ক দিন"
            className="h-10 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 text-sm text-[#26332a] outline-none focus-within:border-green-600"
          />
          <FieldError />
        </TextField>
        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) =>
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ? null
              : "সঠিক ইমেইল ঠিকানা লিখুন"
          }
        >
          <Label className="mb-1.5 block text-sm font-medium text-[#202b24]">
            ইমেইল
          </Label>
          <Input
            placeholder="you@example.com"
            className="h-10 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 text-sm text-[#26332a] outline-none focus-within:border-green-600"
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label className="mb-1.5 block text-sm font-medium text-[#202b24]">
            ইমেজ
          </Label>
          <Input
            placeholder="ইমেজ লিঙ্ক দিন"
            className="h-10 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 text-sm text-[#26332a] outline-none focus-within:border-green-600"
          />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          type="password"
          minLength={8}
          validate={(value) => {
            if (value.length < 8) {
              return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
            }
            return null;
          }}
        >
          <Label className="mb-1.5 block text-sm font-medium text-[#202b24]">
            পাসওয়ার্ড
          </Label>
          <Input
  placeholder="কমপক্ষে ৮ অক্ষর"
  className="h-10 w-full rounded-lg border border-[#dce5dc] px-3"
/>
          <Description className="text-xs text-[#7a817b]">
            কমপক্ষে ৮ অক্ষর ব্যবহার করুন।
          </Description>
          <FieldError />
        </TextField>

        {/* Confirm Password */}
        <TextField
          isRequired
          name="confirmPassword"
          type="password"
        //   validate={(value) =>
        //     value === password
        //       ? null
        //       : "পাসওয়ার্ড দুটি মিলছে না"
        //   }
        >
          <Label className="mb-1.5 block text-sm font-medium text-[#202b24]">
            পাসওয়ার্ড নিশ্চিত করুন
          </Label>
          <Input
            placeholder="আবার লিখুন"
            className="h-10 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 text-sm text-[#26332a] outline-none focus-within:border-green-600"
          />
          <FieldError />
        </TextField>

        {/* Submit */}
        <Button
          type="submit"
          className="cursor-pointer mt-0 h-10 w-full rounded-lg bg-[#078b40] text-sm font-semibold text-white shadow-[0_3px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#067b39]"
        >
          অ্যাকাউন্ট তৈরি করুন
        </Button>
      </Form>

      {/* Divider */}
      <div className="my-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#dce5dc]" />
        <span className="text-xs text-[#555e57]">অথবা</span>
        <div className="h-px flex-1 bg-[#dce5dc]" />
      </div>

      {/* Social Sign Up */}
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant="outline"
          onPress={() => console.log("Google sign-up")}
          className="h-10 min-w-0 flex items-center rounded-lg border border-[#dce5dc] bg-transparent px-2 text-xs font-semibold text-[#26332a] hover:bg-[#f0f5f0] sm:text-sm"
        >
        <span className="font-bold text-lg text-[#4285f4]">G</span>
          Google দিয়ে চালিয়ে যান
        </Button>
          
        <Button
          type="button"
          variant="outline"
          onPress={() => console.log("GitHub sign-up")}
          className="h-10 flex items-center min-w-0 rounded-lg border border-[#dce5dc] bg-transparent px-2 text-xs font-semibold text-[#26332a] hover:bg-[#f0f5f0] sm:text-sm"
        >
            <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 fill-current"
            aria-hidden="true"
          >
            <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.8 2.1 3.9 1.42.1-.73.39-1.23.7-1.52-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.14 3.08-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.3-2.62 5.25-5.11 5.52.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
          </svg> 
          GitHub দিয়ে চালিয়ে যান
        </Button>
      </div>

      {/* Sign In */}
      <p className="mt-5 text-center text-sm text-[#424b44]">
        অ্যাকাউন্ট আছে?
        <Link
          href="/sign-in"
          className="font-medium text-[#078b40] hover:underline"
        >
          সাইন ইন করুন
        </Link>
      </p>
    </div>

    {/* Back Home */}
    <div className="mt-6 text-center">
      <Link
        href="/"
        className="text-sm text-[#7a817b] transition hover:text-[#078b40]"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  </div>
</main>

);
}
