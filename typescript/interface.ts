//Funcion anónima  auto invocada
(() => {
 /*Xmen tiene que ser un objeto
 qaue tiene por lo menos el nombre
  */

  /*INTERFACE:  
  no tiene constructor
Son las reglas para que puedan utilizar como un tipo
  */
 interface Xmen{
     nombre  : string;
     edad    : number;
    //  Si se requiere que una propiedad sea opcional se coloca ?
    poder?   :string;
 }
    const enviarMision=(xmen:Xmen)=>{

        console.log(`Enviando a ${xmen.nombre} a la mision`);
    }

    const regresarAlCuartel=(xmen:Xmen)=>{
        console.log(`Regresando al cuartel ${xmen.nombre}`);
    }

    const wolvorine:Xmen={
        nombre:'Logan',
        edad:60 
    }

    enviarMision(wolvorine);
    regresarAlCuartel(wolvorine);

})();


