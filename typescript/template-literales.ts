//Funcion anónima  auto invocada
(function () { 
    
    function  getEdad (){
        return 100+100+300;
    }
    const nombre   = 'Fernando';
    const apellido = 'Herrera';
    const edad     =  23;

    const salida=`${nombre} \n${apellido} \n(${getEdad()}) `;
    console.log(salida);
})();