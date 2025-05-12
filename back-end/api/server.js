// API significa Application Programing Interface
// Requisições de servidor: GET, POST, PUT, DELETE (Na URL do navegador é sempre do tipo GET)
// CRUD - Create Read Update Delete
// Endpoit é a rota que a api acessa
// node --watch .api/server.js   - Faz com que o servidor atualize automaticamente.

// No MongoDB - Criar conta, criar  Cluster, criar o banco de dadeos, modificar o Network Access
// Middleware - npm i cors Í Faz um tratamento antes de enviar a resposta.

//npm i path


import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path"

const __dirname = path.resolve();

const app = express();
const PORT = 3050;

app.use(cors());
// app.use(express.json());

app.get('/api/', (request, response) => {
    response.send("Olá, Mundo!");
})
app.get('/api/artists', async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
})
app.get('/api/songs', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
})

app.use(express.static(path.join(__dirname, '../front-end/dist')));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/dist/index.html'));
});
app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
})
