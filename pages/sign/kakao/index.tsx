import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useCallback, useEffect } from "react";

const Kakao = () => {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      try {
        const response: any = await axios.post(
          "https://letterforyou.link/users/login",
          null,
          {
            headers: {
              "Content-Type": "application/json",
              authCode: JSON.stringify(code),
            },
          }
        );

        if (!!response.data.access_token) {
          setCookie(null, "access_token", response.data.access_token, {
            maxAge: 60 * 60 * 24 * 365,
            path: "/",
          });

          router.push("/main");
        } else {
          // 실패하면 에러 페이지로 리다이렉트
          // router.push("/notifications/authentication-failed");
        }
      } catch (error) {
        console.log(error);
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
