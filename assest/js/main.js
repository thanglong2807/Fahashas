$(document).ready(function(){

    $('.slider_img').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autopaySpeed: 1000,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-light fa-chevron-left"></i></button>`,
        nextArrow:`<button type='button' class='dong_ngu slick-next pull-right'><i class="fa-light fa-chevron-right"></i></button>`,
        dots:true,
    });

    

    $('.grid__row-list').slick({
        infinite: true,
        slidesToScroll: 4,
        slidesToShow: 5,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-light fa-chevron-left"></i></button>`,
        nextArrow:`<button type='button' class='dong_ngu slick-next pull-right'><i class="fa-light fa-chevron-right"></i></button>`,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    
$('.img-white').on( 'click', function(){
  $('.mobile').css('left','0')
})


$('.mobile-header-i').on( 'click', function(){
  $('.mobile').css('left','-110%')
});

$('.sp_click').on( 'click', function(){
  $(this).hide();
  $('.sp_none').show();
  $('.an').show();
  $('.van-hoc').addClass('colo');
});

$('.sp_none').on( 'click', function(){
  $(this).hide();
  $('.sp_click').show();
  $('.an').hide();
  $('.van-hoc').removeClass('colo');
});




$('.mobile-header-item').on( 'click', function () {
  $('.mobile-header-item').each(function () {
      $(this).removeClass('bgr-fff');
  });
$(this).addClass('bgr-fff');

})


$('.mobi1').on('click', function(){
  const html =`<div class="sp">
  <p>
    TẤT CẢ SẢN PHẨM
  </p>
  <i class="fa-solid fa-chevron-right"></i>
</div>
<div class="sp">
  <p class="van-hoc">
    Văn Học
  </p>
 <div class="sp_click"><i class="fa-sharp fa-solid fa-square-chevron-down"></i></div>
  <div class="sp_none"><i class="fa-sharp  fa-solid fa-square-chevron-up"></i></div>
</div>
<div class="an">
  <div class="spp">
    <p>
      ngôn tình
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="spp">
    <p>
      tiểu thuyết
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="spp">
    <p>
      truyện ngắn
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="spp">
    <p>
      light nover
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
</div>
<div class="sp">
  <p>
    kinh tế
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
    tâm lý
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
    nuôi dạy
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
    thiếu nhi
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
    ngôn tình
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
    tiểu sử
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>`

  $('.mobile-header-box-right').html(html)

  $('.sp_click').on( 'click', function(){
    $(this).hide();
    $('.sp_none').show();
    $('.an').show();
    $('.van-hoc').addClass('colo');
  });
  
  $('.sp_none').on( 'click', function(){
    $(this).hide();
    $('.sp_click').show();
    $('.an').hide();
    $('.van-hoc').removeClass('colo');
  });
})

$('.mobi2').on('click', function(){
  const html =`<div class="sp">
  <p>
    TẤT CẢ SẢN PHẨM
  </p>
  <i class="fa-solid fa-chevron-right"></i>
</div>
<div class="sp">
  <p class="van-hoc">
  Fantasy
  </p>
 <div class="sp_click"><i class="fa-sharp fa-solid fa-square-chevron-down"></i></div>
  <div class="sp_none"><i class="fa-sharp  fa-solid fa-square-chevron-up"></i></div>
</div>
<div class="an">
  <div class="spp">
    <p>
    Children's Books
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="spp">
    <p>
    Romance
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="spp">
    <p>
    Graphic Novels, Anime & Manga
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="spp">
    <p>
      light nover
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
</div>
<div class="sp">
  <p>
  Fiction
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
  Other Languages
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
  Biography
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
  Personal Development
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
    Society & Social Sciences
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
`

  $('.mobile-header-box-right').html(html)

  $('.sp_click').on( 'click', function(){
    $(this).hide();
    $('.sp_none').show();
    $('.an').show();
    $('.van-hoc').addClass('colo');
  });
  
  $('.sp_none').on( 'click', function(){
    $(this).hide();
    $('.sp_click').show();
    $('.an').hide();
    $('.van-hoc').removeClass('colo');
  });
})

$('.mobi3').on('click', function(){
  const html =`<div class="sp">
  <p>
    TẤT CẢ SẢN PHẨM
  </p>
  <i class="fa-solid fa-chevron-right"></i>
</div>
<div class="sp">
  <p class="van-hoc">
  Bút
  </p>
 <div class="sp_click"><i class="fa-sharp fa-solid fa-square-chevron-down"></i></div>
  <div class="sp_none"><i class="fa-sharp  fa-solid fa-square-chevron-up"></i></div>
</div>
<div class="an">
  <div class="spp">
    <p>
    bút bi
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="spp">
    <p>
    bút chì
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="spp">
    <p>
    bút mực
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="spp">
    <p>
      bút thường
    </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
</div>
<div class="sp">
  <p>
  sách GK
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
  Dụng cụ học sinh
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
  Đồ văn phòng
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
<div class="sp">
  <p>
  đồ chơi
  </p>
  <i class="fa-sharp fa-solid fa-square-chevron-down"></i>
</div>
`

  $('.mobile-header-box-right').html(html)

  $('.sp_click').on( 'click', function(){
    $(this).hide();
    $('.sp_none').show();
    $('.an').show();
    $('.van-hoc').addClass('colo');
  });
  
  $('.sp_none').on( 'click', function(){
    $(this).hide();
    $('.sp_click').show();
    $('.an').hide();
    $('.van-hoc').removeClass('colo');
  });
})

})
