window.addEventListener('load', function(){

    new Glide('.review__slider', {
        type: 'slider',
        startAt: 0,
        perView: 3,
        gap: 0,
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
                perView: 3
            }
        }
    }).mount()

    // 30 minutes timer
    let minutes = 30 
    let seconds = 60
    let clock = this.document.getElementById('timer')
    let button = this.document.getElementById('subscribe-button')

    function startTimer() {
        let timer = setInterval(function() {

            seconds--

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            clock.innerHTML = minutes -1 + ":" + seconds

            if (seconds <= 0) {
                seconds = 60
                minutes--
            } else if (minutes <= 0) {
                clearInterval(timer)
                clock.innerHTML = "Время истекло!"
                button.setAttribute("disabled", "")
            }
        }, 1000)
    }
    
    startTimer()


    // tel input filter 
    let phoneInput = document.getElementById('phone')

    phoneInput.addEventListener('input', function() {
         // Удаляем все символы, кроме цифр
        phoneInput.value = phoneInput.value.replace(/\D/g, '')
    })



    // inputs hint
    const hintContainers = document.querySelectorAll('.hint-container')

    // Для каждого .hint-container добавляем обработчики событий
    hintContainers.forEach(function(container) {
        const input = container.querySelector('input')
        const hint = container.querySelector('.hint')

        // При фокусе на инпуте показываем подсказку
        input.addEventListener('focus', function() {
            hint.style.display = 'block'
        })

        // При снятии фокуса с инпута скрываем подсказку
        input.addEventListener('blur', function() {
            hint.style.display = 'none'
        });
    });
})