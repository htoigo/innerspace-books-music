import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import { isAdmin, isAuth } from '../utils.js';
import data from '../data.js';

const productRouter = express.Router();

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await Product.deleteMany({});

    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

// Must be after handler for '/seed', bc '/:id' would match '/seed'.
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product not found.' });
    }
  })
);

productRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      productType: 'Books',
      category: 'Literature',
      name: 'Sample name ' + Date.now(),
      title: 'Sample title',
      format: 'Paperback',
      author: 'Sample author',
      publisher: 'Sample publisher',
      publicationDate: Date.now(),
      image: '/images/p1-front.jpg',
      price: 0.0,
      numInStock: 0,
      rating: 0,
      numReviews: 0,
      description: 'Sample book description.',
    });
    const createdProduct = await product.save();
    res.send({ message: 'New product created.', product: createdProduct });
  })
);

productRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.productType = req.body.productType;
      product.category = req.body.category;
      product.name = req.body.name;
      product.title = req.body.title;
      product.format = req.body.format;
      product.publicationDate = req.body.publicationDate;
      product.image = req.body.image;
      product.price = req.body.price;
      product.numInStock = req.body.numInStock;
      product.description = req.body.description;

      const updatedProduct = await product.save();
      res.send({ message: 'Product updated.', product: updatedProduct });
    } else {
      res.status(404).send({ message: 'Product not found.' });
    }
  })
);

productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deletedProduct = await product.remove();
      res.send({ message: 'Product Deleted', product: deletedProduct });
    } else {
      res.status(404).send({ message: 'Product not found.' });
    }
  })
);

export default productRouter;
