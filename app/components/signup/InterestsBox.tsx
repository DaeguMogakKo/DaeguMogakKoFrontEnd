"use client";

import InterestsBtn from "./InterestsBtn";
import { Control, Controller } from "react-hook-form";

interface InterestsBoxProps {
  control: Control<any>;
}

export default function InterestsBox({ control }: InterestsBoxProps) {
  const interestsTags = [
    "기획",
    "프론트엔드",
    "백엔드",
    "풀스텍",
    "모바일",
    "데이터",
    "DevOps/인프라",
    "디자인",
    "연봉인상",
    "취업",
    "커리어",
    "자기개발",
    "중고거래",
    "근무환경",
    "신기술",
    "세미나/컨퍼런스",
    "학원",
    "프리랜서",
    "스터디/모임",
    "이직",
    "비지니스/제휴",
    "SI/SM",
    "채용공고",
    "교육",
    "AWS",
    "AI",
    "SW아카데미",
    "IT기업홍보",
    "인턴/취업연계",
    "행사",
    "빅데이터",
    "기업연계 프로젝트",
    "제품홍보",
    "창업",
    "클라우드 산업",
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-sm">관심태그</h1>
        <p className="text-sm text-gray-400">
          본인의 분야 및 관심 정보를 선택해 주세요.
        </p>
      </div>
      <ul className="flex w-full flex-wrap justify-center gap-2">
        {interestsTags.map((tag) => (
          <Controller
            key={tag}
            name="interests"
            control={control}
            defaultValue={[]}
            render={({ field: { value, onChange } }) => (
              <InterestsBtn
                selectedInterests={value}
                tag={tag}
                onChange={onChange}
              />
            )}
          />
        ))}
      </ul>
    </div>
  );
}
