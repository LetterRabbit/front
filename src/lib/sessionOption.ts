// iron-session options
export const sessionOption = {
  userSession: 'user_session',
  ironConfig: {
    cookieName: 'rabbit_cookie_session',
    password:
      '1234567889210;sljkjdkal;sfjklsdjfdfjijkccm112!!!@@99df824803840293',
    ttl: 3600 * 2,
    cookieOptions: {
      httpOnly: true,
      sameSite: 'strict' as 'strict',
      secure: false,
    },
  },
};
