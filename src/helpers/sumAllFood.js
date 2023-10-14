export function sumAllFoods(foods){

    //P,C,F,Kcal

    const result =  {p:0,c:0,f:0,kcal:0}

    foods.forEach(food => {

        const factor = food.type == 'w'? 100:1

        result.p += food.p * food.selectedAmount/factor
        result.c += food.c * food.selectedAmount/factor
        result.f += food.f * food.selectedAmount/factor
        result.kcal += food.kcal * food.selectedAmount/factor
    });

    return result
}
