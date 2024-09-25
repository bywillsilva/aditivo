// Função para definir um cookie sem expiração
function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/`;
}

// Função para obter um cookie
function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

// Função para excluir um cookie
function deleteCookie(name) {
    setCookie(name, '', -1); // Define a expiração no passado
}

// Exemplo de uso
window.onload = function() {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    // Verifica se o cookie foi aceito
    if (!getCookie('cookiesAccepted')) {
        cookiePopup.style.display = 'flex';
    }

    // Ao clicar no botão "Aceitar"
    acceptButton.onclick = function() {
        setCookie('cookiesAccepted', 'true'); // Cookie sem expiração
        cookiePopup.style.display = 'none';
    };

    // Ao clicar no botão "Recusar"
    rejectButton.onclick = function() {
        cookiePopup.style.display = 'none'; // Fecha o popup sem definir cookies
    };
};
