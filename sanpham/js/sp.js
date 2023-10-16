$(document).ready(function(){
    $('.grid__row-same').slick({
        slidesToShow: 5,
        slidesToScroll: 4,
        
        infinite:false,
        prevArrow:`<button type='button' class='slick-prev pull-left'> <i class="fa-solid fa-angle-left" ></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'> <i class="fa-solid fa-angle-right"></i></button`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false,
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                arrows:false,

                }
              }
        ]
    
    });
  });
  $(document).ready(function(){
    $('.content_sale-list-ticket').slick({
        slidesToShow: 3,
        infinite:false,
        arrows:false,
        prevArrow:`<button type='button' class='slick-prev pull-left'> <i class="fa-solid fa-angle-left" ></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'> <i class="fa-solid fa-angle-right"></i></button`,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              }
            }
      ]
    });

    let ee;
    $('.binh-luan').on( 'keyup', function(){
      ee = $('.binh-luan').val();
      console.log(ee);
  } );
  let bb = [];
  $('.nhan').on( 'click', function(){
  
    bb.push(ee);
    html = '';
    const content = bb.map((item, index) => {
      html += `<div class= 'cs'> -   
      ${item}</div>`
      return html;
    });
    $('.hien-binh-luan').html(html)
  })
  });