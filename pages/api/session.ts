import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOption } from '../../src/lib/sessionOption';

function handler(req, res) {
  const response = req.session[sessionOption.userSession];

  let session = {
    login: false,
  };

  if (response) {
    session = { login: true };
  }

  return res.send({
    ...session,
  });
}

export default withIronSessionApiRoute(handler, sessionOption.ironConfig);
