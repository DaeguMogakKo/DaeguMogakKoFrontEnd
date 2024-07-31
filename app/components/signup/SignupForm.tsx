"use client";

import { useForm } from "react-hook-form";
import Input from "../common/Input";
import InterestsBox from "./InterestsBox";
import TOS from "./TOS";
import Button from "../common/Button";

interface FormData {
  interests: string[];
  agreeAll: boolean;
  totalServiesTerms: boolean;
  personalInfoTerms: boolean;
  email: string;
  password: string;
  confirmedPassword: string;
  username: string;
}

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      interests: [],
      agreeAll: false,
      personalInfoTerms: false,
      email: "",
      password: "",
      confirmedPassword: "",
      username: "",
    },
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 py-5"
    >
      <Input
        register={register("email")}
        label="이메일"
        name="email"
        placeholder="honggildong@gmail.com"
        error={errors.email?.message}
      />
      <Input
        register={register("username")}
        label="닉네임"
        name="username"
        placeholder="알파벳, 한글, 숫자를 10자 이하로 입력해주세요."
        error={errors.username?.message}
      />
      <InterestsBox control={control} />
      <TOS control={control} />
      <Button text="회원가입" type="submit" />
    </form>
  );
}
