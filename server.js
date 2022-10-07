const http = require('http');
const yup = require('yup');
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://localhost:27017/fd_mongoose')
        .catch(err=>console.log(err));

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=>{
  console.log('server started at port = ', PORT)
})

