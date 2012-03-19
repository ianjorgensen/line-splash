var format = function (str, col) {
	col = typeof col === 'object' ? col : Array.prototype.slice.call(arguments, 1);

	return str.replace(/\{([^{}]+)\}/gm, function () {
		return col[arguments[1]] === undefined ? arguments[0] : col[arguments[1]];
	});
};	

var toFixed = function(value, precision) {
  var precision = precision || 0,
  neg = value < 0,
  power = Math.pow(10, precision),
  value = Math.round(value * power),
  integral = String((neg ? Math.ceil : Math.floor)(value / power)),
  fraction = String((neg ? -value : value) % power),
  padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');

  return precision ? integral + '.' +  padding + fraction : integral;
};