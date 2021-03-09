//methods objects

const user = {
    firstName: 'Dim',
    lastName: 'Dor',
    age: 40,
    sayHi(message, isMarrige) {
        console.log(`Hi , I am ${this.firstName} ${this.lastName}, ${message}, ${isMarrige}`)
    },
    fullName() {
        console.log(` ${this.firstName}, ${this.lastName} `)
    }
}
// user.sayHi()
// user.fullName()

const funk = user.fullName

// funk()  // => undefined undefined        ПОТЕРЯ КОНТЕКСТА!!!

// .bind()

const funk1 = user.fullName.bind(user)

// funk1()

// const funk2 = user.sayHi.call(user, 'YO', true)

// callbackPrompt

const callbackPrompt = {
    message: 'Tell me your number: ',
    showPrompt() {
        const phoneNumber = prompt(this.message)
        console.log(phoneNumber)
    },
    showDeferredPrompt(ms) {

        // setTimeout(() => this.showPrompt(), ms)                  //  1 вариант для сохранения контекста
        setTimeout(this.showPrompt.bind(this), ms)      // 2 вариант для сохранения контекста
    }
}
// callbackPrompt.showPrompt()
// callbackPrompt.showDeferredPrompt(2000)


// переадресация вызова defer(funk, ms) => Function

function defer(funk, ms) {
    return function () {
        setTimeout(() => funk(...arguments), ms)
    }
}

const sayHi = () => {
    console.log('Hi')
}
// sayHi();

// const deferSayHi = defer(sayHi, 2000)
// deferSayHi()

const sum = (a, b) => {
    console.log(a + b)
}
const deferSum = defer(sum, 2000)
// deferSum(5, 7)

const deferName = defer(user.fullName.bind(user), 2000)
deferName()




































