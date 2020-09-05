"use strict";
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
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'capi');
    console.log(antman);
})();
