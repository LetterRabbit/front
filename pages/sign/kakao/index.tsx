import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const Kakao = () => {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      try {
        const response: any = await axios.post(
          "http://52.79.233.124:8000/users/login",
          {
            data: null,
          },
          {
            headers: {
              "Content-Type": "application/json",
              authCode: JSON.stringify(code),
            },
          }
        );

        if (response) {
          console.log("success", response);
          router.push("/main");
        } else {
          // 실패하면 에러 페이지로 리다이렉트
          router.push("/notifications/authentication-failed");
        }
      } catch (error) {
        console.error(error);
      }
    },
    [router]
  );

  useEffect((): any => {
    if (authCode) {
      loginHandler(authCode);
    } else if (kakaoServerError) {
      router.push("/notifications/authentication-failed");
    }
  }, [loginHandler, authCode, kakaoServerError, router]);

  return <div>로그인중...</div>;
};

export default Kakao;
