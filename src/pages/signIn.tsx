import logo from "@/assets/logo-transparent.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow">
        <div className="flex items-center justify-center gap-4">
          <img src={logo} alt="Formation-Lab 로고" className="h-12" />
          <h1 className="text-brand-green text-2xl font-bold tracking-wide sm:text-3xl">
            Formation-Lab
          </h1>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="text-[14px] text-[rgba(51,65,85,1)]"
              >
                이메일
              </Label>
              <Input
                className="py-5"
                type="email"
                placeholder="이메일 주소를 입력해 주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="password"
                className="text-[14px] text-[rgba(51,65,85,1)]"
              >
                비밀번호
              </Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-5"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
              />
              <p className="text-muted-foreground text-sm">6자리 이상</p>
            </div>

            <Button className="cursor-pointer rounded-full py-5">로그인</Button>

            <div className="text-center">
              <Link
                className="text-muted-foreground hover:underline"
                to={"/signup"}
              >
                계정이 없으신가요? 회원가입
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
