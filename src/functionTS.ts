function makeChai (type: string, cups: number){
    console.log(`makeing ${cups} cups of ${type}`);
}

makeChai("Masala chai", 2)


function getChaiPrice(): number {
    return 25
}

function makeOrder (order:string){
    if(!order) return null
    return order
}


function logChai(): void {
    console.log("chai is ready")
}


// function orderChai(type? :string){

// }


function orderChai(type :string ="Masala chai" ){
    
}



function createChai(order: {
    type: string;
    sugar: number;
    size: "small"| "large"
}): number {
    return 4
}