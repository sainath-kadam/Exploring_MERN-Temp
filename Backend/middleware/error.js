// middleware/error.js


//Middleware in a web application acts as a bridge between the incoming request and the final response.

const errorMiddleware = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  };
  
  module.exports = errorMiddleware;
  