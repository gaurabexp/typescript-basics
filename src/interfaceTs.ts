type ChaiOrder = {
    type: string; 
    sugar: number; 
    strong: boolean
};


function makeChai (order :ChaiOrder){
    console.log(order)
}

function serveChai (order :ChaiOrder){
    console.log(order)
}


type TeaRecipe ={
    water : number;
    milk: number;
}

// class MasalaChai implements TeaRecipe{
//     water = 100;
//     milk= 50;
// }


interface CupSize {
     size: "small" | "large"
}
class chai implements CupSize {
    //customize type ma garna de dyena so error
    size: "small" | "large" = "large";

}

// type Response = {ok: true} | {ok : false}
// class myRes implements Response {
//     ok: boolean = true;
// }


type TeaType = "masala" | "Ginger" | "lemon"

function orderChai (t: TeaType ){
    console.log(t)
}


type BaseChai = {tealeave: number}
type Extra= {masala: number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai = {
    tealeave: 2,
    masala:1
}

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "Gaurab"}
const u2: User = {username: "Gaurab", bio: "gaurabexp.com"}


type config ={
    readonly appName: string
    version: number
}

const cfg: config = {
    appName: "mychannel",
    version: 1
}

// cfg.appName= "newchannel"