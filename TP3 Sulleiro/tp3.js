function ej1() {
    let numero = parseInt(prompt("Ingrese un número"));
    let suma = 0;
    while (numero >= 0) {
        numero = parseFloat(prompt("Ingrese la cantidad de números desee"));
        suma = suma + numero;
    }
    console.log("La suma total de los numeros es: " + suma);
}
function uno() {
    let suma = 0;
    let num = parseFloat(prompt("Ingrese un numero (negativo para finjalizar):"))
    while (isNaN(num)) {
        alert("Ingreso invalido. Por favor ingrese un numero");
        num = parseFloat(prompt("Ingrese un numero (negativo para finjalizar):"))
    }
    while (num >= 0) {
        suma += num;
        num = parseFloat(prompt("Ingrese otro numero (negativo para finjalizar):"))
        while (isNaN(num)) {
            alert("Ingreso invalido. Por favor ingrese un numero");
            num = parseFloat(prompt("Ingrese otro numero (negativo para finjalizar):"))
        }
    }
}
function ej2() {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    let numero
    for (let i = 0; i < 10; i++) {

        numero = parseFloat(prompt("ingrese 10 numeros"));
        if (numero > 0) {
            positivos++;
        } else {
            if (numero < 0) {
                negativos++;
            } else {
                ceros++;
            }
        }
        console.log("Positivos: " + positivos + "negativos: " + negativos + "ceros: " + ceros)
    }
}
function dos() {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    let numero;

    for (let i = 0; i < 10; i++) {

        numero = parseFloat(prompt("ingrese 10 numeros"));

        while (isNaN(numero)) {
            alert("Entrada inválida. Por favor, ingrese un numeoto");
            numero = parseFloat(prompt("ingrese 10 numeros"));
        }

        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        } else {
            ceros++;
        }
    }

    console.log("Positivos: " + positivos + ", Negativos: " + negativos + ", Ceros: " + ceros);
    alert("Positivos: " + positivos + ", Negativos: " + negativos + ", Ceros: " + ceros);
}


function ej3() {
    // Ingresaer numeros hasta que el usuaurio escriba 0.
    //  Calcular el promedio de los numeros positivos. Utilizar while
    let num = parseFloat(prompt("Ingrese un numero"))
    let suma = 0;
    let contador = 0;
    while (num !== 0) {
        if (num > 0) {
            suma += num;
            contador++;
        }
        num = parseFloat(prompt("Ingrese otro numero"))
    }
    if (contador > 0) {
        let promedio = suma / contador;
        alert("El promedio total de positivos:", promedio);
    } else {
        alert("No se ingresaron numeros positivos");
    }
}
function tres() {
    // Ingresaer numeros hasta que el usuaurio escriba 0.
    //  Calcular el promedio de los numeros positivos. Utilizar while
    let num = parseFloat(prompt("Ingrese un numero"))
    let suma = 0;
    let contador = 0;
    while (isNaN(num)) {
        alert("Ingreso invalido. Por favor ingrese un numero");
        num = parseFloat(prompt("Ingrese un numero (cero para finalizar):"))
    }
    while (num !== 0) {
        if (num > 0) {
            suma += num;
            contador++;
        }
        num = parseFloat(prompt("Ingrese otro numero"))
    }
    while (isNaN(num)) {
        alert("Ingreso invalido. Por favor ingrese un numero");
        num = parseFloat(prompt("Ingrese un numero (negativo para finalizar):"))
    }
    if (contador > 0) {
        let promedio = suma / contador;
        alert("El promedio total de positivos:", promedio);
    } else {
        alert("No se ingresaron numeros positivos");
    }
}
function ej4() {
    // Solicitar 5 edades e indicar cuantos son mayores de edad.
    //  Si la edad es mayor a 65, contarla en un grupo especialo. Usar for.
    let mayoredad = 0;
    let especial = 0;
    for (let i = 0; i < 5; i++) {
        let edades = parseInt(prompt("Ingrese 5 edades"));
        if (edades < 18) {
            mayoredad++;
            if (edades > 65) {
                especial++;
            } else {

            }
            console.log("Total de mayores de edad: " + mayoredad);
            console.log("Total en grupo especial: " + especial);
        }
    }
}
function cuatro() {
    // Solicitar 5 edades e indicar cuantos son mayores de edad.
    // Si la edad es mayor a 65, contarla en un grupo especial. Usar for.

    let mayoredad = 0;
    let especial = 0;

    for (let i = 0; i < 5; i++) {
        let edad = parseFloat(prompt("ingrese 5 edades"));

        if (isNaN(edad)) {
            alert("Ingreso inválido. Por favor ingrese un número");
            i--;
        } else {

            if (edad >= 18) {
                mayoredad++;
            }
            if (edad > 65) {
                especial++;
            }
        }
    }
    console.log("Total de mayores de edad: " + mayoredad);
    console.log("Total en grupo especial (>65): " + especial);

}
function ej5() {
    //mostrar los numeros del 1 al 50.
    //  Indicar ademas cuantos son multiplos de 3 y cuantos de 5. Usar for.
    let multiplos3 = 0;
    let multiplos5 = 0;


    console.log(i);

    if (i % 3 === 0) {
        multiplos3++;
    }
    if (i % 5 === 0)
        multiplos3++;
}
console.log("Los multiplos de 3 son: " + multiplos3);
console.log("Los multiplos de 5 son: " + multiplos5);

function ej6() {
    //ingresar numeros hasta que se ingrese uno mayor a 100.
    //Contar cuantos numeros se ingresaron y acumular su su suma. 
    //Utilizar do...while 
    let numero;
    let contador = 0
    let suma = 0
    do {
        numero = parseInt(prompt("ingrese numeros"));
        suma = suma + numero;
        contador++;
    } while (numero <= 100)
    console.log("se ingresaron:" + contador);
    console.log("la suma es:" + suma);
}
    function seis() {
    //ingresar numeros hasta que se ingrese uno mayor a 100.
    //Contar cuantos numeros se ingresaron y acumular su su suma. 
    //Utilizar do...while 
    let numero;
    let contador = 0
    let suma = 0
    do {
        numero = parseInt(prompt("ingrese numeros"));
        suma = suma + numero;
        contador++;
     } while (isNaN(num)) 
        alert("Ingreso invalido. Por favor ingrese un numero");
        num = parseFloat(prompt("Ingrese un numero (negativo para finalizar):"))
    } while (numero <= 100)
    console.log("se ingresaron:" + contador);
    console.log("la suma es:" + suma);
    function ej7() {
        //Pedir 10 numeros e informar el mayor y el menor. Usar for 
        let num = parseFloat(prompt("Ingrese 10 numeros"));
        let max = num
        let min = num

        for (let i = 0; i < 9; i++) {
            num = parseFloat(prompt("Ingrese 10 numeros"));

            if (num > max) {
                max = num;
            }
            if (num < min) {
                min = num;
            }
        }

        alert("El max es: " + max + " El min es: + " + min);

    function ej8() {
        //Solicitar numeros hasta ingresar un  numero negativo.
        //  Informar cuantos numeros pares e impares se ingresaron. Usar while
        let numero = parseInt(prompt("Ingrese un número (negativo para terminar):"));
        let pares = 0;
        let impares = 0;

        while (numero >= 0) {
            if (numero % 2 === 0) {
                pares++;
            } else {
                impares++;
            }
            numero = parseInt(prompt("Ingrese un número (negativo para terminar):"));
        }
        console.log("Cantidad de números pares: " + pares);
        console.log("Cantidad de números impares: " + impares);
    }
    function ej9() {
        //ingresar 15 notas de alumnos.
        //  Calcular el promedio general y la cantidad de aprobados (nota>=7) y desaprobados. Usar for
        let sumaNotas = 0;
        let aprobados = 0;
        let desaprobados = 0;
        let totalNotas = 0

        for (let i = 1; i <= 15; i++) {
            let nota = parseFloat(prompt(`Ingrese la nota ${i} (0-10):`));

            if (nota >= 0 && nota <= 10) {
                sumaNotas += nota;

                // Contar aprobados y desaprobados
                if (nota >= 7) {
                    aprobados++;
                } else {
                    desaprobados++;
                }
            } else {
                alert("Nota inválida. Por favor ingrese un número entre 0 y 10.");
                i--; // Restar 1 al contador para repetir la iteración
            }
        }
        let promedio = sumaNotas / totalNotas;

        // Mostrar resultados
        console.log("Promedio general: " + promedio);
        console.log("Cantidad de aprobado:" + aprobados);
        console.log("Cantidad de desaprobados: " + desaprobados);
        function ej10() {
            //Simular un sistma de facturacion:
            // ingresar precios de productos hasta que se ingrese 0.
            //  Calcular el total a pagar. Si el total supera 10000, aplicar un 10% de descuento. Usar do...while.
            let precioTotal;
            let precios;

            do {
                precios = parseFloat(prompt("Ingrese precios de productos (0 para salir):"));
                precioTotal += precios
            } while (precios !== 0);
            if (total > 1000) {
                precioTotal = precioTotal * 0.10;
            }
            alert("Total a pagar:" + precioTotal);
        }
    }
}
