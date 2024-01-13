let inputNome           = document.querySelector('#input-nome');

inputNome.addEventListener('focusout', () => { 
    let toastInput              = document.querySelector('#div-container-info');
    toastInput.style.display    = 'flex';
    let lstSpans                = document.querySelectorAll('.span-default')

    lstSpans.forEach((item) => {
        toastInput.removeChild(item);
    })
    
    if(inputNome.value && inputNome.value.length > 0){
        let spanBemVindo        = document.createElement('span');
        spanBemVindo.classList.add('span-default'); 
        let spanTextoPalidromo  = document.createElement('span');
        spanTextoPalidromo.classList.add('span-default');
        let spanQtdCaracter     = document.createElement('span');
        spanQtdCaracter.classList.add('span-default');

        spanBemVindo.append(`Bem vindo ${inputNome.value}`);
        spanQtdCaracter.append(`Seu nome possuí ${inputNome.value.length} caracteres`);

        let inputNomeAux = '';

        for(let index = inputNome.value.length - 1; index >= 0; index--){
            inputNomeAux += inputNome.value[index];
        }

        if(inputNomeAux === inputNome.value){
            spanTextoPalidromo.append(`Seu nome é um palidromo`);
        }else {
            spanTextoPalidromo.append(`Seu nome não é um palidromo`);
        }
        
        toastInput.append(spanBemVindo);
        toastInput.append(spanQtdCaracter);
        toastInput.append(spanTextoPalidromo);
    }
});