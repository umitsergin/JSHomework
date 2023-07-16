



function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNumbers(1, 10))



let people = ["Greg", "Mary", "Devon", "James"];
let people2 = Array.from(people)
const value = people2.splice(1, 0, "Elizabeth")
const value2 = people2.splice(3, 1, "Artie")
console.log(people)
console.log(people2)



let text1 = "mustafa_selman@gmail.com"
let text2 = "mehmet_colak@hotmail.com"
let text3 = "yasin_sezer@yandex.com"


function converter(emailAdress) {
    const partsOfEmail = emailAdress.split("@")
    const namePart = partsOfEmail[0]
    const partsOfName = namePart.split("_")
    const name = partsOfName[0]
    const nameCap = name.charAt(0).toUpperCase() + name.slice(1);
    const surname = partsOfName[1]
    const surnameCap = surname.charAt(0).toUpperCase() + surname.slice(1);
    const fullName = nameCap.concat(" ").concat(surnameCap)
    return nameCap + " " + surnameCap
}
console.log(converter(text1))
console.log(converter(text2))
console.log(converter(text3))




let numbers = [12, 34, 2, 3, 67, 66, 5, 24]

numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers[1]);


numbers.sort(function (a, b) {
    return a - b;
})
console.log(numbers[1])
