const db = require('../postgres/db.js');

const controllers = {
  // Products//
  getAllProducts: (req, res) => {
    let queryStr=`select * from product_features`
    db.query(queryStr, (err, data) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(data.rows)
    })
  },
  getProductInfo: (req, res) => {
    let queryStr =`select * from product_features pf where pf.id=${req.params.id}`
    db.query(queryStr, (err, data) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(data.rows)
    })
  },
  getProductStyles: (req, res) => {
  let queryStr = `select * from styles_photos_skus where styles_photos_skus.product_id=${req.params.id}`
    db.query(queryStr, (err, data) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(data.rows)
    })
  },
  getRelatedProductIds: (req, res) => {
    let queryStr = `select pr.related from product_related pr where pr.id=${req.params.id}`
    db.query(queryStr, (err, data) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(data.rows[0].array)
    })
  },

}

module.exports = controllers;