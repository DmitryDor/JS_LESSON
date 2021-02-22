let prop = 'my'

const obj = {
    name: 'Dim',
    age: 40,
    isMarrige: true,
    'amount of children': 2,
    [prop]: 'DOR',
}

obj.age = 41
obj['amount of children'] = 3

// console.log(obj)

// [1, 'text']  => {'1': 1, text: 'text'}

const transformToObject = arr => {
    let obj = {}

    arr.forEach(el => {
        obj[el] = el
    })
    return obj
}

const result = transformToObject([1, 'text'])

// console.log(result)

// ---------------------- Перебор свойств объекта----

const user = {
    name: 'Dim',
    age: 40,
    isMarrige: true,
    'amount of children': 2,
}

for (let key in user) {
// console.log(key)       // => name age  isMarrige  amount of children
//     console.log(user[key])  // => Dim   40  true  2
}

// user => ['Dim', 40, true  2]

const concatObj = obj => {
    let arr1 = []
    for (let key in obj) {
        // arr1.push(obj[key])
        arr1 = arr1.concat(obj[key])
    }
    return arr1
}

console.log(concatObj(user))  //   => ["Dim", 40, true, 2]