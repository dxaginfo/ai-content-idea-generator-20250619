exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  res.status(500).json({
    message: err.message || 'Something went wrong on the server',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};
