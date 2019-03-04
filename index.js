
var express = require('express')
var app = express()
var usercontroller = require('./controllers/userController')


app.use(function (req, res, next) {
   console.log('Time: %d', Date.now());
   next();
});


// GET request for list of all users.
app.get('/users', usercontroller.list);


// GET request for list of all users.
app.get('/user/:id', usercontroller.detail);

// // Get method route
// app.get('/', function (req, res) {
//     res.send('application is running')
//   })
  
//   // Get method route
//   app.get('/about', function (req, res) {
//     res.send('about app')
//   })
 
//  // POST method route
//  app.post('/', function (req, res) {
//     res.send('POST request to the homepage')
//   })
 
//   app.get('/user/:userId', function (req, res) {
//     res.send(req.params.userId)
//   })

  app.listen(8081)

console.log('Server running at http://localhost:8081/');