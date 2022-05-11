const express = require('express');
const cors = require('cors');
const cookieParsar = require('cookie-parser');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParsar());


// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.post('/search-webpage', function(req, res) {
  console.log(req.params);
  console.log(req.body);
  res.end();
});

app.listen(8080);
console.log('Server is listening on port 8080');
