export async function GET() {
  const baseURL = "https://kauth.kakao.com/oauth/authorize";
  const params = {
    response_type: "code",
    client_id: process.env.KAKAO_CLIENT_ID!,
    redirect_uri: process.env.KAKAO_REDIRECT_URI!,
    scope: "openid",
  };
  const formattedParams = new URLSearchParams(params).toString();
  const finalURL = `${baseURL}?${formattedParams}`;
  return Response.redirect(finalURL);
}
