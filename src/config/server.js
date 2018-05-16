import express from 'express';
import consign from 'consign';
import bodyParser from 'body-parser';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded( { extended: true } ) );


consign({cwd: 'src'})
.include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .then('app/controllers')
  .into(app);

export default app;
