const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://daltonwinc2:05QF7EqzvxO49j26@notes-portal-cluster.yx1lcwb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
app.use(express.static('public'))