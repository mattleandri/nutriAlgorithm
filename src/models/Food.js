//Model for food in req.body

export const Food = {

    id:{type: "string" },
    p:{type:"number"},
    c:{type:"number"},
    f:{type:"number"},
    kcal:{type:"number" },
    type:{type:"string"},
    category:{type:"string"}
    
}

export const foodExample = [{
    id:"idArroz",
    p:2.6,
    c:26,
    f:0.4,
    kcal:128,
    type: 'w',
    category: 'c',
    selectedAmount:155
}]