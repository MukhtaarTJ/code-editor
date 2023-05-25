      let username = document.getElementById("username");
      let password = document.getElementById("password");
      let btn = document.getElementById("btn");
      let eyeEl = document.querySelector('.fa-eye');
      let message  = document.querySelector('.message');

      eyeEl.addEventListener("click", function (e) {
        e.preventDefault();
        if(eyeEl.classList.contains ('fa-eye')){
     password.setAttribute('type', 'text');
     eyeEl.classList.remove('fa-eye');
     eyeEl.classList.add('fa-eye-slash');

        }else{
     password.setAttribute('type', 'password');

        }
      });


    btn.addEventListener('click', function () {
      let password = Number(document.querySelector("#password").value);
      let username = document.querySelector("#username").value;

      if (password == 4231) {
        console.log(typeof password);

        window.location.href = "code.html";
      }
      else if(password != 4231) {
        alert(" please enter the correct password");
      }
    });

    
    

    

