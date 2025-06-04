// Seleciona o formulário pelo ID "formulario"
const form = document.getElementById('formulario');

// Seleciona o elemento onde a mensagem de resultado será exibida
const resultado = document.getElementById('resultado');

// Adiciona um listener para o evento de envio do formulário
form.addEventListener('submit', function(event) {
    // Evita que o formulário seja enviado e a página seja recarregada
    event.preventDefault();

    // Captura e remove espaços em branco dos valores dos campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verifica se todos os campos foram preenchidos
    if (nome && email && mensagem) {
        // Exibe mensagem de sucesso personalizada com o nome do usuário
        resultado.innerText = `Obrigado pela sua mensagem, ${nome}! Em breve entraremos em contato.`;
        // Define a cor do texto para verde (sucesso)
        resultado.style.color = '#1a9949';
        // Reseta os campos do formulário após o envio
        form.reset();
    } else {
        // Exibe mensagem de erro caso algum campo esteja vazio
        resultado.innerText = 'Por favor, preencha todos os campos.';
        // Define a cor do texto para vermelho (erro)
        resultado.style.color = 'red';
    }
});
