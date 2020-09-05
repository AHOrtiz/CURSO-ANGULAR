//Funcion anónima  auto invocada
(() => {
 
  
  const avenger = {
    nombre: "Steve",
    clave: "Capitán América",
    poder: "Droga",
  };

  // DESESTRUCTURACION DE OBJETOS
  /* Toma el objeto avenger y extrae las propiedades ,
    siempre y cuando sea objeto se puede poner en desorden
    las propiedades.  
    */
  const extraer = ({ nombre, poder }: any) => {
    console.log(nombre);
    console.log(poder);
  };
//   extraer(avenger);
// Se creo un arreglo de tipo string y no puede aceptar otro tipo de dato
  const avengers:string[]=['Thor','Hulk','Ironman'];

/*  DESTRUTURAR UN ARREGLO LLEVA [] 
Y SI SON PROPIEDADES DE UN OBJETO LLEVA {}*/ 
// Se puede poner cualquier nonmbre 
// const [,,ironman] unicamente queremos la ultima posicion 
const [thor,monstruo,ironman]=avengers;    
// console.log(thor);
// console.log(monstruo);
// console.log(ironman);

const extraerArr = ([thor, hulk,ironman]:string[]) => {
    console.log(thor);
    console.log(hulk);
    console.log(ironman);
  };
  extraerArr(avengers);
})();
/*La destruturación  nos sirve para
extraer cosas de un objeto o arreglo
*/

