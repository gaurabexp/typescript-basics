//Generics
//interface and generics are templates
//Generics made the code usable


function wrapInArray<T>(item: T): T[]{
    //T can be any thing
    //in items if you pass integer then as a result you will get array of integers
    return [item]
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavour: "Ginger"})


function pair<A, B>(a: A, b: B): [A, B]{
    return [a, b]
    // it returns only in the format of a,b and not b,a
}

pair("masala", 20)
pair("masala", {flavour: "Ginger"})

//generics are general functions
//useful while creating libarey, frameworks

//Generic interface

interface Box <T> {
    content: T
}

const numberBox: Box<string> = {content : "10"}
const numberBoxCup: Box<number> = {content : 10}

//use case in real life is api response, form state in react


interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}
