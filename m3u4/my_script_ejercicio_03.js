var alumnos = [
    { nombre: 'Juan Gomez',
      nota: 7
    },{
      nombre: 'Pedro Rodriguez',
      nota: 4
    },{
      nombre: 'Roxana García',
      nota: 8
    }, {
       nombre: 'Luciano Lopez',
       nota: 5
    }, {
       nombre: 'Fernanda Gimenez',
       nota: 6
    }, {
       nombre: 'Florencia Martinez',
       nota: 10
    }, {
       nombre: 'Raul Sanchez',
       nota: 7
    }, {
       nombre: 'Sandra Figueroa',
       nota: 8
    }
];

// const alumnosAprobados = alumnos.filter ((aprobado => {
//     return aprobado.nota >= 7;
// }));

// console.log(alumnosAprobados);


const aprobados = alumnos.filter(function (alumno){
   return alumno.nota >= 7;

});

console.log(aprobados);
console.log(`${aprobados.length} aprobados`);

for(let i = 0; i < aprobados.length; i++) {
   document.write(`<p> Alumno: ${aprobados[i].nombre}, Nota: ${aprobados[i].nota} <p>`)

};

