let entrada = Number (prompt("Cuantos Stickers vas a llevar?"))
let stickers = 100
let resultado = entrada * stickers


const THIRTY = 30
const TWENTY = 20
const FIFTEEN = 15
let oneHundred = 100


let cuotas = (multiplicacion, division, cantCuotas) => {
    var porcentaje = resultado * multiplicacion / division
            console.log("Intereses: " + porcentaje);
            var precioAPagar = (porcentaje + resultado) / cantCuotas;
            var precioTotal = resultado + porcentaje;
            console.log("Precio total: " + precioTotal);
            console.log("12 cuotas de: " + precioAPagar);
            console.log("Gracias por su compra")
            return;
}

function mensaje (mensajeUno, mensajeDos){
    console.log (mensajeUno + mensajeDos);
}


function compraStickers() {
do {
    valor = Number (prompt("En cuantas cuotas lo queres pagar? \n 12 cuotas con recargo del 30% \n 6 cuotas con recargo del 20% \n 3 cuotas con recargo del 10% \n 1 cuota sin interes \n 0. Salir"))
    switch (valor) {
        case 12:
           return cuotas (THIRTY,oneHundred,12)

        case 6:
            return cuotas (TWENTY,oneHundred,6)

            case 3:
                return cuotas (FIFTEEN,oneHundred,3)

            case 1:
            mensaje ("Total a pagar: ", resultado);
            console.log("Gracias por su compra")
            return;

            case 0:
                console.log("Gracias por su visita");
                break;
    
        default:
            console.log("seleccione una opcion correcta");
            break;
    }
} while (valor !== 0 || valor === null )

}

mensaje ("Precio de lista: ", resultado);
compraStickers ();