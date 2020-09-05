//Funcion anónima  auto invocada
(() => {

 // Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;
const PERSONAJE = {
  nombre: nombre,
  edad: edad
};
 
 
// Cree una interfaz que sirva para validar el siguiente objeto
interface Batman {
  nombre:  string,
  artesMarciales: string[];
}
const batman:Batman={
    nombre:'Bruno Diaz',
    artesMarciales:['karate','alkido','wing chun','jitsu']

}
 
 
// Convertir esta funcion a una funcion de flecha
const operacion=( a:number, b:number )=>(a+b)*2;
  

 
 
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function Avenger( nombre:string
    , poder?:string, arma:string='arco' ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};
 
 
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
   constructor(public base:number,
                public altura:number                    
){}

    calcularArea=()=> this.base*this.altura;

}
   
})();


