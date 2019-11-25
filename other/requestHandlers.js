var math = require("mathjs");
const utf8 = require('utf8');

math.import(require('mathjs-simple-integral'));
console.log(math.integral('x^2', 'x'));

function iniciar(response, postData) {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<input name="text">'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function subir(response, dataPosteada) {
  //console.log(utf8.decode(dataPosteada));
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<label> Solución </label>'+
    '<div>'+ math.integral("'"+dataPosteada+"'", 'x') + '</div>' +
    '<button >Estoy en huelga...</button>'+
    '<script>'+
    ''+
    '</script>'+
    '</body>'+
    '</html>';
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;