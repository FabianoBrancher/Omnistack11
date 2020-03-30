const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('listening on port 3333.'));


/**
 * Rota / Recurso
 * Recurso é o que vem após a barra (/), Ex: users
 * Rota é o caminho completo. Ex: localhost:3333/users
 */

/**
 * GET: buscar uma informações do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

/**
 * tipos de parâmetros
 *
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *
 * */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM user
 * Query Builder: table('users).select('*').where()
 */
