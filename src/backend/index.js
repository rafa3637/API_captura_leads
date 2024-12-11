import express from 'express';
import cors from 'cors';
import pool from './servicos/conexao.js';

const app = express();

app.use(express.json());
app.use(cors());

//Rota para cadastro
app.post('/cadastrar', async (req, res) => {
    const { nome, email, telefone } = req.body;

    //Fazendo a validação
    if (!nome || nome.length < 2) {
        return res.status(400).json({ error: 'O nome deve ter pelo menos dois caracteres.'});
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Formato de email inválido.'});
    }

    const telefoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
        return res.status(400).json({ error: 'Formato de telefone inválido. Use o formato (XX) XXXXX-XXXX.'});
    }

    try {
        const [result] = await pool.query(
            'INSERT INTO leads (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]
        );
        res.status(201).json({ message: 'Cadastro realizado com sucesso!', id: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao cadastra no banco de dados.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});