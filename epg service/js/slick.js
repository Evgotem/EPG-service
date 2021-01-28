$(document).ready(function(){
   $('.slider').slick({
      arrows: false,
      adaptiveHeight: true,
      slidesToShow: 7,
      slidesToScroll: 2,
      touchThreshold:10,
      responsive:[
         {
            breakpoint:1680,
            settings: {
               slidesToShow:5,
               slidesToScroll:1
            }
         },
         {
            breakpoint:1200,
            settings: {
               slidesToShow:3

            }
         },
         {
            breakpoint:900,
            settings: {
               slidesToShow:2

            }
         },
         {
            breakpoint:450,
            settings: {
               slidesToShow:1,
               centerMode: true

            }
         }
      ]
   });

   $('.reviews-wrap').slick({
      arrows: false,
      adaptiveHeight: false,
      slidesToShow: 1,
      slidesToScroll:1,
      touchThreshold:10, 
      centerMode: true,
      variableWidth: true
   });
})