import { NextResponse } from "next/server";

export function proxy(request) {
const sessionCookie = request.cookies.get("better-auth.session_token");

if (!sessionCookie?.value) {
return NextResponse.redirect(
new URL("/sign-in", request.url)
);
}

return NextResponse.next();
}

export const config = {
matcher: ["/details/:path*", "/profile/:path*"],
};
