window.addEventListener('load', function(){

    new Glide('.reviews__slider', {
        type: 'slider',
        startAt: 0,
        perView: 3,
        gap: 24,
        autoplay: false,
        bound: true,
        breakpoints: {
            599: {
                perView: 1
            },
            767: {
                perView: 2
            },
            1023: {
                perView: 2
            }
        }
    }).mount()
})