// Interface and Generics in Typescript

//Interface

interface Chai {
    flavour:string
    price:number
    milk?:boolean  // optional
}

const masala:Chai = {
    flavour:"masala",
    price:30
}


interface Shop {
    readonly id:number
    name:string
}

const s:Shop = {id:1, name: "Chaicode caffe"}

// s.id = 2   // says cannot change because of read only property


//use case

interface DiscountCalculator {
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p * 0.5


interface TeaMachine {
    start(): void;
    stop():void
}

const machine:TeaMachine = {
    start(){
        console.log("start")
    },
    stop(){
        console.log("stop")
    }
}


interface chaiRatings {
    [flavor:string]: number
}