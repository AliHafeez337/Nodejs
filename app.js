const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/users');
const indexRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);
app.use(indexRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'notFound.html'));
})

app.listen(3000);