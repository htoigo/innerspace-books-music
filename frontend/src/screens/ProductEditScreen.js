import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

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

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!product || product._id !== productId) {
      dispatch(detailsProduct(productId));
    } else if (successUpdate) {
      // Clear the success field to avoid running this over & over.
      dispatch({ type: PRODUCT_UPDATE_RESET });
      // Ensure product object fields get the updated values.
      dispatch(detailsProduct(productId));
      props.history.push('/productlist');
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
  }, [product, dispatch, productId, successUpdate, props.history]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        productType,
        category,
        name,
        title,
        format,
        publicationDate,
        image,
        price,
        numInStock,
        description,
      })
    );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const uploadFileHandler = async (event) => {
    const file = event.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);

    try {
      const { data } = await axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {productId}</h1>
        </div>
        {loadingUpdate && <LoadingBox />}
        {errorUpdate && (
          <MessageBox variant="warning">{errorUpdate}</MessageBox>
        )}
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
              <label htmlFor="imageFile">Image File</label>
              <input
                id="imageFile"
                type="file"
                label="Choose image"
                onChange={uploadFileHandler}
              />
              {loadingUpload && <LoadingBox />}
              {errorUpload && (
                <MessageBox variant="warning">{errorUpload}</MessageBox>
              )}
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
