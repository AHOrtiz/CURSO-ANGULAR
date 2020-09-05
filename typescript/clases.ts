//Funcion anónima  auto invocada
(() => {

    class Avenger {
        // puede existir propiedades opcionales colocando ? antes de los :
        // nombre: string;
        // equipo: string;
        // nombreReal: string;

        // puedePelear: boolean;
        // peleasGanadas: number;

        // constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas: number) {
        //     this.nombre = nombre;
        //     this.equipo = equipo;
        //     this.nombreReal = nombreReal;
        //     this.puedePelear = puedePelear;
        //     this.peleasGanadas = peleasGanadas;

        // }
        constructor (public nombre:string,
                     public  equipo:string,
                     public nombreReal?:string,
                     public puedePelear?:boolean,
                     public peleasGanadas?:number
             ){ }

    }

    const antman = new Avenger('Antman', 'capi');

    console.log(antman);

})();


