document.getElementById('crip')
    .addEventListener('click', criptografar);

document.getElementById('descrip')
    .addEventListener('click', descriptografar);

function criptografar(){
    var msg = document.getElementsByName('entrada')[0].value;
    msg = msg.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replaceAll(/(e)/gm, 'enter')
        .replaceAll(/(i)/gm, 'imes')
        .replaceAll(/(a)/gm, 'ai')
        .replaceAll(/(o)/gm, 'ober')
        .replaceAll(/(u)/gm, 'ufat');

    var campo = document.getElementsByClassName('msg-group')[0];
    while (campo.firstChild) {
        campo.removeChild(campo.lastChild);
    }

    var div = document.createElement('div');
    campo.appendChild(div);

    var p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = msg;
    p.style.textAlign = 'left';
    p.id = 'mensagem';

    var button = document.createElement('button');
    div.appendChild(button);
    button.innerText = 'Copiar';
    button.id = 'copiar';


    document.getElementById('copiar')
    .addEventListener('click', ()=>{
        let msg = document.getElementById('mensagem').innerText;
        navigator.clipboard.writeText(msg);
        alert('Copiado para a área de transferência!');
    });
}


function descriptografar(){
    var msg = document.getElementsByName('entrada')[0].value;
    msg = msg.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replaceAll(/(enter)/gm, 'e')
        .replaceAll(/(imes)/gm, 'i')
        .replaceAll(/(ai)/gm, 'a')
        .replaceAll(/(ober)/gm, 'o')
        .replaceAll(/(ufat)/gm, 'u');

    var campo = document.getElementsByClassName('msg-group')[0];
    while (campo.firstChild) {
        campo.removeChild(campo.lastChild);
    }

    var div = document.createElement('div');
    campo.appendChild(div);

    var p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = msg;
    p.style.textAlign = 'left';
    p.id = 'mensagem';

    var button = document.createElement('button');
    div.appendChild(button);
    button.innerText = 'Copiar';
    button.id = 'copiar';


    document.getElementById('copiar')
    .addEventListener('click', ()=>{
        let msg = document.getElementById('mensagem').innerText;
        navigator.clipboard.writeText(msg);
        alert('Copiado para a área de transferência!');
    });
}