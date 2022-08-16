var firstName = 'Bridgette';
var age = 24;
var active = true;
// let names: string[] = [1,2,3,4] //gives us an error
var names = ["Bridgette", "carla", "alicia"]; // good array
var studentTypes;
(function (studentTypes) {
    studentTypes[studentTypes["pending"] = 0] = "pending";
    studentTypes[studentTypes["active"] = 1] = "active";
    studentTypes[studentTypes["inTheProcess"] = 2] = "inTheProcess";
    studentTypes[studentTypes["graduated"] = 3] = "graduated";
    studentTypes[studentTypes["tas"] = 4] = "tas";
    studentTypes[studentTypes["teachers"] = 5] = "teachers";
})(studentTypes || (studentTypes = {}));
var mystatus = studentTypes.graduated;
{ /*switch (Number(mystatus)) {
    case Number(studentTypes.active):
        console.log(" student is active ")
        break;
    case Number(studentTypes.graduated):
        console.log(" student is graduated")
        break;
    default:
        console.log("🤬")
} */
}
//console.log(names)
//console.log(`my first name is ${firstName}`);
{ /*let code: string | number = 11
code = 'aa11'
// code =false // error, not a string or number

console.log(`my entry code is: ${code}`) */
}
function sum(arr) {
    return arr.reduce(function (total, num) { return total + num; });
}
var numbers = [1, 2, 3, 4, 5, 6, 8];
//        console.log(sum(numbers))
var complexitem = { name: "damian" };
complexitem = { title: "professor" };
// console.log("complexItem", complexitem)
var bloodType;
(function (bloodType) {
    bloodType[bloodType["aPositive"] = 0] = "aPositive";
    bloodType[bloodType["bPositive"] = 1] = "bPositive";
    bloodType[bloodType["oNegative"] = 2] = "oNegative";
    bloodType[bloodType["oPositive"] = 3] = "oPositive";
})(bloodType || (bloodType = {}));
var me = {
    name: 'Bobby',
    age: 49,
    bloodType: bloodType.aPositive,
    height: 6 * 12
};
