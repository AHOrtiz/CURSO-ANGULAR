//Funcion anónima  auto invocada
(() => {
 console.log('Inicio ');

// Definir una promesa 
/*Se va a ejecutar resolve cuando no haya errores 
Reject si sucede aslgun tipo de errorr
Las peticiones son muy utilizadas para hacer peticiones a servicios 
web 
*/ 
const prom1 = new Promise((resolve,reject)=>{
setTimeout(()=>{
    reject('Se termino el timeout');
},1000);
});
//  Then es cuando se realiza todo exitosamente y catch cuando sucede algun error
prom1
.then(mensaje =>console.log(mensaje))
.catch(err =>console.warn(err));
 console.log('Fin'); 
  
})();


