const nombre:String="Rogelio Fuentes";
const edad:Number=24;
let PERSONAJE:Personaje={
    nombre : nombre,
    edad: edad
}
//Interfaz
interface Personaje{
    nombre:String,
    edad:Number
}
console.log(PERSONAJE);
//Función flecha
let resultadoDoble=(a,b)=>(a+b)*2;
//Parametros obligatorios, opcionales y por defecto
let getAvenger=(nombre,poder?,arma="arco")=>{
    let mensaje:String;
    if(poder){
         //return mensaje=nombre+" tiene el poder de: "+poder+" y un arma: "+arma;
         return mensaje=`${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
    }
    else{
        return mensaje=nombre+" tiene un "+poder;
    }
}
//Clase
class Rectangulo{
    public base:Number;
    public altura:Number;
    constructor(base:Number,altura:Number){
        this.base=base;
        this.altura=altura;
    }
    public area():number{
        return (this.base)*(this.altura);//No se porque sale este error
    }
}
console.info(new Rectangulo(2,2).area());
