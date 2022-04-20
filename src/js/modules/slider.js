/**
 * Slider
 */
export default function() {
  const $fullslider = $('.slide-full');
  $fullslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });
  const $prodslider = $('.slide-prod');
  $prodslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });

  const $productslide = $('.product-slide');
  $productslide.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}