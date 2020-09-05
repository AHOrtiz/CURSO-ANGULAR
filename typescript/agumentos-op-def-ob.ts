//Funcion anónima  auto invocada
(function () {
    // Función parámetro obligatorio colocar el tipo de dato en el argumento    
    function activar(quien: String) {

    }
    // Argumento por defecto 
    function activa(quien: String,objeto:String='batiseñal') {
        console.log (`${quien} activo la ${objeto}`);

    }
    //  Argumento por opcion
    /* MANERA DE COLOCAR LOS ARGUMENTOS 
        1) Argumentos  obligatorios (Siempre va primero)
        2) Argumentos opcionales lleva un ? 
        3) Argumentos por defecto
        
    */ 
    function activate (quien    : String,
                        momento?:String, 
                        objeto  :String='batiseñal'                       
                       ) {
        if(momento){
            console.log (`${quien} activo la ${objeto} en la ${momento}`);
        }else{
            console.log (`${quien} activo la ${objeto}`);
            
        }

    }
    activar("Gordon");
    activa("Allison", 'carro');
    activate('Gordon','batiseñal', 'tarde');
})();