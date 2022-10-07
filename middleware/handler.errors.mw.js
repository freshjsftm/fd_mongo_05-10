const {CastError} = require('mongoose');

module.exports.castErrors = (err, req, res, next)=>{
  if(err instanceof CastError){
    return res.status(404).send('Not found!!!')
  }
  next(err);
}

module.exports.handlerErrors = (err, req, res, next)=>{
  const status = err.status || 500;
  res.status(status).send(err.message || 'Server errors')
}


  //console.log('error======>>>>>>', err)