import Logo from "./Logo";

export default function MainLogo() {
  return (
    <div className="flex flex-col w-full items-center gap-5 *:font-medium">
      <Logo size="main" />
      <h1 className="text-xl">대구 모각코에 오신것을 환영합니다!</h1>
    </div>
  );
}
