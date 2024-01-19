let valorPantalla = '';

function limpiarPantalla(){
    valorPantalla = '';
    actualizarPantalla();
}

function agregarCaracter(char){
    valorPantalla += char;
    actualizarPantalla();
}

function calcular(){
    try {
        valorPantalla = eval(valorPantalla).toString();
        actualizarPantalla();
    } catch (e) {
        valorPantalla = 'Vos Error!!!';
        actualizarPantalla();
    }
}

function actualizarPantalla(){
    document.getElementById('pantalla').value = valorPantalla;
}