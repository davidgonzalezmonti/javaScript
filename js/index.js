/* Que el usuario cuando entre a la pantalla tenga las opciones para elegir sus stickers, 
y que se vayan agregando al carrito (un arrays), cada vez que selecciona uno, 
que salte un alert diciendo que agrego tal articulo al carrito. Despues que le de el total para finalizar la compra, 
con la suma del precio de los productos. A eso ofrecerle en cuantos pagos lo quiere realizar, y darle el total de
lo que seria como una factura, con el detalle final de la compra . Y VER si puedo colocar una opcion
donde el pueda seleccionar el producto por el nombre */


const arrayDeStickers = [];

const luffy = { nombre: "Luffy", tamaño: "10x10", precio: 150 }
const goku = { nombre: "Goku", tamaño: "8x8", precio: 130 }
const vegeta = { nombre: "Vegeta", tamaño: "6x6", precio: 110 }

alert("Bienvenido a Anime Stickers \n Seleccione sus stcikers:")
console.log(luffy, goku, vegeta);

function precioAPagar() {
    console.log("DETALLE DE SU COMPRA: \n");
    console.table(arrayDeStickers);
    const total = arrayDeStickers.reduce ((articulo, precios) => articulo + precios.precio, 0)
    console.log("Total a pagar: $" + total);
    compraStickers ();
    alert("Gracias por su compra ❤️".toUpperCase());
    
}
// -----------------------------------------------

const THIRTY = 30;
const TWENTY = 20;
const FIFTEEN = 15;
let oneHundred = 100;


const cuotas = (multiplicacion, division, cantCuotas) => {
    var porcentaje = 80 * multiplicacion / division;
            console.log("Intereses: " + porcentaje);
            var precioPagador = (porcentaje + 80) / cantCuotas;
            var precioTotal = 80 + porcentaje;
            console.log("Precio total: " + precioTotal);
            console.log("12 cuotas de: " + precioPagador);
            console.log("Gracias por su compra");
            return;
}

function compraStickers() {
    do {
        valor = Number (prompt("En cuantas cuotas lo queres pagar? \n 12 cuotas con recargo del 30% \n 6 cuotas con recargo del 20% \n 3 cuotas con recargo del 10% \n 1 cuota sin interes \n 0. Salir"));
        switch (valor) {
            case 12:
               return cuotas (THIRTY,oneHundred,12);
    
            case 6:
                return cuotas (TWENTY,oneHundred,6);
    
                case 3:
                    return cuotas (FIFTEEN,oneHundred,3);
    
                case 1:
                mensaje ("Total a pagar: ", resultado);
                console.log("Gracias por su compra");
                return;
    
                case 0:
                    console.log("Gracias por su visita");
                    break;
        
            default:
                console.log("seleccione una opcion correcta");
                break;
        }
    } while (valor !== 0 || valor === null );
}

    //-----------------------------------------------

function compraDeStickers () {
do {
    opcion = Number(prompt("Que stickers quieres llevar? \n 4. Luffy    3. Goku \n 2. Vegeta    1. Eliminar ultimo producto \n 0. Finalizar la compra"))
    switch (opcion) {
        case 4:
            arrayDeStickers.push(luffy);
                alert("Luffy se añado al carrito")
                
        
            break
        case 3:
            arrayDeStickers.push(goku);
            alert("Goku se añado al carrito")

            break

        case 2:
            arrayDeStickers.push(vegeta);
            alert("Vegeta se añado al carrito")

            break
        case 1:
            arrayDeStickers.pop();
            alert("Producto eliminado")
            break

        case 0:
            precioAPagar();
            break
        default:
            alert("Seleccione una opcion correcta");
            break
    }
} while (opcion !== 0 || opcion === null)
}

compraDeStickers();