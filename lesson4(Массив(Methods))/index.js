const getSpetialNumbers = (numbersArray) => {
    let spetialNumbers = []
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 3 === 0) {
            spetialNumbers.push(numbersArray[i])
        }
    }
    return spetialNumbers
}
// console.log(getSpetialNumbers([3, 6, 9, 11, 2, 7, 8]));  => [3, 6, 9]

// тоже при помощи метода перебора массива forEach

const getSpetialNumbers1 = (numbersArray) => {
    let spetialNumbers = []

    numbersArray.forEach(num => num % 3 === 0 ? spetialNumbers.push(num) : '')

    return spetialNumbers
}
// console.log(getSpetialNumbers1([3, 6, 9, 11, 2, 7, 8]))

// тоже при помощи метода перебора массива filter

const getSpetialNumbers2 = (numbersArray) => {

    let spetialNumbers = numbersArray.filter(n => num % 3 === 0)

    return spetialNumbers
}
// console.log(getSpetialNumbers1([3, 6, 9, 11, 2, 7, 8, 15]))

// unsorted array => sorted array   МУТИРУЕТ

const sortArray = (arrayNumbers) => {

    //const sortedArray = arrayNumbers.sort()  // если без аргументов, то сортирует как строки

    // const sortedArray = arrayNumbers.sort((a,b) => a > b ? 1 : - 1)
    // const sortedArray = arrayNumbers.sort((a,b) => a - b )

    return arrayNumbers.sort((a, b) => a - b)
}
// console.log(sortArray([3, 6, 9, 11, 2, 7, 8, 15]))


// reduce

// [1, 2, 3, 4] => возвращает одно занчение

[1, 2, 3, 4].reduce((acc, el) => {
    return acc + el
}, 0)

// [1, [2, 3, 4], 5, [6]] => [1, 2, 3, 4, 5, 6]

const flatArray = arr =>  arr.reduce((acc, elem) => acc.concat(elem), [])

// console.log(flatArray([1, [2, 3, 4], 5, [6]]))

// тоже методом flat

const flatArray1 = arr =>  arr.flat()
// console.log(flatArray([1, [2, 3, 4], 5, [6]]))


// ['Ann', 'Bob', 'Len', 'Sof']   ['Bob', 'Sof'] => ['Good job, Ann', 'Good job, Len']


const getMessagesForPassedStudent = (allStudents, failStudents) => {
    // 1 Find passed student
    // 2 Add 'Good job'
    // const passedStudent = allStudents.filter( name => failStudents.indexOf(name) === -1)
    const passedStudent = allStudents.filter( name => !failStudents.includes(name))


    console.log(passedStudent)
    return passedStudent.map(el => `Good job, ${el}`);

}
console.log(getMessagesForPassedStudent(['Ann', 'Bob', 'Len', 'Sof'], ['Bob', 'Sof']));


const getEvenNumber = num => {
    const arr = []
    for (let el of num) {
        if (el % 2 === 0) {
            arr.push(el)
        }
    }
    return arr
}
console.log(getEvenNumber([1, 7, 6, 8, 7]))



















