"use client";

import { cls } from "../../lib/utils";

interface InterestsBtnProps {
  tag: string;
  selectedInterests: string[];
  onChange: (tags: string[]) => void;
}

export default function InterestsBtn({
  tag,
  selectedInterests,
  onChange,
}: InterestsBtnProps) {
  const isChecked = selectedInterests.includes(tag);
  const handleClick = () => {
    let updatedInterests;
    if (isChecked) {
      updatedInterests = selectedInterests.filter(
        (interest) => interest !== tag
      );
    } else {
      updatedInterests = [...selectedInterests, tag];
    }
    onChange(updatedInterests);
  };
  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        className={cls(
          isChecked
            ? "bg-violet-600 text-white"
            : "bg-gray-200 dark:bg-gray-600",
          "px-3 py-1 text-sm rounded-xl transition-colors"
        )}
      >
        {tag}
      </button>
    </li>
  );
}
