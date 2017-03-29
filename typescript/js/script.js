var nombre = "Rogelio Fuentes";
var edad = 24;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE);
//Función flecha
var resultadoDoble = function (a, b) { return (a + b) * 2; };
//Parametros obligatorios, opcionales y por defecto
var getAvenger = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        //return mensaje=nombre+" tiene el poder de: "+poder+" y un arma: "+arma;
        return mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        return mensaje = nombre + " tiene un " + poder;
    }
};
//Clase
var Rectangulo = (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.area = function () {
        return (this.base) * (this.altura); //No se porque sale este error
    };
    return Rectangulo;
}());
console.info(new Rectangulo(2, 2).area());
