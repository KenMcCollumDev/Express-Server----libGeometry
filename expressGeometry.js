// bring in express and my dice and geometry functions - just like for reeadline
var express = require('express') 
var app = express()
var libGeometry=require('./libGeometry.js');
console.log("here i am. ~/work/expressHW1/expressWorksheet1GeometryA.js")
// create the logger
var logger = function(req, res, next)
    {
        console.log(req.method, req.url);
        next();
    }

//pass the value of size to the dice app from the server, evaluate + return the value
app.get('/libGeometry/:type', function(req, res) {
console.log("Hit the page");
//    switch(reqs.params.type.toLowerCase()) {
  switch(req.params.type.toLowerCase()) {
        case "sphere":
            res.send("Given your radius, the volume of your sphere is " + libGeometry.volumeSphere(req.query.r));
            break;
        case "cone":
            res.send("Given your radius and height, the volume of your cone is  " + libGeometry.volumeCone(req.query.r, req.query.h));  //why query instead of params
            break;
        case "cylinder":
            res.send("Given your radius and height, the volume of your cylimder is  " + libGeometry.volumeCylinder(req.query.r, req.query.h));  //why query instead of params
            break;
        case "rectangular prism":
            res.send("Given your radius and height, the volume of your cone is  " + libGeometry.volumeRectangularPrism(req.query.l, req.query.w, req.query.h));  //why query instead of params
            break;
        default:
            res.send("please select from sphere, cone, cylinder, rectangular prism")
        }
    });

var listener = app.listen(65535, function() {
    console.log('Geometry App started on ' + listener.address().port);
});


//listen on my port
/*
app.listen(65535, function() {
    console.log('Geometry App started');
});
*/
