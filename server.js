const http = require('http');
const yup = require('yup');
const mongoose = require('mongoose');
const app = require('./app');

const host = 'fd_mongo';

mongoose.connect(`mongodb://${host}:27017/fd_mongoose`)
        .catch(err=>{
          console.log(err);
          process.exit(1);
        });

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
server.listen(PORT, ()=>{
  console.log('server started at port = ', PORT)
})

