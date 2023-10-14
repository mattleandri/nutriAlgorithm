import mongoose, { mongo } from "mongoose"
import { Decimal128 } from "mongoose"


export const alimentoSchema = new mongoose.Schema({

    name: String,
    amount: Number,
    kcal: Decimal128,
    protein: Decimal128,
    carbs: Decimal128,
    fat: Decimal128,
    type: String,
    category: String,
    fiber: Number,
    portion: Number,
    weight: Number

})

export const Carbohidratos = mongoose.model('carbohidratos',alimentoSchema)
export const Proteinas = mongoose.model('proteinas',alimentoSchema)
export const Verduras = mongoose.model('verduras',alimentoSchema)




 