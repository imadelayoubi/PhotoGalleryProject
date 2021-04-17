function myFunction() {
  var eye = document.getElementById("password");
  if (eye.type === "password") {
    eye.type = "text";
  } else {
    eye.type = "password";
  }
}

function signIn(){
 var username = $('#username').val()
 var password = $('#password').val()
 if(username === '' || password === '' ){
 	alert('Please fill all the inputs ! ')
 }
 else if(username !== 'imadelayoubi07@gmail.com'){
 	alert('User does not exist !')
 }
 else if (password.length < 8 ){
 	alert('Password is too short !')
 }
 else if (username === 'imadelayoubi07@gmail.com' && password !== '12345678'){
 	alert('Incorrect Password !')
 }
 else if (username === 'imadelayoubi07@gmail.com' && password === '12345678'){
 	$('.signin').fadeOut(2000)

 	setTimeout(function(){
 		$('#sl').fadeIn(2000)
 	}, 0)

 }


}
function next() {
	$('#sl').fadeOut(2000)
 	setTimeout(function(){
 		$('#lb').fadeIn(2000)
 	}, 0)
}

function previous () {
	$('#lb').fadeOut(2000)
 	setTimeout(function(){
 		$('#sl').fadeIn(2000)
 	}, 0)
}

