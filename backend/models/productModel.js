import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    productType: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    format: { type: String, required: true },
    author: String,
    artist: String,
    composer: String,
    publisher: String,
    label: String,
    publicationDate: { type: Date, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    numInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
