import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading
         ? <LoadingBox />
         : error
             ? <MessageBox variant="warning"> {error} </MessageBox>
             : (
               <div>
                 <Link to="/"> Back to results. </Link>
                 <div className="row top">
                   <div className="col-double">
                     <img className="large" src={product.image} alt={product.name} />
                   </div>
                   <div className="col-single">
                     <ul>
                       <li><h1>{product.name}</h1></li>
                       <li>
                         <Rating rating={product.rating} numReviews={product.numReviews} />
                       </li>
                       <li> Price: ${product.price} </li>
                       <li> Description: <p>{product.description}</p> </li>
                     </ul>
                   </div>
                   <div className="col-single">
                     <div className="card card-body">
                       <ul>
                         <li>
                           <div className="row">
                             <div> Price </div>
                             <div className="price"> ${product.price} </div>
                           </div>
                         </li>
                         <li>
                           <div className="row">
                             <div> Status </div>
                             <div>
                               {
                                 product.countInStock > 0
                                   ? <span className="success"> In Stock </span>
                                   : <span className="warning"> Unavailable </span>
                               }
                             </div>
                           </div>
                         </li>
                         <li>
                           <button className="primary block">
                             Add to Cart
                           </button>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             )
      }
    </div>
  );
}
