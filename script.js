$(document).ready(function($) {
    $('.header_btn').click(function() {
        $('.outside_modal_window').fadeIn();
        return false;
    });

    $('.section_2_btn').click(function() {
        $('.outside_modal_window').fadeIn();
        return false;
    });

    $('.footer_link').click(function() {
        $('.outside_modal_window').fadeIn();
        return false;
    });

    $('.footer_document_link').click(function() {
        $('.outside_modal_window').fadeIn();
        return false;
    });

    // клик по кнопке - ссылке "Закрыть"
    $('.modal_window_btn').click(function() {
        $(this).parents('.outside_modal_window').fadeOut();
        return false;
    });

    // закрытие по клавише Esc
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.outside_modal_window').fadeOut();
        }
    });

    // Клик по фону, но не по окну
    $('.outside_modal_window').click(function(e) {
        if ($(e.target).closest('.modal_window').length == 0) {
            $(this).fadeOut();
        }
    });
});

$(document).ready(function() {
    $('.index_2_way_1').click(function(e) {
        $('.section_2_main_cont_1').toggle();
    });

    $('.index_2_way_2').click(function(e) {
        $('.section_2_main_cont_2').toggle();
    });

    $('.index_2_way_3').click(function(e) {
        $('.section_2_main_cont_3').toggle();
    });

    $('.index_2_way_4').click(function(e) {
        $('.section_2_main_cont_4').toggle();
    });

    $('.index_2_way_5').click(function(e) {
        $('.section_2_main_cont_5').toggle();
    });

    $('.index_2_way_6').click(function(e) {
        $('.section_2_main_cont_6').toggle();
    });

    $('.index_2_way_7').click(function(e) {
        $('.section_2_main_cont_7').toggle();
    });

    $('.index_2_way_8').click(function(e) {
        $('.section_2_main_cont_8').toggle();
    });

    $('.index_2_way_9').click(function(e) {
        $('.section_2_main_cont_9').toggle();
    });
});

