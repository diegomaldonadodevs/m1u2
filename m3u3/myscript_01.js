let num_dist = parseInt(prompt('Ingrese la distancia a recorrer:', ''));

console.log(`La distancia que ingresaste es ${num_dist} metros!`)

if (num_dist > 0 && num_dist <=1000) {
    document.write(`La distancia que ingresaste es ${num_dist} metros, deberías caminar un poco!`);
}

    else if (num_dist > 1000 && num_dist <= 10000) {
        document.write(`La distancia que ingresaste es ${num_dist} metros, deberías usar la bicicleta!`);
    }
    else if (num_dist > 10000 && num_dist <= 30000) {
        document.write(`La distancia que ingresaste es ${num_dist} metros, deberías ir en colectivo!`);
    }
    else if (num_dist > 30000 && num_dist <= 100000 ) {
        document.write(`La distancia que ingresaste es ${num_dist} metros, deberías ir en auto!`);
    
    }
    else {
        document.write(`La distancia que ingresaste es ${num_dist} metros, deberías viajar en avión!`);
    }



