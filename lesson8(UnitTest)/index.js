

export default num => {
    return num.filter(el => el % 2 === 0)
}

export const getSquaredNumbers = arr =>
arr.map(num => num * num)

export const getOddNumbers = arr =>
    arr.filter(num => num % 3 === 0 )

export const sum = (a, b) => a + b

