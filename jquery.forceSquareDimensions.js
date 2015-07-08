

;(function($) {

    var forceSquare = $.fn.forceSquare = function(options) {
    	forceSquare.elements = this;
        forceSquare._apply();
        return this;
    };

    forceSquare._apply = function() {
		this.elements.each(function(){
			$(this).css("height", $(this).innerWidth());
		});
		return this;
    };

    $(window).bind('load', function(event) {
       forceSquare._apply();
    });

    $(window).bind('resize orientationchange', function(event) {
       forceSquare._apply();
    });


})(jQuery);
