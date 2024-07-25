"use client";

import InputCheckBox from "../common/InputCheckBox";
import Partition from "../common/Partition";
import { Control } from "react-hook-form";

interface TOSProps {
  control: Control<any>;
}

export default function TOS({ control }: TOSProps) {
  return (
    <div className="flex flex-col gap-2">
      <InputCheckBox
        control={control}
        subCheckBoxNames={["totalServiesTerms", "personalInfoTerms"]}
        name="agreeAll"
        label="전체동의"
        description="전체동의를 선택하시면 아래의 모든 약관에 동의하게 됩니다."
      />
      <Partition />
      <InputCheckBox
        control={control}
        name="totalServiesTerms"
        label="통합 서비스 이용약관"
        termsPath="/"
      />
      <InputCheckBox
        control={control}
        name="personalInfoTerms"
        label="개인정보 처리방침"
        termsPath="/"
      />
    </div>
  );
}
