"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";

const SignInPage = () => {
    const handleSubmit = async(e) => {
e.preventDefault();


const formData = new FormData(e.currentTarget);
const data = Object.fromEntries(formData.entries());
const { data:resData, error } = await authClient.signIn.email({
    email: data.email,
    password: data.password,
    rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
    callbackURL: '/'
});

console.log("Registration data:", data);
toast.error(error.message);


};

const handelGoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
const handelGithubSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}
    return (
        <main className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:py-10"> <div className="mx-auto w-full max-w-[416px]">


    {/* Heading */}
    <header className="mb-7 text-center">
      <h1 className="text-2xl font-bold tracking-tight text-[#202b24] sm:text-[27px]">
        সাইন ইন
      </h1>
      <p className="mt-2 text-sm text-[#7a817b]">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
    </header>

    {/* Registration Card */}
    <div className="rounded-2xl border border-[#dce5dc] bg-[#fbfcfb] px-6 py-6">
      <Form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit}
      >
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
            className="h-10 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 text-sm text-[#26332a] outline-none focus-within:border-green-600"
          />
          <Description className="text-xs text-[#7a817b]">
            কমপক্ষে ৮ অক্ষর ব্যবহার করুন।
          </Description>
          <FieldError />
        </TextField>
        {/* Submit */}
        <Button
          type="submit"
          className="cursor-pointer mt-0 h-10 w-full rounded-lg bg-[#078b40] text-sm font-semibold text-white shadow-[0_3px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#067b39]"
        >
          সাইন ইন
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
          className="cursor-pointer h-10 min-w-0 flex items-center rounded-lg border border-[#dce5dc] bg-transparent px-2 text-xs font-semibold text-[#26332a] hover:bg-[#f0f5f0] sm:text-sm"
          onClick={handelGoogleSignIn}
        >
           <img src={'/Google.png'} alt="googleLogo" />
          Google দিয়ে চালিয়ে যান
        </Button>
          
        <Button
        onClick={handelGithubSignIn}
          type="button"
          variant="outline"
          className="cursor-pointer h-10 flex items-center min-w-0 rounded-lg border border-[#dce5dc] bg-transparent px-2 text-xs font-semibold text-[#26332a] hover:bg-[#f0f5f0] sm:text-sm"
        >
           <img src={'/Vector.png'} alt="gitLogo" />
          GitHub দিয়ে চালিয়ে যান
        </Button>
      </div>

      {/* Sign In */}
      <p className="mt-5 text-center text-sm text-[#424b44]">
        অ্যাকাউন্ট নেই?
        <Link
          href="/sign-up"
          className="font-medium text-[#078b40] hover:underline"
        >
          সাইন আপ করুন
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
};

export default SignInPage;