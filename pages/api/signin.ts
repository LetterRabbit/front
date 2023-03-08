import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOption } from '../../src/lib/sessionOption';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    console.log('req', req);

    req.session[sessionOption.userSession] = { ...req.body };
    await req.session.save();
    res.send({ ...req.body });
  }
};

// 86400
export default withIronSessionApiRoute(handler, sessionOption.ironConfig);
