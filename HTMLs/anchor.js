$(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault(); //отменяем стандартное действие
      
        var sc = $(this).attr("href"), dn = $(sc).offset().top;
        //sc - в переменную заносим информацию о том, к какому блоку надо перейти
        //dn - определяем положение блока на странице

        $('html, body').animate({
            scrollTop: dn
        }, 1000); //1000 - скорость прокрутки в миллисекундах
    });
});
