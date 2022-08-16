let firstName:string = 'Bridgette';
let age: number = 24
let active: boolean = true

// let names: string[] = [1,2,3,4] //gives us an error
let names: string [] = ["Bridgette", "carla", "alicia"] // good array


enum studentTypes {
    pending,
    active,
    inTheProcess,
    graduated,
    tas,
    teachers
}

let mystatus = studentTypes.graduated

{/*switch (Number(mystatus)) {
    case Number(studentTypes.active):
        console.log(" student is active ")
        break;
    case Number(studentTypes.graduated):
        console.log(" student is graduated")
        break;
    default:
        console.log("🤬")
} */}

//console.log(names)
//console.log(`my first name is ${firstName}`);

{/*let code: string | number = 11
code = 'aa11'
// code =false // error, not a string or number

console.log(`my entry code is: ${code}`) */}


function sum (arr:number [] ) {
    return arr.reduce ((total: number, num: number) => total + num )
}

let numbers: number[] = [1,2,3,4,5,6,8]
//        console.log(sum(numbers))

let complexitem: any = { name: "damian"}

complexitem = { title: "professor"}

// console.log("complexItem", complexitem)
enum bloodType {
    aPositive,
    bPositive,
    oNegative,
    oPositive,
}

interface human {
    name: string,
    age: number,
    height: number,
    bloodType?: bloodType
}

const me : human = {
    name: 'Bobby',
    age: 49,
    bloodType: bloodType.aPositive,
    height: 6 * 12
}