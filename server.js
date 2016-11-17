var express = require('express');
var app = express();

app.use( express.static('dist') );

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.get("/api/v0/heroes", function(req, res) {
  res.json([{
    id: 1,
    name: 'Superman'
  }, {
    id: 2,
    name: 'Batman'
  }, {
    id: 3,
    name: 'Spiderman'
  }])
});

app.listen(process.env.PORT || 9080, function() {
    console.log("Server listening on port 9080");
});
