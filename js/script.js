$(document).ready(function() {

	 
    $('aside a.has-children').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
            $(this).removeClass('open');
        } else {		
            $(this).addClass('open');
        }
    });

    $('.faq-list__item-title').on('click', function(){
        $('.faq-list__item-title').parent().removeClass('active');
        $(this).parent().addClass('active');
    });

});