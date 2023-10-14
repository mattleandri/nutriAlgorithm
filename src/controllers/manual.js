import { sumAllFoods } from "../helpers/sumAllFood.js"
import { Carbohidratos,Proteinas,Verduras } from "../models/alimentos.js"


//TODO: Instalar y configurar swagger. Ir haciendo doc a medida que armo API
//TODO: Ver testing de API. Ir haciendo a medida que armo la API. No dejar para el final.


export async function sum  (req,res){

    //TODO: Pasar a Express validator

    try{
        const foods = req.body || []

        const sum = sumAllFoods(foods)

        res.status(200).json(sum)

    }catch(err){

        res.status(500).json({error:err.message})
    }
    


}