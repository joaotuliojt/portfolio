const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// Aqui você vê a parte "#" que está na URL à frente, mas simplesmente não mostra.
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        var scroll;
        if ($(window).scrollTop() == 0) {
            scroll = ($target.offset().top) - 100
        } else {
            scroll = ($target.offset().top) - 90
        }
        $('html, body').stop().animate({
            'scrollTop': scroll
        }, 1000, 'swing', function() {});
    });
});

// Você clica em Sobre mim, serviço e contato indo para a parte inferior ou superior.
$(window).on('scroll', function() {
    var sections = $('section')
      , nav = $('nav')
      , nav_height = nav.outerHeight()
      , cur_pos = $(this).scrollTop();
    sections.each(function() {
        var top = $(this).offset().top - nav_height
          , bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('li a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});