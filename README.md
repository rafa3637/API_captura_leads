# API_captura_leads

Um porjeto criado seguindo as orientações dos professores da DevMedia na missão 11.

Captura de Leads
Descrição
Este projeto é uma API para capturar e armazenar informações de leads em um banco de dados MySQL. A aplicação permite que um formulário de captura envie dados para um servidor backend que os armazena em um banco de dados MySQL. O backend é desenvolvido em Node.js utilizando o framework Express, e o banco de dados é MySQL.

Tecnologias Utilizadas
Node.js: Plataforma para execução de código JavaScript no servidor.
Express: Framework para Node.js, utilizado para criar a API.
MySQL: Banco de dados utilizado para armazenar as informações dos leads.
body-parser: Middleware para análise do corpo da requisição HTTP.
CORS: Middleware que permite requisições de diferentes origens (necessário para o frontend).
Pré-requisitos
Antes de rodar o projeto, você precisará dos seguintes itens instalados:

Node.js: Baixe e instale o Node.js
MySQL: Baixe e instale o MySQL
WAMP Server (opcional, para gerenciar MySQL): Baixe o WAMP Server
Instalação
Passos para instalar o projeto:
Clone o repositório:

bash
Copiar código
git clone https://github.com/usuário/repo.git
cd nome-do-repo
Instale as dependências: No diretório do projeto, execute o comando:

bash
Copiar código
npm install
Configuração do Banco de Dados:

Abra o MySQL e crie o banco de dados:

sql
Copiar código
CREATE DATABASE leads_bd;
USE leads_bd;
Crie a tabela leads:

sql
Copiar código
CREATE TABLE leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(20)
);
Execução
Para rodar o servidor, utilize o comando:

bash
Copiar código
npm start
O servidor ficará disponível em http://localhost:3000.

Endpoints da API
POST /cadastrar
Descrição
Este endpoint recebe dados de um novo lead e os insere na tabela leads do banco de dados MySQL.

Requisição (Body)
O body da requisição deve ser enviado no formato JSON com as informações do lead.

Exemplo de body:

json
Copiar código
{
    "nome": "Jeico Pink",
    "email": "jeicopink@email.com",
    "telefone": "(41) 98765-4321"
}
Resposta
Código 200 - OK (Cadastro bem-sucedido):
json
Copiar código
{
    "message": "Cadastro realizado com sucesso!",
    "id": 1
}
Código 400 - Bad Request (Erro de validação ou de dados):
json
Copiar código
{
    "error": "Dados inválidos"
}
Código 500 - Internal Server Error (Erro no servidor ou no banco de dados):
json
Copiar código
{
    "error": "Erro ao cadastrar no banco de dados"
}
Como Contribuir
Se você deseja contribuir para o projeto, siga os seguintes passos:

Faça um fork deste repositório.
Crie uma branch para sua feature ou correção de bug:
bash
Copiar código
git checkout -b minha-feature
Após realizar as modificações, commit as alterações:
bash
Copiar código
git commit -am 'Adiciona nova funcionalidade'
Push para o repositório:
bash
Copiar código
git push origin minha-feature
Envie um pull request para o repositório principal.
