'use strict'
// event (this is arrow function)

const obj = {
    name: 'Dim',
    sayHi() {
        console.log(this)
    }
}
// obj.sayHi()

const fun = obj.sayHi  // при присвоении метода переменной - потеря контекста
// fun()  // => undefined - без 'use strict'  , с 'use strict' --->> TypeError: Cannot read property 'name' of undefined

var a = 1 // создаёт свойство глобального объекта

// console.log(window.a)   // => 1

let b = 5

// console.log(window.b)  // => undefined (без 'use strict')

// console.log(this) // => window


// obj.sayHi()

const func = obj.sayHi

// func()  // => undefined


// setTimeout(obj.sayHi, 100)  // => window

// привязать

// setTimeout(obj.sayHi.bind(obj), 100)  //=> {name: "Dim", sayHi: ƒ}

// или

// setTimeout(() => obj.sayHi(), 100)   //=> {name: "Dim", sayHi: ƒ}

const event = {
    guests: [
        {name: 'Tom', email: 'a@mail.com', age: 15},
        {name: 'Bob', email: 'b@mail.com', age: 21},
    ],
    message: 'Welcome here',
    getInvintations() {
        return this.guests.filter(({age}) => age >= 18).map(({name, email}) => ({
            text: `Hi ${name}. ${this.message}`,
            email
        }))
    }
}

// console.log(event.getInvintations());

// Заимствование методов - wallet

const arr = [1, 3, 8]
// console.log(Math.max.apply(null,arr)) // => 8

const wallet = {
    transaction: [8, 15, 7, 3],
    getMax() {
        return Math.max.apply(null, this.transaction)
    },
    getMin() {
        return Math.min.apply(null, this.transaction)
    }
}

// console.log(wallet.getMax());
// console.log(wallet.getMin());

///    ТОЖЕ НО БОЛЕЕ СОВРЕМЕННО

const wallet1 = {
    transaction: [8, 15, 7, 3],
    getMax() {
        return Math.max(...this.transaction)
    },
    getMin() {
        return Math.min(... this.transaction)
    }
}

console.log(wallet1.getMax());
console.log(wallet1.getMin());

//     ПСЕВДО МАССИВЫ

function func1() {
    console.log(arguments)
}
// func1(1, 7, 8)

function sumArg ()  {
    return [].reduce.apply(arguments, [(acc, elem) => {
        return acc + elem
    }, 0])
}
console.log(sumArg(1, 8, 9, 48));

///    ТОЖЕ НО БОЛЕЕ СОВРЕМЕННО

function sumArg1 ()  {
    return [...arguments].reduce((acc, elem) => {
        return acc + elem
    }, 0)
}

console.log(sumArg1(1, 8, 9, 48, 13));