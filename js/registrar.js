document.addEventListener('DOMContentLoaded', () => {
    const botoesRegistrar = document.querySelectorAll('#btnRegistrar');

    botoesRegistrar.forEach(botao => {
        botao.addEventListener('click', () => {
            window.location.href = 'registrar.html';
        });
    });
});