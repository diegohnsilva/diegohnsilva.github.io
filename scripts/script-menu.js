$(window).on('scroll', () => {    
    if(window.scrollY > 10) {
        $('#div-container-menu').addClass('color-menu-in');

        if(window.scrollY > 1600){
            setTimeout(() => {$('#div-card-atividade').addClass('vanishIn');},300);
            setTimeout(() => {$('#div-card-design').addClass('vanishIn');}, 600);
            setTimeout(() => {$('#div-card-projetos').addClass('vanishIn');}, 900);
            setTimeout(() => {$('#div-card-repositorio').addClass('vanishIn');}, 1200);
        }else {
            $('#div-card-atividade').removeClass('vanishIn');
            $('#div-card-design').removeClass('vanishIn');
            $('#div-card-projetos').removeClass('vanishIn');
            $('#div-card-repositorio').removeClass('vanishIn');
        }

    }else {
        $('#div-container-menu').removeClass('color-menu-in');
    }
});

$(window).on('beforeunload',() => {
    $(window).scrollTop(0);
});

handleAnimarTextoBanner = () => {
    setTimeout(() => {$('#span-banner-part-1').show();}, 3500);
    setTimeout(() => {$('#span-banner-part-2').show();}, 4500);
    setTimeout(() => {$('#span-banner-part-3').show();}, 5500);
    setTimeout(() => {$('#span-banner-part-4').show();}, 6500);
}

handleAnimarTextoBanner();

handleClickCardWork = () => {
    let lstCardsWork = document.querySelectorAll('.div-card-work');
    lstCardsWork.forEach((card) => {
        card.addEventListener("click", handleNavegarCardWork);
    });
}

handleClickCardWork();

function handleNavegarCardWork(event) {
    let idCard = event.currentTarget.id;
    $(`#${idCard}`).removeClass('vanishIn');
    $(`#${idCard}`).addClass('vanishOut');
    setTimeout(() => {$(`#${idCard}`).removeClass('vanishOut');},1000);
}