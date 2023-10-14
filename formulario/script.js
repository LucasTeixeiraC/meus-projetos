const form = document.querySelector("#form");
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const senha = document.querySelector("#password")
const jobSelect = document.querySelector("#job")


//para fazer que dispare um evento qunado o submit for acionado
form.addEventListener("submit", (event) => {
    //para fazer a validação antes do envio
    event.preventDefault();

    //validar o nome 
    if (nameInput.value === "") {
        alert("Por favor, preencha seu nome.")
        return;
    }
    if (emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha seu E-mail.")
        return;
    } 
    form.submit();
    
    })

    //Função para validar o email 
    function isEmailValid(email) {
        const emailRegex = new RegExp(
            //usario12@host.com.br 
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        )
        if (emailRegex.test(email)) {
            return true;
        }
        return false;
    }