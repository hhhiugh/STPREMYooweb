document.addEventListener('DOMContentLoaded', function() {
    // Botão de Conectar (Main -> Login)
    const connectBtn = document.getElementById('connectBtn');
    if (connectBtn) {
        connectBtn.addEventListener('click', function(e) {
            e.preventDefault();
            animateButton(this, 'loading');
            setTimeout(() => {
                animateButton(this, 'check');
                setTimeout(() => {
                    // No GitHub, use o nome exato do arquivo (case-sensitive)
                    window.location.href = 'Login.html'; 
                }, 500);
            }, 1000);
        });
    }

    // Formulário de Login (Login -> Dashboard/Main)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const loginBtn = document.getElementById('loginBtn');
            const pass = document.getElementById('password').value;
            
            animateButton(loginBtn, 'loading');
            
            // Simulação de login para o GitHub Pages
            setTimeout(() => {
                if(pass === "test") {
                    animateButton(loginBtn, 'check');
                    showToast('Acesso Confirmado!');
                    setTimeout(() => { window.location.href = 'main.html'; }, 800);
                } else {
                    animateButton(loginBtn, 'cross');
                    showToast('Senha incorreta!', true);
                }
            }, 1500);
        });
    }
});
