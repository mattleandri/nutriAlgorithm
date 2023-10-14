import { validationResult } from "express-validator"

export const checkValidations = (req,res,next) =>{

    const result = validationResult(req)
    if(result.isEmpty()){ next()}
    else {
        console.log(result.array())
        return res.status(400).json({error:result.array()})
    }
}