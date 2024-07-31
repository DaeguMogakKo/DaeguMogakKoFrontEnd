import Link from "next/link";

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <Link href="/schedule">
      <div className="w-full bg-gray-600 px-8 py-6 text-white rounded-xl font-medium">
        {title}
      </div>
    </Link>
  );
}
