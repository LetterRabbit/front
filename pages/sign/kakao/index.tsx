import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const Kakao = () => {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;

  // const loginHandler = useCallback(
  //   async (code: string | string[]) => {
  //     const response: ResponseType = await fetch(
  //       "http://127.0.0.1:8000/users/login",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           authCode: JSON.stringify(code),
  //         },
  //       }
  //     ).then((res) => res.json());

  //     if (response) {
  //       console.log("success", response);
  //       router.push("/main");
  //     } else {
  //       // 실패하면 에러 페이지로 리다이렉트
  //       router.push("/notifications/authentication-failed");
  //     }
  //   },
  //   [router]
  // );

  // useEffect((): any => {
  //   if (authCode) {
  //     loginHandler(authCode);
  //   } else if (kakaoServerError) {
  //     router.push("/notifications/authentication-failed");
  //   }
  // }, [loginHandler, authCode, kakaoServerError, router]);

  return <div>로그인중...</div>;
};

export default Kakao;
