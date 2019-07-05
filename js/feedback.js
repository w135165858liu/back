(function($){
    $('.feedback>ul li a').on('click',function(){
            $(this).find('.like-btn').toggleClass('active')
            $('.btn-box .put-btn').addClass('active').on('active',function(){
                $('.alert').show()
                setTimeout(function(){
                    $('.alert').hide()
                },1000)
            })     
    })
    $('.feedback>ul li a').eq(-1).on('click',function(){
        $('.content-box').show()
    })
    $('.btn-box .put-btn').on('click',function(){
        $('.btn-box .put-btn').trigger('active')
    })
})(jQuery)