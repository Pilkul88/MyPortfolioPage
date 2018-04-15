// PC用のサイドバー固定
(function(){
    $(function(){

        var fix = $('#pc-side-nav'), //固定したいコンテンツ
        side = $('.sidebar'), //サイドバーのID
        main = $('#main'), //固定する要素を収める範囲
        sideTop = side.offset().top;
        fixTop = fix.offset().top,
        mainTop = main.offset().top,
        w = $(window);

        var adjust = function(){
            fixTop = fix.css('position') === 'static' ? sideTop + fix.position().top : fixTop;
            var fixHeight = fix.outerHeight(true),
            mainHeight = main.outerHeight(),
            winTop = w.scrollTop();

            if(winTop + fixHeight > mainTop + mainHeight){
               fix.removeClass('pc-side-nav-fixed');
           }else if(winTop >= fixTop){
               fix.addClass('pc-side-nav-fixed');
           }else{
               fix.removeClass('pc-side-nav-fixed');
            }
        }

        w.on('scroll', adjust);
    });
})(jQuery);