function sumaNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('res');
    const suma = n1 + n2;
    
    resultado.innerHTML='Resultado: '+suma;
    
}

function restaNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('res');
    const resta = n1 - n2;
    
    resultado.innerHTML='Resultado: '+resta;
}

function multiplicaNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('res');
    const muliplica = n1 * n2;
    
    resultado.innerHTML='Resultado: '+muliplica;
}

function divideNumeros(){
    const n1 = parseFloat(document.getElementById('ent1').value);
    const n2 = parseFloat(document.getElementById('ent2').value);
    const resultado = document.getElementById('res');
    const divide = n1 / n2;
    
    resultado.innerHTML='Resultado: '+divide;
}

