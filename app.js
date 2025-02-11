const express = require('express');
const app = express();

const PORT = 3000;

app.get('/gay.php/meow.php.jpg', (req,res) => {
  console.log(req.path);
  res.sendFile(__dirname + '/public/shell.php');
})

const server = app.listen(PORT, () => {
  console.log("server is running on port ", 3000);
});
