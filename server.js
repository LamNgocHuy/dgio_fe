const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + "/dist/index.html");
  });

const port = process.end.PORT || 8080
app.listen(port)

console.log("Listen on port: " + port)