function validateFields(){
    const email = document.getElementById("email").value //pegar o valor do campo de email
    if(!email){
        document.getElementById("recover-password-button").disabled = true;// verificar se o email não é vazio e se o email é válido
    // se verdadeiro, então habilitar o botão recuperar senha
    // se falso, desabilitar o botão recuperar senha
    } else if (validateEmail(email)){
        document.getElementById("revover-password-button").disabled = false;

    }else{

    }

}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

