
$('#call-from-navbar').modaal({
    content_source: '#js-call-navbar'
});

$("#js-looking-for__cta").modaal({
    content_source: '#js-call-looking-for'
});

$("#js-main__cta").modaal({
    content_source: '#js-call-looking-for'
});

$(".js-gallery-order").modaal({
    content_source: "#js-gallery"
})

$('.gallery__item-thumbs a').modaal({
    type: 'image'
});

$('.js-showroom-modaal').modaal({
    type: 'image'
});

// $('.main').parallax();
// $('.looking-for').parallax();
// $('.matras').parralax()

$('.js-parallax').parallax()

$('#js-file-input').on('input',function(event) {
    if(event.target.files[0].name) {
        $('#js-file-input-fake').text(event.target.files[0].name)
    } else {
        $('#js-file-input-fake').text("Прикрепить макет")        
    }
});

//moving items in case of small screen
(function() {
    let width = screen.availWidth;
    let headerMenuLink = document.querySelectorAll('.menu--header .menu__link');
    console.log('moveto', width)
    if(width <= 760) {
        headerMenuLink.forEach(function(item) {
            item.classList.remove('animated-underline')
        })
    }
    if(width > 760) {
        headerMenuLink.forEach(function(item) {
            item.classList.add('animated-underline')
        })
    }
}());

//closing and opening menu on small screen(max-width < 770px)
(function() {
    let trigger = document.getElementById('js-header-trigger');
    let closer = document.getElementById('js-menu-link-closer');
    let menu = document.getElementById('js-header-menu');
    trigger.addEventListener('click', function() {
        menu.classList.toggle('open')
    })
    closer.addEventListener('click', function(event) {
        event.preventDefault()
        menu.classList.remove('open');
    })
}());

(function() {
    let items = document.querySelectorAll('.js-move');
    console.log('hello kitt')
    console.log(items)
    items.forEach(function(item) {
        console.log(item.dataset,+item.dataset.screen)
        if(screen.availWidth <= +item.dataset.screen) {
            let moveto = document.getElementById(item.dataset.moveto);
            let clone = item.cloneNode(true);
            moveto.appendChild(clone)
            console.log('clone and item', clone, item)
            item.classList.add('hidden')
        }

    })
}())

