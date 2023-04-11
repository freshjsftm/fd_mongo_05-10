const http = require('http');
const yup = require('yup');
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://localhost:27017/mongoose')
        .catch(err=>{
          console.log(err);
          process.exit(1);
        });

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;
server.listen(PORT, ()=>{
  console.log('server started at port = ', PORT)
})

