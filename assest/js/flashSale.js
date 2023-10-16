$(document).ready(function() {
    
        let hour1 = $('.hour').text();
        let minute1 = $('.minute').text();
        let second1 = $('.second').text();
        let hour = +hour1;
        let minute = +minute1;
        let second = +second1;
        console.log(hour, minute, second);
        function coutdown(){
            second--;
            if (second  < 0 ){
                second = 59;
                
                minute--;
                if (minute < 0 ){
                    minute = 59;
                    hour--;
                    $('.hour').text('0' + hour);
                }
                
                $('.minute').text(minute);
            }
            
            $('.second').text(second);
            setTimeout(() => {
                coutdown();
    }, 1000);
    if(hour === 0 && minute === 0 && second === 0){
        $('.time_countdown').hide();
    }
    
        }

        coutdown();

    
        
});