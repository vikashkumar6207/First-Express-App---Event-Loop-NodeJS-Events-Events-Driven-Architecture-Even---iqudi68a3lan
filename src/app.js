const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // TODO: Implement handling of the root endpoint '/'
  
  res.send("Hello World!");
  
  // Replace this comment with your code to send "Hello World!"


});

app.get('/about', (req, res) => {
  // TODO: Implement handling of the '/about' endpoint
  
  res.send("Welcome to about page");
  
  // Replace this comment with your code to send "Welcome to about page"
});

app.listen(port, () => {
  console.log(`app listening at ${port}`);
});

// Export the Express app for testing purposes
module.exports = app;
