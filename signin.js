let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#password')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function login() {

  const email = form.email().value;
  const password = form.password().value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(() =>{
      window.location.href = "index.html";
      console.log("user login success");
  }).catch(error =>{
      alert(getErrorMessage(error));
  })
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
      return "O usuário não foi encontrado";
  }
  if (error.code == "auth/wrong-password") {
      return "A senha está incorreta";
  }
  return error.message;
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
      return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  return form.password().value ? true : false;
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const form = {
  email: () => document.getElementById("email"),
  loginButton: () => document.getElementById("login-button"),
  password: () => document.getElementById("password"),
  msgError: () => document.getElementById("msgError")
}
