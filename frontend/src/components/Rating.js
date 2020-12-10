import React from 'react';

export default function Rating(props) {
  const { rating, numReviews } = props;

  return (
    <div className="rating">
      <span> <i className={
        rating >= 0.75 ? 'fa fa-star'
                       : rating >= 0.25 ? 'fa fa-star-half-o'
                                        : 'fa fa-star-o'
      }></i> </span>
      <span> <i className={
        rating >= 1.75 ? 'fa fa-star'
                       : rating >= 1.25 ? 'fa fa-star-half-o'
                                        : 'fa fa-star-o'
      }></i> </span>
      <span> <i className={
        rating >= 2.75 ? 'fa fa-star'
                       : rating >= 2.25 ? 'fa fa-star-half-o'
                                        : 'fa fa-star-o'
      }></i> </span>
      <span> <i className={
        rating >= 3.75 ? 'fa fa-star'
                       : rating >= 3.25 ? 'fa fa-star-half-o'
                                        : 'fa fa-star-o'
      }></i> </span>
      <span> <i className={
        rating >= 4.75 ? 'fa fa-star'
                       : rating >= 4.25 ? 'fa fa-star-half-o'
                                        : 'fa fa-star-o'
      }></i> </span>
      <span>{numReviews + ' reviews'}</span>
    </div>
  );
}
