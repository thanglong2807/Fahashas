$(document).ready(function() {
    $('.up').on('click', function(){
        $('.up').hide();
        $('.btn-category-dow').addClass('show');
        $('.inner_left_item-category-list').addClass('height')
    })

    $('.btn-category-dow').on('click', function(){
        $('.btn-category-dow').removeClass('show');
        $('.up').show();
        $('.inner_left_item-category-list').removeClass('height')
    })
    $('.prive-1').on( 'click', function(){
        $('.item-inner').each( function() {
            const pri = $(this).attr('price')
            const price = +pri;
            if(price > 0 && price < 150000){
                $(this).show();
                
                }else{
                $(this).hide();
              
            }
        }) 
    })
    $('.prive-2').on( 'click', function(){
        $('.item-inner').each( function() {
            const pri = $(this).attr('price')
            const price = +pri;
            if(price >= 150000 && price < 300000){
                $(this).show();
                
                }else{
                $(this).hide();
              
            }
        }) 
    })

    $('.prive-3').on( 'click', function(){
        $('.item-inner').each( function() {
            const pri = $(this).attr('price')
            const price = +pri;
            if(price >= 300000 && price < 500000){
                $(this).show();
                
                }else{
                $(this).hide();
              
            }
        }) 
    })

    $('.prive-4').on( 'click', function(){
        $('.item-inner').each( function() {
            const pri = $(this).attr('price')
            const price = +pri;
            if(price >= 500000 ){
                $(this).show();
                
                }else{
                $(this).hide();
              
            }
        }) 
    })

    $('.prive-5').on( 'click', function(){
        $('.item-inner').show();
    })

    $('.prive-6').on( 'click', function(){
       

    
})



});