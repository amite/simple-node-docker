//Load express module with `require` directive
const express = require('express');
const app = express();

// const statusRouter = express.Router()

//Define request response in root URL (/)
app.get('/', function(req, res) {
  res.json({ message: 'hello amit' });
});

app.get('/status', function(req, res) {
  res.json({ message: 'success', status: res.statusCode });
});

//Launch listening server on port 8081
app.listen(8081, function() {
  console.log('app listening on port 8081!');
});
