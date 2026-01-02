// class Chai {
//     flavour : string;
//     // price: number

//     // constructor(flavour: string, price:number){
//     //     this.flavour = flavour
//     //     this.price = price
//     // }

//      constructor(flavour: string){
//         this.flavour = flavour
//         console.log(this)
//     }
// }

// const masalaChai = new Chai ("Ginger")
// masalaChai.flavour= "masala"



// excess modifier

class Chai {
    public flavour: string = "Masala"

    private secretIngrediants = "Cardamom"

    //this is the method to access this value
    reveal() {
        return this.secretIngrediants   //ok

    }

    
}

const c = new Chai()
c.reveal() 
// you cannot directly access this private class and a property must be used

class Shop {
    // protected --> staff door
    protected shopName = "Chai corner"
}


//this property can only be access within its own class or on extended Branch
class Branch extends Shop {
    getName(){
        return this.shopName //ok
    }
}

class Wallet {
    #balance =100   //# is also called private


    getbalance(){
        return this.#balance
    }
}

const w = new Wallet()



class Cup{
    readonly capacity: number = 250
    
    constructor (capacity: number){
        this.capacity = capacity

        //you can only assign its property onetime
    }
}


class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar ( value:number){
        if (value > 5) throw new Error("To sweet");
        this._sugar = value // this is a else case or default

    }
}
const d = new ModernChai()
d.sugar = 3


//static members

class EkChai{
    static shopName = "chaicode caffe"

    constructor(public flavour:string){}
}

console.log(EkChai.shopName)  //if you see this the values are statically defined




//abstract classes 

abstract class Drink {
    abstract make(): void
}


class MyChai extends Drink {
    make(){
        console.log("Brewing chai")
    }
}


//composition

class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private Heater: Heater){}


    make(){
        this.Heater.heat
    }
}

