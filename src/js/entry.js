jQuery(document).ready(function() {
    // Слайдеры
    var $owl = jQuery('.header-right .owl-carousel');
    $owl.owlCarousel({
        loop:true,
        nav:false,
        items: 1,
        autoplay: true,
        animateIn: "slideInUp",
        animateOut: "slideOutUp",
        responsive: {
            0: {
                animateIn: "slideInRight",
                animateOut: "slideOutLeft",
            },
            768: {
                animateIn: "slideInUp",
                animateOut: "slideOutUp",
            }
        }
    });

    jQuery('.header-right .owl-carousel .owl-dot').click(function(){
        var carousel = $owl.data('owl.carousel');
        console.log(carousel);
        var nextItem = jQuery(this).index();
        var currentItem = jQuery('.header-right .owl-dot.active').index();
        if($(window).width() > 768) {
            //console.log($(window).width());
            //console.log('Текущая ' + currentItem);
            //console.log('Клик по ' + nextItem);
            if(nextItem > currentItem) {
                carousel.options.responsive[768].animateIn = "slideInUp";
                carousel.options.responsive[768].animateOut = "slideOutUp";
            } else {
                carousel.options.responsive[768].animateOut = "slideInDown";
                carousel.options.responsive[768].animateIn = "slideOutDown";
            }
            $owl.trigger('refresh.owl.carousel');
        } else {
            if(nextItem > currentItem) {
                carousel.options.responsive[0].animateIn = "slideInRight";
                carousel.options.responsive[0].animateOut = "slideOutLeft";
            } else {
                carousel.options.responsive[0].animateIn = "slideInLeft";
                carousel.options.responsive[0].animateOut = "slideOutRight";
            }
            $owl.trigger('refresh.owl.carousel');
        }
    })

    jQuery('.description-right .owl-carousel').owlCarousel({
    	loop:true,
        nav:false,
        items: 1
    });

    // Всплывающие окна

    // Фиксированнная кнопка меню при скролле вниз
    $(window).scroll(function () {
        if($(window).scrollTop() > $(window).height()) {
            $("#fixed-menu").removeClass("fixed-menu_hidden");
        } else {
            $("#fixed-menu").addClass("fixed-menu_hidden");
        }
    });

    // Меню на мобильном телефоне
    $(".phone-menu-button").click(function() {
        $(".phone-menu-button").hide();
        $("#fixed-menu").addClass("fixed-menu_hidden");
        $("#phone-menu").removeClass("phone-menu_hidden");
    });
    $("#menu-close").click(function() {
        $("#phone-menu").addClass("phone-menu_hidden");
        if($(window).scrollTop() > $(window).height()) {
            $("#fixed-menu").removeClass("fixed-menu_hidden");
        }
        $(".phone-menu-button").show();
    });

    // Модальное окно о товаре
    $(".catalog-item__button").click(function() {
        $("#overlay").removeClass("hidden");
        $("#modal").removeClass("hidden");
            jQuery('.modal__image-wrapper .owl-carousel').owlCarousel({
                loop:true,
                nav:false,
                items: 1
            });
    });
    $("#modal-close").click(function() {
        $("#overlay").addClass("hidden");
        $("#modal").addClass("hidden");
    });

});