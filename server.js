const express = require('express');
const app = express();
const ip = process.env.IP ||'0.0.0.0';
const port = process.env.PORT || 8080;

// console.log that your server is up and running
app.listen(port, ip, function() {
 console.log('running at ' + ip + ':' + port);
});

