
			function sendmail(){
				var name = $('#Name').val();
				var email = $('#email').val();
				//var sub = $('#sub').val();
				var msg = $('#message').val();
				
				var Body = 'Name: '+name+'<br> Email:'+email+'<br>Message:'+msg;
		Email.send({
			Host : "smtp.gmail.com",
			Username : "getdemomail@gmail.com",
			Password : "Admin@9639",
			To : 'hpranj2525@gmail.com',
			From : "getdemomail@gmail.com",
			//Subject : "Subject is" + name,
			Body : Body
		}).then(
		  message => {
			  if(message=='OK'){
				  alert('Your mail has been sent.');
			  }
			  else{
				  console.error(message);
				  alert('Retry')
			  }
		  }
		);
			}