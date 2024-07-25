import { notFound } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) return notFound();
  const accessTokenBaseURL = "https://github.com/login/oauth/access_token";
  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code,
  }).toString();
  const accessTokenURL = `${accessTokenBaseURL}?${accessTokenParams}`;
  const { access_token, error } = await (
    await fetch(accessTokenURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  if (error) {
    return new Response(null, { status: 400 });
  }
  const { id, avatar_url, email, login } = await (
    await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-cache",
    })
  ).json();
}
