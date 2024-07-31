"use client";

import {
  CalendarDateRangeIcon as OutlineCalendarIcon,
  HomeIcon as OutlineHomeIcon,
  QuestionMarkCircleIcon as OutlineQnAIcon,
  UserGroupIcon as OutlineCommunityIcon,
  ListBulletIcon as OutlineMoreViewIcon,
} from "@heroicons/react/24/outline";
import {
  QuestionMarkCircleIcon as SolidQnAIcon,
  CalendarDateRangeIcon as SolidCalendarIcon,
  HomeIcon as SolidHomeIcon,
  UserGroupIcon as SolidCommunityIcon,
  ListBulletIcon as SolidMoreViewIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 bg-white dark:bg-gray-900 w-full mx-auto grid grid-cols-5 border-gray-600 border-t px-5 py-3 *:dark:text-white *:text-gray-900">
      <Link href="/home" className="flex flex-col items-center gap-px ">
        {pathname === "/home" ? (
          <SolidHomeIcon className="size-7 fill-violet-600 animate-click-icon" />
        ) : (
          <OutlineHomeIcon className="size-7" />
        )}
        <span
          className={
            pathname === "/home" ? "text-violet-600" : "font-normal text-sm "
          }
        >
          홈
        </span>
      </Link>
      <Link href="/schedule" className="flex flex-col items-center gap-px ">
        {pathname === "/schedule" ? (
          <SolidCalendarIcon className="size-7 fill-violet-600 animate-click-icon" />
        ) : (
          <OutlineCalendarIcon className="size-7" />
        )}
        <span
          className={
            pathname === "/schedule" ? "text-violet-600" : "font-normal text-sm"
          }
        >
          모각코
        </span>
      </Link>
      <Link href="/questions" className="flex flex-col items-center gap-px">
        {pathname === "/questions" ? (
          <SolidQnAIcon className="size-7 fill-violet-600 animate-click-icon" />
        ) : (
          <OutlineQnAIcon className="size-7" />
        )}
        <span
          className={
            pathname === "/questions"
              ? "text-violet-600"
              : "font-normal text-sm"
          }
        >
          Q/A
        </span>
      </Link>
      <Link href="/community" className="flex flex-col items-center gap-px">
        {pathname === "/community" ? (
          <SolidCommunityIcon className="size-7 fill-violet-600 animate-click-icon" />
        ) : (
          <OutlineCommunityIcon className="size-7" />
        )}
        <span
          className={
            pathname === "/community"
              ? "text-violet-600"
              : "font-normal text-sm"
          }
        >
          커뮤니티
        </span>
      </Link>
      <Link href="/more" className="flex flex-col items-center gap-px">
        {pathname === "/more" ? (
          <SolidMoreViewIcon className="size-7 fill-violet-600 animate-click-icon" />
        ) : (
          <OutlineMoreViewIcon className="size-7" />
        )}
        <span
          className={
            pathname === "/more" ? "text-violet-600" : "font-normal text-sm"
          }
        >
          더보기
        </span>
      </Link>
    </div>
  );
}
