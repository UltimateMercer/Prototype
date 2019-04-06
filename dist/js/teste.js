/* --------------------------------------------------

	2018
	jesse korzan

-------------------------------------------------- */
var App = (function ($) {
    var jk = {};
    jk.vars = {
        reorder : true
    }

  	jk.masonry = {
      	reorder : function () {
          	var   _wrapper = $("card-column"),
          	      _cards = $(".card"),
          	      _cols = Number(_wrapper.css("column-count")),
          	      _out = [],
          	      _col = 0;

            while(_col < _cols) {
                for (var i = 0; i < _cards.length; i += _cols) {
                    var _val = _cards[i + _col];
                    if (_val !== undefined)
                        _out.push(_val);
                }
                _col++;
            }
            _wrapper.html(_out);
            _wrapper.addClass("ready");
      	}
  	}
    return jk;
})(jQuery);

$(function () {
	App.init();
});
