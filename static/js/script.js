// Altere a função api no main.js
async function api(method, url, data = null, token = null) {
    // Força HTTPS na URL se for um domínio externo
    if (url.startsWith('http://')) {
        url = url.replace('http://', 'https://');
    }

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    
    if (token) options.headers['Authorization'] = `Bearer ${token}`;
    if (data) options.body = JSON.stringify(data);
    
    try {
        const response = await fetch(url, options);
        // Se estiver no GitHub Pages e o arquivo não existir, retorna erro amigável
        if (response.status === 404) return { success: false, error: "Endpoint não encontrado no servidor." };
        return await response.json();
    } catch (error) {
        console.error('Erro de Conexão:', error);
        return { success: false, error: "Erro de conexão segura (SSL/TLS)" };
    }
}
