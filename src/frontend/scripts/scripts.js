const form = document.getElementById('leadForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();  // Impede o envio do formulário e o comportamento padrão
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Criar o objeto com os dados do formulário
    const leadData = {
        nome,
        email,
        telefone
    };

    try {
        // Enviar a requisição POST para a API
        const response = await fetch('http://localhost:3000/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(leadData) // Envia os dados como JSON
        });

        const data = await response.json();

        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
        } else {
            alert(`Erro: ${data.error}`);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao tentar se conectar à API.');
    }
});
