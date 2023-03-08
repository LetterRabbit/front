import { sessionOption } from './../../src/lib/sessionOption';
import { withIronSessionApiRoute } from 'iron-session/next';

function handler(req, res) {
  if (req.method === 'POST') {
    req.session.destroy(sessionOption.userSession);
    res.send({ ok: true });
  }
}

export default withIronSessionApiRoute(handler, sessionOption.ironConfig);
