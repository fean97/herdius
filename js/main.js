$(document).ready(function () {


    $('.owl-1').owlCarousel({
        items: 3,
        nav: false,
        stagePadding: 80,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },

            1000: {
                items: 3
            },
            1200: {
                items: 3,
            }
        }
    });

    $('.owl-2').owlCarousel({
        items: 1,
        margin: 10,
        nav: true,
        navText: ["<img src='https://www.herdius.com/img/left.svg'>", "<img src='https://www.herdius.com/img/right.svg'>"],
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
    });


    //       $('.advisors-member').filter(function (x) {
    //            return $(this).attr('href') === "#"+$('.owl-2 .owl-item.active .item-2').data('hash')
    //        }).addClass('haha').siblings().removeClass('haha');

    $('.owl-2').on('change.owl.carousel', function (event) {
        //        event.preventDefault();
        //       console.log('hahhaha');
        //        $('.advisors-member').filter(function (x) {
        //            return $(this).attr('href') === "#" + $('.owl-2 .owl-item.active .item-2').data('hash')
        //        }).addClass('haha').siblings().removeClass('haha');
        $('.advisors-member').each(function () {
            if ($(this).attr('href') === "#" + $('.owl-2 .owl-item.active .item-2').data('hash')) {
                $(this).addClass('haha');
                $(this).siblings().removeClass('haha');
            }
        })
    })
    $('.input-email-inside').on('focus', function () {
        if ($('.input-email-inside').val() === '') {
            $('.input-email-inside').attr('aria-invalid', 'true');
            $('.error').show();
        }
    })


    $('.input-email-inside').on('focus', function () {
        $('.input-email-inside').keyup(function () {

            var email = $('.input-email-inside').val();

            if (email != 0) {
                if (isValidEmailAddress(email)) {
                    $('.input-email-inside').attr('aria-invalid', 'true');
                    $('.error').hide();
                } else {
                    $('.input-email-inside').attr('aria-invalid', 'true');
                    $('.error').show();
                }
            }

        });


    })




})


function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}
