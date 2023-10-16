$(document).ready(() => {
    $('.category-hover-left-item').on( 'click', function () {
        $('.category-hover-left-item').each(function () {
            $(this).removeClass('bgr');
        });
    $(this).addClass('bgr');

    })
    // $('.category-hover-left-item').on('click', function(){        
    //     $('.category-hover-left-item').each(function(){
    //         $(this).removeClass('bgr');
    //     });
    // $(this).addClass('bgr');
    // })

    $('.item-1').on('click', function (){
        const headerHtml=`<div class="category-hover-right-box">
        <div class="right-box-title"><img class="right-box-logo" src="./assest/img/img_header/ico_sachtrongnuoc.svg" alt="">
            <h2 class="right-box-text">SÁCH TRONG NƯỚC</h2>
        </div>
        <ul class="right-box-list-category">
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
              VĂN HỌC
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
              VĂN HỌC
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
              VĂN HỌC
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
              VĂN HỌC
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
              VĂN HỌC
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
              VĂN HỌC
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
              VĂN HỌC
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn </a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
              VĂN HỌC
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
        </ul>
      </div>`
        $('.category-hover-right').html(headerHtml)
    })

    $('.item-2').on('click', function (){
        const headerHtml=`<div class="category-hover-right-box">
        <div class="right-box-title"><img class="right-box-logo" src="./assest/img/img_header/ico_foreignbooks.svg" alt="">
            <h2 class="right-box-text">FOREGIN BOOK</h2>
        </div>
        <ul class="right-box-list-category">
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
            Children's Books
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Science Fiction</a></li>
              <li class="right-box-item"><a href="">Contemporary Fiction/a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">Thrillers</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
            Dictionaries & Languages
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
            Other Languages
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
            Romance
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
            Science Fiction
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          <li class="right-box-item-category">
            <h3 class="right-box-title-category">
            Crime
            </h3>
            <ul class="right-box-list">
              <li class="right-box-item"><a href="">Tiểu Thuyết</a></li>
              <li class="right-box-item"><a href="">Truyện Ngắn -Tản văn</a></li>
              <li class="right-box-item"><a href="">Light Nover</a></li>
              <li class="right-box-item"><a href="">ngôn tình</a></li>
              <li class="right-box-item"><a class="color-blue" href="">xem tất cả</a></li>
            </ul>
          </li>
          
        </ul>
      </div>`
        $('.category-hover-right').html(headerHtml)
    })




    $('.js-login').on('click', function(){
      $('.login').show();
      $('.login-2').show();

      
    });
    $('.js-register').on('click', function(){
      $('.login').show();
      $('.login-2').show();

      const html = `<p class="form_login_sdt">số điện thoại</p>
      <input class="form_login_input" type="text" placeholder="Nhập số điện thoại hoặc Email">
      <p class="form_login_mk">xác nhận OTP</p>
      <input class="form_login_input" type="text" placeholder="6 kí tự">
      <p class="form_login_mk">Mật Khẩu</p>
      <input class="form_login_input" type="text" placeholder="Nhập Mật Khẩu">
      
      <div class="form_login-btn">
        <p class="btn_logout">Đăng Ký</p>
        <p class="btn_pass">Bỏ Qua</p>
        
      </div>
      <p class="form-logout-text">
        Bằng việc đăng ký, bạn đã đồng ý với Fahasa.com về
              <span class="color-blue">Điều khoản dịch vụ</span>  &  <span class="color-blue">Chính sách bảo mật</span>
      </p>`
      $('.logout-tab').addClass('border_btm');
      $('.login-tab').removeClass('border_btm');
      $('.form_login').html(html);
  
      $('.btn_pass').on('click', function(){
        $('.login').hide();
        $('.login-2').hide();
    
       });
    });

  
  

   $('.login').on('click', function(){
      $('.login-hide').show();
      $('.KPMK').hide();
      $('.login').hide();
      $('.login-2').hide();
      
   });

   $('.logout-tab').on('click', function(){
    const html = `<p class="form_login_sdt">số điện thoại</p>
    <input class="form_login_input" type="text" placeholder="Nhập số điện thoại hoặc Email">
    <p class="form_login_mk">xác nhận OTP</p>
    <input class="form_login_input" type="text" placeholder="6 kí tự">
    <p class="form_login_mk">Mật Khẩu</p>
    <input class="form_login_input" type="text" placeholder="Nhập Mật Khẩu">
    
    <div class="form_login-btn">
      <p class="btn_logout">Đăng Ký</p>
      <p class="btn_pass">Bỏ Qua</p>
      
    </div>
    <p class="form-logout-text">
      Bằng việc đăng ký, bạn đã đồng ý với Fahasa.com về
            <span class="color-blue">Điều khoản dịch vụ</span>  &  <span class="color-blue">Chính sách bảo mật</span>
    </p>`
    $(this).addClass('border_btm');
    $('.login-tab').removeClass('border_btm');
    $('.form_login').html(html);

    $('.btn_pass').on('click', function(){
      $('.login').hide();
      $('.login-2').hide();
  
     });
   });


   $('.login-tab').on('click', function(){
    const html = `<p class="form_login_sdt">số điện thoại/Email</p>
    <input class="form_login_input" type="text" placeholder="Nhập số điện thoại hoặc Email">
    <p class="form_login_mk">Mật khẩu</p>
    <input class="form_login_input" type="text" placeholder="Nhập Mật Khẩu">
    <p class="form_forgot-password">Quên mật khẩu?</p>

    <div class="form_login-btn">
      <p class="btn_lg">Đăng nhập</p>
      <p class="btn_pass">Bỏ Qua</p>
      <p class="btn_fa"><i class="fa-brands fa-facebook"></i> Đăng nhập bằng facebook</p>
    </div>`

    $(this).addClass('border_btm');
    $('.logout-tab').removeClass('border_btm');
    $('.form_login').html(html);

    $('.btn_pass').on('click', function(){
      $('.login').hide();
      $('.login-2').hide();
      
     });
     
   })


   $('.btn_pass').on('click', function(){
    $('.login').hide();
    $('.login-2').hide();
    const html = `<p class="form_login_sdt">số điện thoại/Email</p>
    <input class="form_login_input" type="text" placeholder="Nhập số điện thoại hoặc Email">
    <p class="form_login_mk">Mật khẩu</p>
    <input class="form_login_input" type="text" placeholder="Nhập Mật Khẩu">
    <p class="form_forgot-password">Quên mật khẩu?</p>

    <div class="form_login-btn">
      <p class="btn_lg">Đăng nhập</p>
      <p class="btn_pass">Bỏ Qua</p>
      <p class="btn_fa"><i class="fa-brands fa-facebook"></i> Đăng nhập bằng facebook</p>
    </div>`

    $(this).addClass('border_btm');
    $('.logout-tab').removeClass('border_btm');
    $('.form_login').html(html);

   });
  
   
  $('.btn_ve').on( 'click', function(){
    $('.KPMK').hide();  
    $('.login-2').show();
  })

$('.form_forgot-password').on( 'click', function(){
  $('.KPMK').show();  
    $('.login-2').hide();
});
  
  
})