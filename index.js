const express = require('express');
const cors = require('cors');
const cookieParsar = require('cookie-parser');
const ServiceFactory = require('./src/service/service-factory');

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

app.post('/analyze-webpage', ServiceFactory);

app.listen(8080);
console.log('Server is listening on port 8080');
