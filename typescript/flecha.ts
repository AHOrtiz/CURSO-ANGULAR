//Funcion anónima  auto invocada
(function () {

   const miFucion =function(a:String){
       return a.toUpperCase;
   }
//    Funcion de flecha
// toUpperCase pasar a mayuscula 

     const miFuncionf = (a:String) =>a.toUpperCase;

    // console.log(miFucion('normal'));
    // console.log(miFuncionf('flecha'));

    const sumarN=function(a:number, b:number){
        return a + b;
    }
    const sumarf= (a:number,b:number) => a + b ;
    // console.log(sumarN(5,5));
    // console.log(sumarf(2,4));

    const hulk={
        nombre:'Hulk',
        smash(){
        setTimeout(()=>{
            console.log(`${this.nombre} smash !!`);

        },1000);
            
        }
    }

    hulk.smash();
})();