const inputPeso = document.getElementById("peso")
const inputNombre = document.getElementById("nombre")
const inputUnidad = document.getElementById("uni")
const boton = document.getElementById("boton")
const parrafo = document.getElementById("result")
const titulo = document.getElementById("titulo")

function kgALibras(nombre, unidad, peso) {
    if (peso <= 0 || isNaN(peso)) {
        return `Por favor ingrese un peso válido`
    }
    if (unidad.toLowerCase() === "kg" || unidad.toLowerCase() === "kilos" || unidad.toLowerCase() === "kilogramos") {
        const pKilo = peso * 0.453592;
        return `Hola ${nombre} tu peso en kilos es de ${pKilo.toFixed(2)}`;
    } else if (unidad.toLowerCase() === "lb" || unidad.toLowerCase() === "libras") {
        const pLibra = peso * 2.204622;
        return `Hola ${nombre} tu peso en libras es de ${pLibra.toFixed(2)}`
    } else {
        return `Error ${unidad} no es una unidad válida`
    }
}

inputUnidad.addEventListener("change", () => {
    const unidadT = inputUnidad.value;

    if (unidadT === "kg") {
        titulo.textContent = "De Libras a Kilos"
    } else if (unidadT === "lb") {
        titulo.textContent = "De Kilos a Libras"
    }
})

boton.addEventListener("click", () => {
    const pesoT = parseFloat(inputPeso.value.replace(",", "."));
    const nombreT = inputNombre.value;
    const unidadT = inputUnidad.value;

    parrafo.textContent = kgALibras(nombreT, unidadT, pesoT)
})
