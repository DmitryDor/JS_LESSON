// Array

const number = [] //-  способ литеральной нотации

const arr = new Array() // - с помощью функции конструктора

const num = [1, 2, 3, 4]

const numLength = num.length
// console.log(numLength)

// console.log('Element # ' + num[2])
// console.log('Element last ' + num[num.length - 1])

// [11, 22, 33, 55, 66] => [length, first elem, last elem]

const getArrayBound = (arr1) => {
    if (!Array.isArray(arr1)) {
        return null
    }
    return [arr1.length, arr1[0], arr1[arr1.length - 1]]
}
// const arr1 = [11, 22, 33, 55, 66]

// console.log(getArrayBound(arr1))
// console.log(getArrayBound())

//------------------------------------------------------------------

// Перебор массива


//------------------------   for
const arr2 = [11, 22, 33, 55, 66, 77, 15, 6]
for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i])
}

let res = []

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < 50) {
        res.push(arr2[i])
    }
}
// console.log(res)

// sum all elements of array

let sum = 0

for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i]
}

// console.log(sum)

function sumElemetsOfArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

// const example =  sumElemetsOfArray(arr1)
// console.log(example)

//------------------------------------------------------------//

// ------------------------------------- for of
let sumOfNumber = 0
for(let num of arr2){
    sumOfNumber += num
}
console.log(sumOfNumber)

//---------------------------------------  for in



// Push , pop, shift, unshift

const peaple = ['Dima', 'Julya', 'Tanya']

peaple.push('Nadya') // добавляет элемент в конец массива(любой длины)
peaple.unshift('Misha') // добавляет элемент в начало массива(любой длины)
peaple.pop()  // удаляет элемент в конец массива
peaple.shift() // удаляет элемент в начало массива
// console.log(peaple)

// from , to => [% 3 === 0]

function getSpecialNumbers(from, to) {
    let resultArray = []
    for (let i = from; i <= to; i++) {
        if (i % 3 === 0) {
            resultArray.push(i)
        }
    }
    return resultArray
}

const resultSpecialNumbers = getSpecialNumbers(9, 155)
// console.log(resultSpecialNumbers)

// Диструктуризация spred оператор

const arr4 = [11, 22, 33, 55, 66, 77, 15, 6]

// const a = arr4[0]
// const b = arr4[1]

// console.log(a, b)

// --- То же при помощи дестуктуризации

const [a, b, ...rest] = arr4
console.log(a, b, rest)

console.log(a, b, [1, 2, 3, ...rest])

function swap(arr) {
    const [start, ...rest] = arr
    return [...rest, start]
}

console.log(swap(arr4))