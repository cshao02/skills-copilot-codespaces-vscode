// Create web server
// Create a route for comments
// Create a route for comments/:id

const express = require('express');
const app = express();
const PORT = 3000;

// Create a route for comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// Create a route for comments/:id
app.get('/comments/:id', (req, res) => {
  res.send(`This is the comments page for id ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});