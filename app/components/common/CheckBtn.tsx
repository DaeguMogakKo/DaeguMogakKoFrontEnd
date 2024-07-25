"use client";

import { useState } from "react";
import { cls } from "../../lib/utils";

export default function CheckBtn() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <button
      className={cls(
        isChecked ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700",
        "relative ml-4 inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
      )}
      id="headlessui-switch-:r1:"
      role="switch"
      type="button"
      tab-index="0"
      aria-checked={isChecked}
      data-headlessui-state="checked"
      aria-labelledby="headlessui-label-:r0:"
      aria-describedby="headlessui-description-:r2:"
      onClick={() => setIsChecked(!isChecked)}
    >
      <span
        aria-hidden="true"
        className={cls(
          isChecked ? "translate-x-5" : "translate-x-0",
          "inline-block h-5 w-5 transform rounded-full bg-white/90 shadow ring-0 transition duration-200 ease-in-out"
        )}
      ></span>
    </button>
  );
}
