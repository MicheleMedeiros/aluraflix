// HABILITANDO O "OWL-CAROUSEL" NAS CATEGORIAS
function initCarouselVertical() {
    $('.category__carousel').owlCarousel({
        loop: false,
        autoWidth: true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 10,
        items: 1,
    });
}

initCarouselVertical();

// INSERINDO A CLASSE "OVERFLOW-HIDDEN" NA DIV "OWL-STAGE-OUTER"
var owlStages = document.getElementsByClassName('owl-stage-outer');
for (var i = 0; i < owlStages.length; i++) {
    owlStages[i].classList.add('overflow-hidden');
}