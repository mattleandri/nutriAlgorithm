import { body } from "express-validator"
import { checkValidations } from "../middlewares/checkValidations.js"

export const validateManualFood = [

    // id:food._id,
    // selectedAmount:food.selectedAmount,
    // c:food.carbs,
    // p:food.protein,
    // f:food.fat,
    // kcal:food.kcal,
    // type:food.type,
    // category:food.category
    

    body('','Must be Array').isArray(),
    body('[*].id','Id must be String').isString(),
    body('[*].selectedAmount','selectedAmount mut be Positive Number').isFloat({min:0}),
    body('[*].c','c mut be Positive Number').isFloat({min:0}),
    body('[*].p','p mut be Positive Number').isFloat({min:0}),
    body('[*].f','f mut be Positive Number').isFloat({min:0}),
    body('[*].kcal','kcal mut be Positive Number').isFloat({min:0}),
    body('[*].type','tpye mut be "w" (meaured in grams) | "u" measured in unitys' ).isIn(['w','u']),
    body('[*].category','category muts be "c" (carbos) || "p" (proteins) || "f" (fats)  ').isIn(['c','p','f']),

    
    // custom( (value , {req})=>{

    //     console.log(value)

    //     value.id.isString()
    //     value.selectedAmount.isFloat({min:0})
    //     value.c.isFloat({min:0})
    //     value.p.isFloat({min:0})
    //     value.f.isFloat({min:0})
    //     value.kcal.isFloat({min:0})
    //     value.type.equals('w'||'u')
    //     value.category.equals('p'||'c'||'f')
    //}),

    checkValidations

]