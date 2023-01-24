import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const Kakao = () => {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;

  //백엔드 POST request 요청하기...
  const loginHandler = useCallback(
    async (code: string | string[]) => {
      // 백엔드에 전송
      const response: ResponseType = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authCode: JSON.stringify(code)
        }
        // body: JSON.stringify({
        //   authCode: code,
        // }),
      }).then((res) => res.json());

      if (response) {
        console.log("response", response);
        // 성공하면 홈으로 리다이렉트
        router.push("/main");
      } else {
        // 실패하면 에러 페이지로 리다이렉트
        router.push("/notifications/authentication-failed");
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
