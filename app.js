const http = require('http');

const express = require('express');

const app = express();

// app.use('/', (req, res, next) => {
//   console.log('/ active');
//   next();
// })

// app.use('/', (req, res) => {
//   res.send('this is express');
// })

app.use('/users', (req, res) => {
  res.send(`
    <html>
      <ul>
        <li>Ali</li>
        <li>Bilal</li>
        <li>Daud</li>
      </ul>
    </html>
  `);
})

app.use('/', (req, res) => {
  res.send(`
    <html>
      <h1>Welcome to the best app in the world.</h1>
    </html>
  `);
})

app.listen(3000);