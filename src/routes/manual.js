//UN-BLOCKED MODE - Manual manipulation of food amounts to get desired macros
import { sum } from "../controllers/manual.js";
import { checkValidations } from "../middlewares/checkValidations.js";
//import { foodManualSchema } from "../models/foodManualSchema.js";

import { Router } from "express";
import { body } from "express-validator";
import { checkSchema } from "express-validator";
import { validateManualFood } from "../validations/manual.js";


export const manualRouter = Router()



/**
 * @swagger
 *  /manual/sum:
 *      post: 
 *          tags: 
 *              - Manual
 *          summary: Returns total Macros (p,c,f) and kcal from a List of Foods
 *          requestBody:
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              type: object
 *                              allOf:
 *                                  - $ref: '#/components/schemas/Food'
 *                              properties:
 *                                  selectedAmount:
 *                                      type: number
 *                                      example: 155
 *          responses:
 *              '200':
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              type: object
 *                              properties:
 *                                  kcal: 
 *                                      type: number
 *                              allOf:
 *                                  - $ref: '#/components/schemas/Macros'
 *              '404':
 *                  description: Invalid Body Request 
 *          
 *                  
 */     


//post porque necesito enviar el body. Pero tmb podria ser get si los envio por params... pero serian demasiados params...
manualRouter.post('/sum',
(req,res,next) => {console.log(req.body) ; next()},
validateManualFood,
sum)

