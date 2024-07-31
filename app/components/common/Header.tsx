import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 bg-white dark:bg-gray-900 h-16 w-full border-gray-600 border-b *:dark:text-white *:text-gray-900">
      <Link href="/home" className="absolute top-0 left-0">
        <Logo size="mini" />
      </Link>
    </header>
  );
}
