function kgALibras(nombre, unidad, peso) {
    if (peso <= 0 || isNaN(peso)) {
        return `Por favor ingrese un peso valido`
    }
    if (unidad.toLowerCase() === "kg" || unidad.toLowerCase() === "kilos" || unidad.toLowerCase() === "kilogramos") {
        const pKilo = peso * 0.453592;
        return `Hola ${nombre} tu peso en kilos es de ${pKilo}`;
    } else if (unidad.toLowerCase() === "lb" || unidad.toLowerCase() === "libras") {
        const pLibra = peso * 2.204622;
        return `Hola ${nombre} tu peso en libras es de ${pLibra}`
    } else {
        return `Error ${unidad} no es una unidad valida`
    }
}

const nombre = prompt("introduce tu nombre");
const unidad = prompt("Indica si quieres transformar a kilos o libras");
const peso = parseFloat(prompt("Introduce el peso").replace(",", "."));

console.log(kgALibras(nombre, unidad, peso));