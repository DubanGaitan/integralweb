var http = require("http");
var url = require("url");
const utf8 = require('utf8');

function iniciar(route, handle) {
  function onRequest(request, response) {
        var dataPosteada = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Peticion para " + pathname + " recibida.");
        console.log(request.addListener("data"));

        //request.setEncoding("utf8");

        request.addListener("data", function(trozoPosteado) {
          dataPosteada += trozoPosteado;
          console.log("Recibido trozo POST '" + trozoPosteado + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, dataPosteada);
    });

  }

  http.createServer(onRequest).listen(8000);
  console.log("Servidor Iniciado");
}

exports.iniciar = iniciar;