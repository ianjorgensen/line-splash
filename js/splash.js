var thanks = function() {
		$('form').fadeOut(function() {
			$('#thanks').fadeIn();
		});
	};

	var error = function() {
		$('form').fadeOut(function() {
			$('#error').fadeIn();
			setTimeout(function() {
				$('#error').fadeOut(function() {
					$('form').fadeIn();
				});
			}, 1500);
		});
	};

	$(function () {
	  $('#subForm').submit(function (e) {
	    e.preventDefault();
	    $.getJSON(
	      this.action + "?callback=?",
	      $(this).serialize(),
	      function (data) {
	        if (data.Status === 400) {
	          error();
	        } else { // 200
	          thanks();
	        }
	      }
	    );
	  });
	});