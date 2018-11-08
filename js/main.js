$(function () {

    $('.navbar-nav .nav-item a').click(function (e) {
        e.preventDefault();
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
        $('html, body').animate({
            scrollTop: $(e.target.getAttribute('href')).offset().top
        }, 800);
    })

    var tmp = 0
    console.log($('.sonSlider').css("background-size"))
    //scrolltotop
    $(window).scroll(function () {
        let wscroll = $(window).scrollTop();

        $('.sonSlider>.message').css({
            "margin-bottom": -(wscroll) + "px"
        })

        if (wscroll > 600) {
            $('.navbar-fixed').css({
                "background": "rgba(0, 0, 0, 0.8)",
                "opacity": "1"
            })
            $('.navbar-fixed').toggleClass('hide', wscroll > tmp);
            $('#scrollToTop').fadeIn("slow");
        } else {
            $('.navbar-fixed').css({
                "opacity": "0",
                "background": "transparent"
            })
            if (wscroll < 100) {
                $('.navbar-fixed').toggleClass('hide', wscroll > tmp);
                $('.navbar-fixed').css({
                    "opacity": "1",
                })
            }
            $('#scrollToTop').fadeOut("slow");
        }

        tmp = $(window).scrollTop()

    })

    //Click event to scroll to top
    $('#scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
})

let form = document.querySelector("#form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let name = form.querySelector("#name")
    let address = form.querySelector("#address")
    let tel = form.querySelector("#tel")
    let email = form.querySelector("#email")
    let message = form.querySelector("#message")
    
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    
    if (message.value.trim() == "") {

        message.nextElementSibling.innerHTML = ("S'il vous plaît fournir votre message")
        message.focus()
        message.style.border = "2px solid red"
    } else {
        message.nextElementSibling.innerHTML = ("")
        message.style.border = "2px solid green"
    }
    
    if (email.value.trim() == "") {
        email.nextElementSibling.innerHTML = "S'il vous plaît fournir votre email!"
        email.focus()
        email.style.border = "2px solid red"
    } else {
        if (!email.value.match(regexEmail)) {
            email.nextElementSibling.innerHTML = "email invalide!"
            email.focus()
            email.style.border = "2px solid red"
        } else {
            email.nextElementSibling.innerHTML = ""
            email.style.border = "2px solid green"
        }
    }
    
    if (tel.value.trim() == "") {

        tel.nextElementSibling.innerHTML = ("S'il vous plaît fournir votre numero de téléphone")
        tel.focus()
        tel.style.border = "2px solid red"
    } else {
        tel.nextElementSibling.innerHTML = ("")
        tel.style.border = "2px solid green"
    }
    
    if (address.value.trim() == "") {

        address.nextElementSibling.innerHTML = "S'il vous plaît fournir votre adresse!"
        address.focus()
        address.style.border = "2px solid red"
    } else {
        address.nextElementSibling.innerHTML = ""
        address.style.border = "2px solid green"
    }
    
    if (name.value.trim() == "") {
        name.nextElementSibling.innerHTML = "S'il vous plaît fournir votre nom!"
        name.focus()
        name.style.border = "2px solid red"
        
    } else {
        name.nextElementSibling.innerHTML = ""
        name.style.border = "2px solid green"
    }

})

