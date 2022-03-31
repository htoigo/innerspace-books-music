import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductEditScreen(props) {
  const productId = props.match.params.id;

  const [productType, setProductType] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [format, setFormat] = useState('');
  const [publicationDate, setPublicationDate] = useState(Date.now());
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0.0);
  const [numInStock, setNumInStock] = useState(0);
  const [description, setDescription] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!product || product._id !== productId) {
      dispatch(detailsProduct(productId));
    } else {
      setProductType(product.productType);
      setCategory(product.category);
      setName(product.name);
      setTitle(product.title);
      setFormat(product.format);
      setPublicationDate(product.publicationDate);
      setImage(product.image);
      setPrice(product.price);
      setNumInStock(product.numInStock);
      setDescription(product.description);
    }
  }, [product, dispatch, productId]);

  const submitHandler = (event) => {
    event.preventDefault();
    // TODO: Dispatch update product action.
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {productId}</h1>
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="warning">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="productType">Product Type</label>
              <input
                id="productType"
                type="text"
                placeholder="Enter product type"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="format">Format</label>
              <input
                id="format"
                type="text"
                placeholder="Enter format"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="publicationDate">Publication Date</label>
              <input
                id="publicationDate"
                type="text"
                placeholder="Enter publication date"
                value={publicationDate}
                onChange={(e) => setPublicationDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="numInStock">Number In Stock</label>
              <input
                id="numInStock"
                type="text"
                placeholder="Enter number in stock"
                value={numInStock}
                onChange={(e) => setNumInStock(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
