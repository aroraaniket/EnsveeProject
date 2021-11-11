const jwt = require('jsonwebtoken');

const config = require('config');

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  //console.log(token);
  if (token) {
    const onlyToken = token.slice(7, token.length);//change from process.env.JWT_SECRET to config .get
    jwt.verify(onlyToken, config.get('JWT_SECRET'), (err, decode) => {
      if (err) {
        return res.status(401).send({ message: 'Invalid Token' });
      }
      req.user = decode;
      console.log(req.user);
      //console.log(req.user.user.Admin);
      next();
      return;
    });
  } else {
    return res.status(401).send({ message: 'Token is not supplied.' });
  }
 
};


module.exports = { isAuth };




