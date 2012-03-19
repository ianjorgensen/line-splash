var bars = function() {
  $(function() {
    var topbar = (function() {
      var bar = $('#top');
      var main = $('#main');
      var nav = $('header nav');
      var hidden = true;

      var show = function() {
        nav.slideDown(200);
        bottombar.hide();
        hidden = false;
        main.click(hide);
      };
      var hide = function() {
        nav.slideUp(200);
        main.unbind('click');
        hidden = true;
      };
      var toggle = function() {
        hidden ? show() : hide();
      };

      bar.click(toggle);

      return {
        show: show,
        hide: hide,
        toggle: toggle,
        bar: bar,
        nav: nav
      };
    })();

    var bottombar = (function() {
      var bar = $('#bottom');
      var main = $('#main');
      var nav = $('footer nav');
      var footer = $('footer');
      var hidden = true;

      var show = function() {
        nav.show();
        footer.css({bottom: nav.height() + 'px'});
        topbar.hide();
        main.click(hide);
        hidden = false;
      };
      var hide = function() {
        nav.hide();
        main.unbind('click');
        footer.css({bottom: 0});
        hidden = true;
      };
      var toggle = function() {
        hidden ? show() : hide();
      };

      bar.click(toggle);

      return {
        show: show,
        hide: hide,
        toggle: toggle,
        bar: bar,
        nav: nav
      }

      bottombar.show();
    })();
  });
};