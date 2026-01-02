function getchai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai ...`
    }
    return `chai order: ${kind}`
}

function serveChai(msg?: string) {
    if (msg) {
        return `serving ${msg}`;
    }
    return `Serving masala chai `
}


function orderChai(size: "small" | "medium" | " large" | number) {
    if (size === "small") {
        return `small cutting chai`
    }
    if (size === "medium" || size === " large") {
        return `make extra chai`
    }
    return `chai order #${size}`
}


class kulhadChai {
    serve() {
        return `Serving kulhad Chai`
    }
}
class Cutting {
    serve() {
        return `Serving cutting Chai`
    }
}

function serve(chai: kulhadChai | Cutting) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}

type chaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}



type MasalaChai = { type: "masala"; spiceLevel: number }
type GingerChai = { type: "ginger"; amount: number }
type ElaichiChai = { type: "elaichi"; aroma: number }

type chai = MasalaChai | GingerChai | ElaichiChai


function makeChai(order: chai) {
    switch (order.type) {
        case "masala":
            return `masala chai`
            break;
        case "elaichi":
            return `elaichi chai`
            break;
        case "ginger":
            return `ginger chai`
            break;
        default:
            break;
    }
}


function brew(order: MasalaChai | GingerChai) {
    if ("spiceLevel" in order) {

    }
}


function isStringArray(arr: unknown): arr is string[] {
    return (
        Array.isArray(arr) &&
        arr.every(item => typeof item === "string")
    );

}