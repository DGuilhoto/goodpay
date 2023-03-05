// Banco de dados fake
const usuarios = [
    {
        nomeUsuario: "Danilo",
        email: "dandan@email.com",
        senha: "12345"
    },
    {
        nomeUsuario: "Batata",
        email: "batata@email.com",
        senha: "12345"
    },
];

//dados de entrada de login
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

//botão de entrar
const btnEntrar = document.getElementById("btn-entrar");

btnEntrar.addEventListener("click", () => {
    //1) capturar os dados dos inputs
    const email = campoEmail.value;
    const senha = campoSenha.value;
    //2) checar no array se existe usuário com email digitado
    let usuarioValido = usuarios.find((usuario) => usuario.email === email);
    let senhaValido = usuarios.find((usuario) => usuario.senha === senha);
    //3) checar se a senha é correta
    if( usuarioValido !== undefined){
        if(senhaValido !== undefined){
            if( (usuarioValido.email === email && usuarioValido.senha === senha) && (senhaValido.senha === senha && senhaValido.email === email)){
                window.location.pathname = "/app.html";
            }
        } else{
            alert("Senha Incorreta");
        }
    } else if( senhaValido === undefined){
        alert("Usuário e Senha Incorretos");
    } else{
        alert("Usuário Incorreto");
    }
    
});
