//Funcion anónima  auto invocada
(() => {

   const sumar =(a:number, b:number):number=>a +b ;

   const nombre=():string=>"Hola allis";
   const obtenerSalario=():Promise<string>=>{
    return  new Promise((resolve,reject)=>{
        resolve('Irwing');
    });

   }
   obtenerSalario().then(a=>console.log(a.toUpperCase()))

   
})();


