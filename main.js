const inputPeso = document.getElementById("peso")
const inputNombre = document.getElementById("nombre")
const inputUnidad = document.getElementById("uni")
const boton = document.getElementById("boton")
const parrafo = document.getElementById("result")

function kgALibras(nombre, unidad, peso) {
    if (peso <= 0 || isNaN(peso)) {
        return `Por favor ingrese un peso valido`
    }
    if (unidad.toLowerCase() === "kg" || unidad.toLowerCase() === "kilos" || unidad.toLowerCase() === "kilogramos") {
        const pKilo = peso * 0.453592;
        return `Hola ${nombre} tu peso en kilos es de ${pKilo.toFixed(2)}`;
    } else if (unidad.toLowerCase() === "lb" || unidad.toLowerCase() === "libras") {
        const pLibra = peso * 2.204622;
        return `Hola ${nombre} tu peso en libras es de ${pLibra.toFixed(2)}`
    } else {
        return `Error ${unidad} no es una unidad valida`
    }
}

boton.addEventListener("click", () => {
    const pesoT = parseFloat(inputPeso.value.replace(",", "."));
    const nombreT = inputNombre.value;
    const unidadT = inputUnidad.value;

    parrafo.textContent = kgALibras(nombreT, unidadT, pesoT)
})
