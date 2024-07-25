import Link from "next/link";
import { InputHTMLAttributes, useEffect } from "react";
import { Control, useController } from "react-hook-form";

interface InputCheckBoxProps {
  name: string;
  label: string;
  control: Control<any>;
  subCheckBoxNames?: string[];
  description?: string;
  termsPath?: string;
}

export default function InputCheckBox({
  name,
  label,
  control,
  subCheckBoxNames,
  description,
  termsPath,
  ...rest
}: InputCheckBoxProps & InputHTMLAttributes<HTMLInputElement>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: "모든 약관에 동의해야 합니다." },
    defaultValue: false,
  });

  const subCheckBoxs = subCheckBoxNames
    ? subCheckBoxNames.map((subCheckBoxName) =>
        useController({ name: subCheckBoxName, control })
      )
    : undefined;

  if (subCheckBoxs) {
    useEffect(() => {
      const totalCheckBoxChecked = subCheckBoxs.every(
        (subCheckBox) => subCheckBox.field.value
      );
      if (totalCheckBoxChecked && !value) {
        onChange(true);
      } else if (!totalCheckBoxChecked && value) {
        onChange(false);
      }
    }, [subCheckBoxs, value, onChange]);
  }

  const handleChange = (isChecked: boolean) => {
    if (subCheckBoxs) {
      subCheckBoxs.forEach((subCheckBox) =>
        subCheckBox.field.onChange(isChecked)
      );
    }
    onChange(isChecked);
  };

  return (
    <label
      htmlFor={name}
      className="flex gap-2 items-center flex-wrap cursor-pointer"
    >
      <div
        className={`w-5 h-5 focus:outline-none rounded-sm flex items-center justify-center ${
          value ? "bg-violet-600" : "bg-gray-500/20 border border-gray-500/30"
        }`}
      >
        {value && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <input
        className="hidden"
        id={name}
        type="checkbox"
        checked={value}
        onChange={(e) => handleChange(e.target.checked)}
        {...rest}
      />
      {label}
      {description && <p className="text-xs text-gray-400">{description}</p>}
      {termsPath && <Link href={termsPath}>보기</Link>}
    </label>
  );
}
