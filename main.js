$(document).ready(function() {
    $(".whole").on('click', 'li', function(e){
        $(".content").removeClass('expand')
        $(this).find('+ .content').addClass('expand')
    })
})