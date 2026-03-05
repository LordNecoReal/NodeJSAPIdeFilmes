# 🚀 API com Node.js e Express

Este projeto foi desenvolvido com o objetivo de compreender os conceitos fundamentais de Back-End utilizando **Node.js** e **Express**.

A aplicação simula uma API simples de usuários, utilizando um array como armazenamento em memória.

---

## 📚 Objetivo do Projeto

Este projeto foi criado para:

- Entender o que é uma API  
- Compreender o conceito de rotas  
- Diferenciar os métodos HTTP GET e POST  
- Simular um banco de dados utilizando array  
- Criar e executar um servidor com Express  

---

## 🛠 Tecnologias Utilizadas

- Node.js  
- Express  

---

## ▶️ Como Executar o Projeto

### 1️⃣ Instalar as dependências

No terminal, dentro da pasta do projeto:

```bash
npm install
```

---

### 2️⃣ Iniciar o servidor

```bash
node server.js
```

ou, se estiver usando nodemon:

```bash
npm run dev
```

---

### 3️⃣ Acessar no navegador

Abra no navegador:

```
http://localhost:3000
```

---

## 📌 Rotas Disponíveis

---

### 🔹 GET /

Retorna uma mensagem simples:

```
Olá Mundo!!!!!
```

---

### 🔹 GET /usuarios

Retorna todos os usuários cadastrados no array.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nome": "Fernanda",
    "pet": "Théo"
  },
  {
    "id": 2,
    "nome": "Karynne",
    "pet": "Lua"
  }
  {
    "id": 1,
    "nome": "Fernanda",
    "pet": "Théo"
  },
  {
    "id": 3,
    "nome": "Oswaldo",
    "pet": "Julinho"
  }
]
```

---

### 🔹 POST /usuarios

Cria um novo usuário de forma simulada.

⚠️ Importante:

- O usuário é criado manualmente dentro do código.
- Ainda não utilizamos `req.body`.
- Ainda não estamos utilizando banco de dados real.

Após executar o POST, o novo usuário é adicionado ao array em memória.

---

## 🧠 Como Funciona o "Banco de Dados"

Estamos utilizando um array chamado `usuarios` como simulação de banco de dados.

Isso significa que:

- Os dados ficam armazenados apenas enquanto o servidor está rodando.
- Se o servidor for reiniciado, os dados são perdidos.
- Ainda não há persistência em banco de dados real.

---

## 🎯 Conceitos Trabalhados

- Estrutura básica de um servidor com Express  
- Criação de rotas  
- Diferença entre GET e POST  
- Manipulação de arrays no servidor  
- Estrutura inicial de uma API  

---


## 👩‍💻 Autora

Desenvolvido para fins educacionais por Lord Neco.
