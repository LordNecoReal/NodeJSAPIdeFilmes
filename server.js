// Importa o framework Express que foi instalado pelo npm
// Aqui estamos dizendo: "Quero usar o express dentro do arquivo server.js"
// require(): importe o módulo express, que se encontra dentro da pasta node_modules 
const express = require('express')
// Cria a aplicação (Nosso servidor)
// é como se estivéssemos lingando a máquina do servidor
// A partir daqui, a variável app voi controlar tudo
const app = express()
// Para criarmos uma rota:
// servidor.método("caminho", (req, res) => {
//     código a ser executado
// })
// Rota principal que manda a mensagem "API de Filmes" para o cliente
app.get('/', (req, res) => {
    res.send('API de Filmes')
})
// Banco de dados fictício
const filmes = [
    {
        id: 1,
        titulo: "Senhor dos Anéis",
        genero: "Fantasia"
    },
    {
        id: 2,
        titulo: "Premonição",
        genero: "Terror"
    },
    {
        id: 3,
        titulo: "Os Incríveis",
        genero: "Animação"
    }
]
// Rota de Filmes
app.get("/filmes", (req, res) => {
    res.json(filmes)
})
// Rota usando o post cadastrar/enviar filmes
app.post('/filmes', (req, res) => {
    
    const novoFilme = {
        id: filmes.length + 1,
        titulo: "Pânico",
        genero: "Terror"
    }
    filmes.push(novoFilme) // Adicionamos um novo filme no final do array
    res.json(novoFilme)

})

// Define a porta onde o servidor vai rodar
const PORT = 3000 // é na porta 3000 que o servidor vai rodar
// Servidor app, escute (listen) a nossa porta, e execute a função
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})