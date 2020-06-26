const express = require('express');
const app = express();
const ip = process.env.IP ||'127.0.0.1';
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, ip, function() {
 console.log('running at ' + ip + ':' + port);
});

