import jwt from 'jsonwebtoken';

class Autenticacao {
  constructor(app, req, res) {
    this.app = app;
    this.req = req;
    this.res = res;
    this.key = 'fit@123400';
  }

  //método, por enquanto, não acessa o banco de dados. Apenas um teste.

  autentica() {
    if (this.req.body.email && this.req.body.password) {
      const { email, password } = this.req.body;
      const user = {
        id: 1,
        username: 'André',
        email
      };
      jwt.sign({ user }, this.key, { expiresIn: '1h' }, (err, token) => {
        this.res.json({ token });
      });

      return;
    }
    this.res.sendStatus(400);
  }
}

export default () => Autenticacao;
