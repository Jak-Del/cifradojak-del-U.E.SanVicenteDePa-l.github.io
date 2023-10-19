$(function() {

	
	var form = $('#ajax-contact');

	
	var formMessages = $('#form-messages');

	
	$(form).submit(function(e) {
		
		e.preventDefault();

		
		var formData = $(form).serialize();

		
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			
			$(formMessages).removeClass('bg-danger');
			$(formMessages).addClass('bg-success');

			
			$(formMessages).text('Your message successfully sent');

			
			$('#name, #email, #message').val('');			
		})
		.fail(function(data) {
			
			$(formMessages).removeClass('bg-success');
			$(formMessages).addClass('bg-danger');

			
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});