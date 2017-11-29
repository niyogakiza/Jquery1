$(function(){

    var content = " Choose what you like";

    $('.panel-button').on('click', function(){
        var panelId = $(this).attr('data-panelid');
        $('#'+ panelId).toggle();
        $('#'+ panelId +' .panel-body').html('');
    });

    $('li').on('click', function(){
        //$(this).remove()
        $(this).siblings().addClass('special');
        if($(this).parent().is('.sublist')){
            $(this).hide();
        }
    })


});