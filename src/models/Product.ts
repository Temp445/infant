import mongoose, { model, models } from 'mongoose';

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productImage:{
        type: [String],
        required: true
    }
})

const Product = models.Product || model("Product", productSchema)

export default Product;