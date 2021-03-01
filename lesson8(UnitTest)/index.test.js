
import getEvenNumber from './index'
import {getSquaredNumbers} from './index'
import {sum} from './index'
// simple assertions

it('17 и в Африке 17', () => {
    expect(17).toEqual(17)
})

it('17 !== 18 ', () => {
    expect(17).not.toEqual(18)
})


it('function shuold be return arr with even numbers', () => {
    const startValue = [1, 7, 2, 6 ,11, 8]
    getEvenNumber(startValue)
    expect(getEvenNumber(startValue)).toEqual([2, 6, 8])
})

it('correct getSquared', () => {
    const startValue1 = [1, 2, 3]
    const endValue = getSquaredNumbers(startValue1)

    expect(endValue).toStrictEqual([1, 4, 9])
})

it('correct sum', () => {
    expect(sum(7, 8)).toBe(15)
})


