import { Schema, model } from "mongoose";
import { TEommerce, TInventory, TVariants } from "./e-commerce.interface";

const variantSchema = new Schema<TVariants>({
    type: String,
    value: String
})

const inventorySchema = new Schema<TInventory>({
  quantity: Number,
  inStock: Boolean,
})


const eommersSchema = new Schema<TEommerce>({
    name: {
        type: String,
        required: [true , "Name must be provided"]
    },
    description:{
        type: String,
        required: [true, "Description must be provided"]
    },
    price:{
        type: Number,
        required: [true, "Price must be provided"]
    },
    tags: {
        type: String,
        required: [true, "Tags must be provided"]
    },
    variants: [variantSchema],
    inventory : inventorySchema,

})


export const commerce = model <TEommerce>("commerce" , eommersSchema)