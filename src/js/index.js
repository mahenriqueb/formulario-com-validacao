const nome = document.querySelector(".nome input");
const email = document.querySelector(".email input");
const telefone = document.querySelector(".telefone input");
const mensagem = document.querySelector(".mensagem textarea");

function validarCampo(campo, tipo) {
    let valor = campo.value.trim();
    let valido = false;

    if (tipo === "nome") {
        valido = valor.length >= 3;
    } else if (tipo === "email") {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        valido = regexEmail.test(valor);
    } else if (tipo === "telefone") {
        const regexTelefone = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
        valido = regexTelefone.test(valor);
    } else if (tipo === "mensagem") {
        valido = valor.length > 0;
    }

    if (valido) {
        campo.classList.remove("invalidado");
        campo.classList.add("validado");
        campo.nextElementSibling.style.display = "none";
    } else {
        campo.classList.remove("validado");
        campo.classList.add("invalidado");
        campo.nextElementSibling.style.display = "block";
    }

    return valido;
}

nome.addEventListener("input", () => validarCampo(nome, "nome"));
email.addEventListener("input", () => validarCampo(email, "email"));
telefone.addEventListener("input", () => validarCampo(telefone, "telefone"));
mensagem.addEventListener("input", () => validarCampo(mensagem, "mensagem"));
