const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  cors =require('cors'),
  path = require('path'),
  controllers = require('./controllers.js')
  PORT = 8000

const router = express.Router()
const app = express()
  // .use(express.static(path.join(__dirname + )))
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use(cors())
  .use('/api', router)

router
  .route('/products')
  .get(controllers.getAllProducts);
router
  .route('/products/:id')
  .get(controllers.getProductInfo);
router
  .route('/products/:id/styles')
  .get(controllers.getProductStyles);
router
  .route('/products/:id/related')
  .get(controllers.getRelatedProductIds);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))