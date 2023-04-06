import { numRandom } from "../generadores/lineal-congruente/services/generadorLinealCongruente.js"

function chiQuadrado(list){

    const table = {
        "0.0-0.1": {
            fo: 0,
            fe: 0,
            calc: 0
        },
        "0.1-0.2": {
            fo: 0,
            fe: 0,
            calc: 0
        },
        "0.2-0.3": {
            fo: 0,
            fe: 0,
            calc: 0
        },
        "0.3-0.4": {
            fo: 0,
            fe: 0,
            calc: 0
        },
        "0.4-0.5": {
            fo: 0,
            fe: 0,
            calc: 0
        },
        "0.5-0.6": {
            fo: 0,
            fe: 0,
            calc: 0
        },
        "0.6-0.7": {
            fo: 0,
            fe: 0,
            calc: 0
        },
        "0.7-0.8": {
            fo: 0,
            fe: 0,
            calc: 0
        },
        "0.8-0.9": {
            fo: 0,
            fe: 0,
            calc: 0
        },
        "0.9-1.0": {
            fo: 0,
            fe: 0,
            calc: 0
        },
        "total": {
            fo: 0,
            fe: 0,
            calc: 0
        }
    }


    table["0.0-0.1"].fo = list.filter(item => item >= 0.0 && item < 0.1).length
    table["0.1-0.2"].fo = list.filter(item => item >= 0.1 && item < 0.2).length
    table["0.2-0.3"].fo = list.filter(item => item >= 0.2 && item < 0.3).length
    table["0.3-0.4"].fo = list.filter(item => item >= 0.3 && item < 0.4).length
    table["0.4-0.5"].fo = list.filter(item => item >= 0.4 && item < 0.5).length
    table["0.5-0.6"].fo = list.filter(item => item >= 0.5 && item < 0.6).length
    table["0.6-0.7"].fo = list.filter(item => item >= 0.6 && item < 0.7).length
    table["0.7-0.8"].fo = list.filter(item => item >= 0.7 && item < 0.8).length
    table["0.8-0.9"].fo = list.filter(item => item >= 0.8 && item < 0.9).length
    table["0.9-1.0"].fo = list.filter(item => item >= 0.9 && item < 1.0).length

    const len = list.length / 10

    let total_fo = 0,
    total_fe = 0,
    total_calc = 0

    for(const element in table){
        if(element === "total") {break}
        table[element].fe = len
        const {fo, fe} = table[element]
        total_fe += fe
        total_fo += fo
        const calc = (fe - fo) ** 2 / fe
        table[element].calc = calc
        total_calc += calc
    }

    table["total"].fo = total_fo
    table["total"].fe = total_fe
    table["total"].calc = total_calc

    console.table(table)
}

const list = []
for(let i = 0; i < 1000; i++){
    list.push(Math.random())
}

//chiQuadrado(list)


chiQuadrado(numRandom(0, 106, 1283, 6075))