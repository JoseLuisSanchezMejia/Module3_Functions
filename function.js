/* const pizza = function makePizza() {
console.log("mix flour with water");
console.log("add salt to your mix");
console.log("add 1 egg to your mix");
console.log("make from your mix a dough and leave it for an hour");
console.log("add to the dough chees");
console.log("add tomatoes");
console.log("bake it in the oven for 1 hour");
console.log("serve");
};

pizza();
pizza();
pizza();
const sushi = function makeSushi(){
    console.log("cut and was wish");
    console.log("add salt to your mix");
    console.log("add ingredients");
    console.log("serve");
};

sushi();
 */
//this is the third pard of the exercise. I wrote an function. Limit function: zero orders can't be an input & 3 orders max of each product.

const pizza = function makePizza() {
    console.log("mix flour with water");
    console.log("add salt to your mix");
    console.log("add 1 egg to your mix");
    console.log("make from your mix a dough and leave it for an hour");
    console.log("add to the dough chees");
    console.log("add tomatoes");
    console.log("bake it in the oven for 1 hour");
    console.log("serve");
    };

const sushi = function makeSushi(){
        console.log("cut and was wish");
        console.log("add salt to your mix");
        console.log("add ingredients");
        console.log("serve");
    };


let orderMaster =function (numberPizza, numberSushi){
    if (numberPizza === 0 && numberSushi === 1){
        sushi();
    }
    else if (numberPizza === 1 && numberSushi === 0){
        pizza();
    }
    else if (numberPizza === 1 && numberSushi === 1){
        pizza();
        sushi();
    }
    else if (numberPizza === 1 && numberSushi === 2){
        pizza();
        sushi();
        sushi();
    } 
    else if (numberPizza === 2 && numberSushi === 1){
        pizza();
        pizza();
        sushi();
    } 
    else if (numberPizza === 2 && numberSushi === 2){
        pizza();
        sushi();
        pizza();
        sushi();
    } 
    else if (numberPizza === 0 && numberSushi === 2){
        sushi();
        sushi();
    } 
    else if (numberPizza === 2 && numberSushi === 0){
        pizza();
        pizza();
    } 

    else if (numberPizza === 2 && numberSushi === 3){
        pizza();
        pizza();
        sushi();
        sushi();
        sushi();
    }
    else if (numberPizza === 3 && numberSushi === 2){
        pizza();
        pizza();
        pizza();
        sushi();
        sushi();
    } 
    else if (numberPizza === 3 && numberSushi === 3){
        pizza();
        pizza();
        pizza();
        sushi();
        sushi();
        sushi();
    }
    else if (numberPizza === 0 && numberSushi === 3){
        sushi();
        sushi();
        sushi();
    } 
    else if (numberPizza === 3 && numberSushi === 0){
        pizza();
        pizza();
        pizza();
    } 
}

orderMaster(2,3);
