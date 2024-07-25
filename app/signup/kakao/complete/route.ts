import { notFound } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) return notFound();
  const accessTokenBaseURL = "https://kauth.kakao.com/oauth/token";
  const accessTokenParams = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: process.env.KAKAO_CLIENT_ID!,
    redirect_uri: process.env.KAKAO_REDIRECT_URI!,
    code,
  }).toString();
  const accessTokenURL = `${accessTokenBaseURL}?${accessTokenParams}`;
  const { id_token } = await (
    await fetch(accessTokenURL, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
  ).json();
  //   if (error) {
  //     return new Response(null, { status: 400 });
  //   }
  console.log(id_token);
  const openId = Buffer.from(id_token, "base64").toString();
}
