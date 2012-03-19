var range = function() {
  rangemoving = false;

  var elem = {
    low: $('#range-low'),
    lowtext: $('#range-low text'),
    high: $('#range-high'),
    hightext: $('#range-high text'),
    middle: $('#range-middle'),
    range: $('.range-slider')
  };

  var limit = {
    low: elem.range.offset().left,
    high: elem.range.width() + elem.range.offset().left
  };

  var range = {
   low: 1,
   high: 20 
  };

  var middle = function() {
    var high = elem.high.offset().left;
    var low = elem.low.offset().left;
    elem.middle.css({'margin-left': low +'px', width: high-low + 'px'});
  };

  var compute = {
    low: function(left) {
      var percent = (left - limit.low) / elem.range.width();
      var val = range.low + ((range.high - range.low) * percent);
      return(toFixed(val,1));
    }
  };

  var move = {
    low: function(event) {
      event.preventDefault();
      curX = event.targetTouches[0].pageX;

      if(curX > elem.high.offset().left - 42 || curX <= 20) {
        return;
      }

      var left =curX - elem.low.width()/2;

      elem.lowtext.text(compute.low(left));
      elem.low.offset({left: left});
      middle();
    },
    high: function(event) {
      event.preventDefault();
      curX = event.targetTouches[0].pageX;

      if(curX < elem.low.offset().left + 70 || curX > 300) {
        return;
      }

      var left = curX - elem.high.width()/2;

      elem.hightext.text(compute.low(left));
      elem.high.offset({left: left});
      middle();
    }
  }; 

  document.body.addEventListener('touchend', function() {
    if (rangemoving) {rangemoving = false;}

    document.body.removeEventListener('touchmove', move.low, false);
    document.body.removeEventListener('touchmove', move.high, false);
  }, false);

  document.getElementById('range-low').addEventListener('touchstart', function(e) {
    e.preventDefault();
    rangemoving = true;

    document.body.addEventListener('touchmove',  move.low, false);
  },false);

  document.getElementById('range-high').addEventListener('touchstart', function(e) {
    e.preventDefault();
    rangemoving = true;

    document.body.addEventListener('touchmove',  move.high, false);
  },false);

  middle();
  return middle;
};