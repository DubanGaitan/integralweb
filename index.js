var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var math = require("mathjs");
//var mathjsSimpleIntegral = require("mathjs-simple-integral");
math.import(require('mathjs-simple-integral'));

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);

console.log(math.integral('x^2', 'x'));
