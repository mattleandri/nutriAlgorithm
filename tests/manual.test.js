import app from "../src/app"

//models
import  {Food,foodExample} from "../src/models"

//functions
import { sumAllFoods } from "../src/helpers"

import request from 'supertest'


describe('POST /manual/sum',()=>{
 
    //TODO: Simular una suma (o varias) y esperar un resultado ya definido. Podrian hacerse muchas pruebas como por ver si funciona segun el type , etc

    describe('sumAllFoods function used by controller',()=>{

        test('Should get {p: , c: f :,kcal: }', ()=>{
            expect(true).toBe(true)
        })

    })


    describe('Response Status',() =>{

        test ('Should response with 200 status Code', async ()=>{
            const response = await request(app)
            .post('/manual/sum')
            .send(foodExample)
    
            expect(response.statusCode).toBe(200)
            expect(response.type).toBe('application/json');
        })
    
    
        //TODO: Es necesario crear un test para cada Valid? Este fue para body vacio, pero es necesario crear uno por cada posible error en el body?
        test('Should response with 404 Status Code', async() => {
            const response = await request(app)
            .post('/manual/sum')
    
            expect(response.statusCode).toBe(400)
            expect(response)
        })
        
    })


})