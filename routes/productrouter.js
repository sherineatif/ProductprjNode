const express = require("express");

function routes(Product) {
  const productRouter = express.Router();
  productRouter.route("/products").get((req, res) => {
    const query = {};
    if (req.query.categoryId) {
      query.categoryId = req.query.categoryId;
    }
    Product.find(query, (err, products) => {
      if (err) {
        return res.send(err);
      }
      return res.json(products);
    });
  });

  productRouter
    .route("/products")
    .post((req, res) => {
      const product = new Product(req.body);
      console.log(product);
      product.save();
      return res.status(201).json({
        success: true,
        results: product,
      });
    })
    .get((req, res) => {
      const query = {};
      if (req.query.categoryId) {
        query.categoryId = req.query.categoryId;
      }
      Product.find(query, (err, products) => {
        if (err) {
          return res.send(err);
        }
        return res.json({
          success: true,
          results: products,
        });
      });
    });
  productRouter.use("/products/:id", (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        return res.send(err);
      }
      if (product) {
        req.product = product;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  productRouter
    .route("/products/:id")
    .get((req, res) => res.json(req.product))
    .put((req, res) => {
      const { product } = req;
      product.name = req.body.name;
      product.quantity = req.body.quantity;
      product.price = req.body.price;
      product.imgUrl = req.body.imgUrl;
      product.categoryId = req.body.categoryId;
      product.save();
      return res.json(product);
    })
    .patch((req, res) => {
      const { product } = req;
      if (req.body._id) {
        delete req.body._id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        product[key] = value;
      });
      req.product.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(product);
      });
    });

  productRouter.route("/products/:id").get((req, res) => {
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        return res.send(err);
      }
      return res.json(product);
    });
  });

  productRouter
    .route("/products/:id")
    .get((req, res) => {
      Product.findById(req.params.id, (err, product) => {
        if (err) {
          return res.send(err);
        }
        return res.json(product);
      });
    })
    .put((req, res) => {
      Product.findById(req.params.id, (err, product) => {
        if (err) {
          return res.send(err);
        }
        product.name = req.body.name;
        product.quantity = req.body.quantity;
        product.price = req.body.price;
        product.imgUrl = req.body.imgUrl;
        product.categoryId = req.body.categoryId;
        product.save();
        return res.json(product);
      });
    })
    .delete((req, res) => {
      req.product.remove((err) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });

  return productRouter;
}
module.exports = routes;
