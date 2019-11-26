const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const math = require("mathjs");

math.config({matrix:'Array'});



math.import(require('mathjs-simple-integral'));

//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/public'));

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/integrar', (req, res) => {
  let num1=req.body.integral;
  var inte = math.integral(req.body.Integral, 'x', {debugPrint: true});
  console.log(inte);
  console.log(math.eval('9 / 3 + 2i'));
  
  let pagina = '<!doctype html><html><head></head><body> <h1> Solución </h1>';
  pagina += '<div>'+ math.integral(req.body.Integral, 'x')  +'<b>+C</b></div';
  pagina += '</body></html>';
  res.send(pagina);

  //let pagina='<!doctype html><html><head></head><body>';
  //for(let x=num1;x<=num2;x++)
  //  pagina += `<a href="/mostrartabla?valor=${x}">${x}</a> - `;
  //pagina += 
  //
})

app.get('/mostrartabla', (req, res) => {
  let num=req.query.valor;
  num=parseInt(num);
  let pagina='<!doctype html><html><head></head><body>';
  for(let x=1;x<=10;x++) {
    let tabla=num * x;
    pagina += `${num} * ${x} = ${tabla} <br>`;
  }	
  pagina += '<a href="index.html">Retornar</a>';
  pagina += '</body></html>';
  res.send(pagina);	
})


var server=app.listen(8000, () => {
  console.log('Servidor web iniciado');
});