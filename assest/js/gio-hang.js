$(document).ready(function() {
    let couter = +$('.num').text();
    let money = +$('.main-product-money').attr('money');
    let e;
    let f;
    $('.next').on('click', function(){
        couter = couter + 1;
        $('.num').text(couter );
        $('.sum-money').text( couter*money )
       
    })
    $('.prew').on('click', function(){
        if(couter >= 1){
            couter = couter - 1;
        }
        $('.num').text(couter );
        $('.sum-money').text( couter*money )
        
    })


    let couter1 = +$('.num1').text();
    let money1 = +$('.main-product-money1').attr('money1');
    console.log(money1);
    $('.next1').on('click', function(){
        couter1 = couter1 + 1;
        $('.num1').text(couter1 );
        $('.sum-money1').text( couter1*money1 )
        
    })
    $('.prew1').on('click', function(){
        if(couter1 >= 1){
            couter1 = couter1 - 1;
        }
        $('.num1').text(couter1 );
        $('.sum-money1').text( couter1*money1 )
    })
    $('.i').on('click', function(){
       $('.pro').hide(); 
    })
    $('.i1').on('click', function(){
        $('.pro1').hide(); 
     })

     $('.main-cart-item-left').on('click', function(){
        $('.pro').show(); 
        $('.pro1').show();
     });


     $('.box-red').on('click', function(){
        let a = +$('.sum-money').text()
        let b = +$('.sum-money1').text()
        if( !$('.box-red').hasClass('has')){
            $('.total-btn').addClass('has');
            $('.box-red').addClass('has');
            $('.main-cart-item-left-box').addClass('has');
            $('.mo').text( a + b);


        }else{
            $('.total-btn').removeClass('has');
            $('.box-red').removeClass('has');
            $('.main-cart-item-left-box').removeClass('has');
            $('.mo').text( '0');
        }
        
     });
});