document.getElementById('btn-submit').addEventListener('click', function () {
     // console.log ('submit button clicked');
     const emailField = document.getElementById("user-email");
     const email = emailField.value;
     const passField = document.getElementById("user-Pass");
     const password = passField.value;

     if (email === 'abc@gmail.com' && password === '12345') {
          location.href = 'bank.html';
     } else {
          alert('invalid user')
     }

})
