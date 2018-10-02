//phones slider
$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
//Top slider
$('#topCarousel').carousel({
  interval: 6000 // 6 seconds
});
//footer slider
$('#mixedSlider').multislider({
            duration: 200,
            interval: 9000
        });

//Phones slider
$('#carouselExample').carousel({
  interval: false
});