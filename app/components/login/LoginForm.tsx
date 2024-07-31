"use client";

import { useForm } from "react-hook-form";
import Input from "../common/Input";
import Button from "../common/Button";

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
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
        register={register("email", {
          required: "이메일은 필수 항목입니다.",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "유효한 이메일 주소를 입력하세요.",
          },
        })}
        label="이메일"
        name="email"
        placeholder="이메일을 입력해주세요."
        error={errors.email?.message}
      />
      <Input
        register={register("password")}
        label="비밀번호"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        error={errors.password?.message}
      />
      <Button text="로그인" type="submit" />
    </form>
  );
}
