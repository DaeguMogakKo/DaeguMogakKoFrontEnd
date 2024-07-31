import Link from "next/link";
import MainLogo from "./components/common/MainLogo";

export default function EnterPage() {
  return (
    <div className="flex flex-col relative items-center justify-between min-h-[600px] h-screen p-6">
      <div className="absolute py-8 top-[30%]">
        <MainLogo />
      </div>
      <div className="flex flex-col items-center gap-3 w-full absolute bottom-6 px-6">
        <Link
          href="/signup"
          className="w-full bg-violet-600 text-white text-lg font-medium py-2.5 rounded-md text-center hover:bg-violet-500 transition-colors"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link
            href="/login"
            className="hover:underline hover:underline-offset-2"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
