import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';
const verificaToken = (req, res, next) => {
  // pega o bearer
  const bearerHeader = req.headers['authorization'];

  // checa se o bearer é undefined
  if (typeof bearerHeader !== 'undefined') {
    // Dá o split pra pegar o que vier depois de um espaço da palavra Bearer
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];

    // req.token = bearerToken;

    // next();
    //verifica se o token é válido
    jwt.verify(token, 'fit@123400', (err, dados) => {
      if (err) {
        res.sendStatus(HttpStatus.FORBIDDEN);
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(HttpStatus.FORBIDDEN);
  }
};

export default () => verificaToken;
