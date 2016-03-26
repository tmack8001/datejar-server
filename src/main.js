import path from 'path';
import bookshelf from './database/connection';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import gapiSchema from './schema';
import Activity from './models/activity';

const app = express();

app.set('bookshelf', bookshelf);

// Exposes static files hosted in public folder
app.use(express.static(path.join(__dirname, 'public')));

// traditional REST API
app.get('/api/activities', function (req, res) {
  Activity.fetchAll()
    .then(function (activities) {
      res.send(activities.toJSON());
    }).catch(function (error) {
    console.log(error);
    res.send('An error occurred');
  });
});

// Requests to /graphql redirect to /
app.all('/graphql', (req, res) => res.redirect('/'));

// Setup graphql base endpoint as well as enable interactive html
app.use('/', graphqlHTTP({
  schema: gapiSchema,
  pretty: true,
  graphiql: true
}));

// Listen for incoming HTTP requests
const listener = app.listen(process.env.PORT_NUM, () => {
  var host = listener.address().address;
  if (host === '::') {
    host = 'localhost';
  }
  var port = listener.address().port;
  console.log('Listening at http://%s%s', host, port === 80 ? '' : ':' + port);
});
