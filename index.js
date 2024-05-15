let arrayVacio =[];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0,1,2],['a','b','c']];
function suma(numero1, numero2){
    return numero1+numero2;
}
function potenciacion(numero1, numero2){
return Math.pow(numero1,numero2);
}
function separarPalabras(string){
    return string.split(' ');
}
function repetirString (string, numero){
    let frase = '';
    for(let i=0; i<numero; i++){
        frase = frase+string;
    }
    return frase;
}

function esPrimo(numero){
    for(let i=2; i<numero; i++){
        if(numero%i===0){
            return false;
        }
        return true;
    }
}

/* function ordenarArray(arrayNumero){
    for(let i=0; i<arrayNumero.length; i++){
        for(let j=0; j<arrayNumero.length; j++){
            if(arrayNumero[i]<arrayNumero[j]){
                arrayOrdenado.push(arrayNumero[i]);
            }
        }
    }
    return arrayOrdenado;
}
 */
function obtenerPares(arrayNumero) {
    let arrayPares = [];
    for (let i = 0; i < arrayNumero.length; i++) {

        if(arrayNumero[i]%2===0){
            arrayPares.push(arrayNumero[i]);
        }
        
    }
    return arrayPares;
}
function pintarArray(array) {
    array = array.toString();
    return array;
}
