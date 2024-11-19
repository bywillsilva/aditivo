window.onload = function() {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');
    const preferencesButton = document.getElementById('preferences-cookies');
    const preferencesModal = document.getElementById('cookie-preferences-modal');
    const closeModalButton = document.getElementById('close-modal');
    const preferencesForm = document.getElementById('cookie-preferences-form');
    const functionalCookiesCheckbox = document.getElementById('functional-cookies');
    const performanceCookiesCheckbox = document.getElementById('performance-cookies');
    const trackingCookiesCheckbox = document.getElementById('tracking-cookies');

    // Verifica se o cookie 'cookiesAccepted' ou 'cookiesPreferences' já existe
    if (!getCookie('cookiesAccepted')) {
        cookiePopup.style.display = 'flex'; // Mostra o popup se o cookie não existir
    }

    // Ao clicar no botão "Aceitar"
    acceptButton.onclick = function() {
        setCookie('cookiesAccepted', 'true', 365); // Define o cookie para expirar em 1 ano
        setCookie('cookiesPreferences', JSON.stringify({ functional: true, performance: true, tracking: false }), 365); // Salva as preferências padrões
        cookiePopup.style.display = 'none'; // Fecha o popup
    };

    // Ao clicar no botão "Recusar"
    rejectButton.onclick = function() {
        cookiePopup.style.display = 'none'; // Fecha o popup sem definir cookies
    };

    // Ao clicar no botão "Preferências"
    preferencesButton.onclick = function() {
        // Exibe o modal de preferências
        preferencesModal.style.display = 'flex';

        // Carrega as preferências salvas (se existirem) nos checkboxes
        const savedPreferences = getCookie('cookiesPreferences');
        if (savedPreferences) {
            const preferences = JSON.parse(savedPreferences);
            functionalCookiesCheckbox.checked = preferences.functional;
            performanceCookiesCheckbox.checked = preferences.performance;
            trackingCookiesCheckbox.checked = preferences.tracking;
        }
    };

    // Ao fechar o modal
    closeModalButton.onclick = function() {
        preferencesModal.style.display = 'none';
    };

    // Ao submeter o formulário de preferências
    preferencesForm.onsubmit = function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Salva as preferências selecionadas
        const preferences = {
            functional: functionalCookiesCheckbox.checked,
            performance: performanceCookiesCheckbox.checked,
            tracking: trackingCookiesCheckbox.checked
        };

        setCookie('cookiesPreferences', JSON.stringify(preferences), 365); // Salva as preferências em um cookie
        preferencesModal.style.display = 'none'; // Fecha o modal
    };
};

// Função para definir um cookie com expiração personalizada
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // expiração em dias
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
}

// Função para obter o valor de um cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}
