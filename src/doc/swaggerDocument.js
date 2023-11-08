import swaggerJSDoc from "swagger-jsdoc";

import { fileURLToPath } from 'url';
import { dirname,join } from 'path';

const ubicacion = dirname(fileURLToPath(import.meta.url))


    // id:food._id,
    // selectedAmount:food.selectedAmount,
    // c:food.carbs,
    // p:food.protein,
    // f:food.fat,
    // kcal:food.kcal,
    // type:food.type,
    // category:food.category


const options = {   

    definition: {
      openapi: '3.0.1',
      info: {
        title: 'nutriAlgorithm',
        version: '1.0.0',
      },
      components: {
        schemas:{
            Food: {
                //description: 'Food Schemas for Manual Operations',
                description:"All values from the food must respresents its 100 grams atributes if it is type 'w' or its 1 unity atributes if it is type 'u' ",
                type: "object",
                properties:{
                    id:{type: "string" , example: 'idArroz'},
                    p:{type:"number", example: 2.6},
                    c:{type:"number", example: 28 },
                    f:{type:"number", example: 0.3},
                    kcal:{type:"number" , example:129},
                    type:{type:"string", example: 'w,', description: "Must be 'w' (weight) || 'u' (unity)"},
                    category:{type:"string", example:'c' , description: "Must be 'c' (carbs) || 'p' (protein) || 'f' (fats) || 'm' (micronutrients) "}
                }
            },
            Macros:{
                type:"object",
                properties:{
                    p:{type:"number"},
                    c:{type:"number"},
                    f:{type:"number"},
                }
            }
        }
      }
    },
    apis: [`${join(ubicacion,'../routes/*.js')}`], // files containing annotations as above
  };

    

export const swaggerDocument = swaggerJSDoc(options)