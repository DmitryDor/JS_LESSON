// example

//десятиричная си-ма исчеслений

const price = 5.95
const amount = 3
const total = 5.95 * 3  //17.85

// 16-ти-ричная
const hex = 0x11 // 17
// 8-ми-ричная
const octal = 0o11 // 9
// бинарная
const binary = 0b11 // 3

const dist = 1.7e5 // 170000
const space = 1.7e-5 // 0.000017

typeof +'17' // => 17

17 - '1'  // => 16

17 - undefined // => NaN

// методы

Number('34') // => 34

// parsing   - извлекает число

parseInt('12px')  // => 12 извлекает целое  число
parseInt('12,86')  // => 12 извлекает целое  число

parseFloat('12.86')  // => извлекает дробное  число


//

const parseArray = arr => {
    return arr.map(el => Number.parseFloat(el))
}

console.log(parseArray([1, 3.65, 17, 18.44, null, undefined, NaN, Infinity])) //
// => [1, 3.65, 17, 18.44, NaN, NaN, NaN, Infinity]

// multiRound

Math.round(17.49)  // => 17
Math.round(17.51)  // => 18


Math.ceil(17.17)  // => 18

Math.floor(17.71)   // => 17

Math.round(17.49)  // => 17
Math.round(17.51)  // => 18
Math.round(-17.5)   // => -17

Math.trunc(-17.5)   // => -17  // отбрасывает дробную часть

Math.abs(-17) // 17
Math.max(5, 7, 14)  // => 14
Math.min(2, 6, -5) //  => -5

Math.pow(3, 4) // => 81
Math.sqrt(9) // => 3


// num =>   []

const multiRound = num => {

    return [Math.round(num * 100) / 100, Math.ceil(num * 100) / 100, Math.trunc(num * 100) / 100, Math.floor(num * 100) / 100, +num.toFixed(2)]
}

console.log(multiRound(+(Math.PI)))

// найти мах - ое чило по модулю в массиве  [2, -16, 8, -5, 24, 3, 7] => 24


// 1
const getMaxValue = arr => {
    let max = -Infinity
    arr.forEach(num => {
        if (Math.abs(num) > max) {
            max = Math.abs(num)
        }
    })
    return max
}
// console.log(getMaxValue( [2, -16, 8, -5, 24, 3, 7]))  =>24

const getMaxValue1 = arr => {

    // 1 - get absolute values

    const absoluteValues = arr.map(num => Math.abs(num))

    // 2 - find max

    return Math.max(...absoluteValues)
}

console.log(getMaxValue1([2, -16, 8, -5, 24, 3, 7]))




