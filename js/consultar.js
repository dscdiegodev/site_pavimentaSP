document.addEventListener('DOMContentLoaded', () => {
    const btnConsulta = document.getElementById('btnConsulta');

    if (btnConsulta) {
        btnConsulta.addEventListener('click', () => {
            window.location.href = 'consultar.html';
        });
    }
});