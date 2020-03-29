const express =require('express');
const routes =require('./routes');
const {errors}=require('celebrate')
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports=app;
/**
 * SQLite
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * request.query;
 * Route Params: Parâmetros utilizaods para identificar recursos 
 * request.params;
 * Request Body: 
 * 
 */


