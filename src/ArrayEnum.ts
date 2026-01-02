const chaiFlavour : string[] = ["Masala", "Adrak"]
const chaiPrice : number[] = [10, 20]

const rating: Array<number> = [4.5,5.0]

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "Masala", price: 25},
    {name: "Adrak", price: 30}
]

const cities: readonly string[] = ["kathmandu","Dolakha"]
// cities.push("pokhara")


const table: number[][] = [
    [1,2,3],
    [4,5,6]
]


let chaiTuple: [string , number];
chaiTuple = ["Masala", 2]
// chaiTuple = [20,"Masala"]


let userInfo :[string, number,boolean?]

userInfo= ["gaurab",2]
userInfo= ["gaurab",2,true]


const location : readonly [number, number] = [25.53,  42.44]

const chaiItems : [name: string, price: number] = ["Masala", 25]


enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.LARGE


enum Status {
    PENDING =100,
    SERVED, //101
    CANCELLED //102
}
enum chaiType {
    MASALA = "masala",
    GINGER =  "ginger"
}


function makeChai(type: chaiType){
    console.log(`Making: ${type}`);
}

makeChai(chaiType.GINGER)
// makeChai("masala")


enum RandomEnum {
    ID =1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1 ,
    MEDIUM =2,
    HIGH =3
}
 const s =Sugars.HIGH



 let t : [string,number] = ["chai", 2]
 t.push("extra")