$(document).ready(function () {
    $("#ipt").change(function() { 
        let input = $(this).val();
        $('ul').append('<li>'+ input +'<i class="fa-solid fa-check"></i><i class="fa-solid fa-trash"></i></li>');
        $(this).val('');
        $('ul').on('click', '.fa-trash', function() {
            $(this).parent().fadeOut(200, function() {
            $(this).remove();
            });
        });
            
        $('ul').on('click', '.fa-check', function() {
            $(this).parent().toggleClass('checked');
        });
    });
});

 