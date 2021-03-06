var express = require('express');
var child_process = require('child_process');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/delete-users/:amount', function(req, res) {
  var amount = req.params.amount;
  console.log('delete amount %s', amount);
  child_process.exec('node remove_users.js ' + amount, function(error, stdout, stderr) {
      res.send(stdout);
  });
});

app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App runing at http://%s:%s', host, port);
});

