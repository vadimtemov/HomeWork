Fancybox.bind("[data-fancybox]", {
    // Your custom options
    });


$(function() {

    var mixer = mixitup('.directions__list');

// $('.directions__filter-bth').on('click', function () {
//     $('.directions__filter-bth').removeClass('directions__filter-bth--active')
//     $(this).addClass('directions__filter-bth--active')
// })

// })

$('.directions__filter-bth').on('click', function () {
    $('.directions__filter-bth').removeClass('directions__filter-bth--active')
    $(this).addClass('directions__filter-bth--active')
})

})