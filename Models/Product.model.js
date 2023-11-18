import mongoose,{ Schema } from "mongoose";

const product = new Schema({
    name: String,
    price: Number,
    category: String,
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user2"
    }
})

export default mongoose.model("product2",product);