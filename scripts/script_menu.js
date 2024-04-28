document.addEventListener('scroll', function() {
    var posicaoY = window.pageYOffset;
    if(posicaoY >= 50){
        handleSetLayoutOutMenu();
    }else {
        handleSetLayoutDefaultMenu();
    }
});

handleSetLayoutDefaultMenu  = () => {
    let containerMenu       = document.querySelector('#div-container-menu');
    let logoMenu            = document.querySelector('#img-logo-menu');
    let iconLogin           = document.querySelector('#img-icon-login');
    logoMenu.src            = './image/stream_verse__branco.png';
    iconLogin.src           = './image/icon_person_branco.png';
    containerMenu.classList.remove('div-container-menu-out');
    containerMenu.classList.add('div-container-menu-in');

    let itensMenu       = document.querySelectorAll('.span-item-menu');
    itensMenu.forEach((item) => {
        item.classList.remove('span-item-menu-custom');
    });
}

handleSetLayoutOutMenu  = () => {
    let containerMenu   = document.querySelector('#div-container-menu');
    let logoMenu        = document.querySelector('#img-logo-menu');
    let iconLogin       = document.querySelector('#img-icon-login');
    logoMenu.src        = './image/stream_verse_menu_bg300.png';
    iconLogin.src       = './image/icon_person_bg300.png';
    containerMenu.classList.remove('div-container-menu-in');
    containerMenu.classList.add('div-container-menu-out');

    let itensMenu       = document.querySelectorAll('.span-item-menu');
    itensMenu.forEach((item) => {
        item.classList.add('span-item-menu-custom');
    });
}