window.onload = function () {

  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const cpf = document.getElementById("cpf");
  const password = document.getElementById("password");
  const passwordConfirmation = document.getElementById("passwordconfirmation");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
  });

  function checkInputs() {
    const nameValue = name.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    const cpfValue = cpf.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (nameValue === "") {
      setErrorFor(name, "O nome de usuário é obrigatório.");
    } else {
      setSuccessFor(name);
    }

    if (emailValue === "") {
      setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
      setErrorFor(email, "Por favor, insira um email válido.");
    } else {
      setSuccessFor(email);
    }

    if (telefoneValue === "") {
      setErrorFor(telefone, "O telefone é obrigatório.");
    } else {
      setSuccessFor(telefone);
    }

    if (cpfValue === "") {
      setErrorFor(cpf, "O cpf é obrigatório.");
    } else {
      setSuccessFor(cpf);
    }

    if (passwordValue === "") {
      setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 7) {
      setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
      setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
      setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
      setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
      setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });

    if (formIsValid) {
      console.log("O formulário está 100% válido!");
      alert("CADASTRADO COM SUCESSO!");
      window.location.href = "login.html";
    }
    else {
      console.log("O formulário está incompleto!");
    }
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a classe de erro
    formControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
  }

  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email);

  }
}