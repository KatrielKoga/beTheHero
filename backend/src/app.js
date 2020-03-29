const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const { errors } = require('celebrate')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)
app.use(errors())

/*
* Rota / Recurso
*/

/*
*Metodo http: 
*
* GET busca info back-end
* POST cria info no back-end
* PUT altera info no back-end
* DELETE deleta info no back-end
 */

 /* 
 * tipos de parametros
 
 * Query: parametros nomeados enviados na rota apos '?' (filtros, paginacao)
 * Route: parametros para identificar recursos
 * Body: corpo da requisicao utilizaddo para criar ou alterar recursos
 *  */

 /**
  * SQL
  * NoSQL
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */



module.exports = app;