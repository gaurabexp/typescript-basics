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


//index signature
interface chaiRatings {
    [flavor:string]: number
}
//use case
//people avoid
const ratings: chaiRatings = {
    masala: 4.5,
    ginger: 4.5,
}


//interfaces main features
interface User {
    name:string
}

interface User {
    age:number
}
const u: User = {
    name:"Gaurab",
    age:19
}

//interfaces are usually extended
interface A {a: string}
interface B {b: string}

interface C extends A,B {}





