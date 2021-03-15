/*function User(name, age) {
    this.name = name
    this.age = age
}

User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`)
}*/

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static compare() {
        return user1.age - user3.age
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`)
    }

    requestNewFoto() {
        console.log(`New foto`)
    }

    setAge(value) {
        if (value < 0) {
            return false
        }
        this.age = value
        if (value >= 25) {
            this.requestNewFoto()
        }
        return value
    }
}

const user1 = new User('Dim', 43)
const user3 = new User('Kol', 15)
// console.log(user1.sayHi())
// console.log(User.prototype.sayHi())  // метод у класса будет доступен только через prototype
// console.log(User.ageIncrement())
// console.log(User.compare(user1, user3))

// ----------------------------------------------------------------------------------------

class Vehicle {
    constructor(name, hasWheels) {
        this.hasWheels = hasWheels
        this.name = name
    }

    move() {

        console.log(`${this.name} is moving`);
    }

    stop() {
        console.log(`${this.name} stopped`);
    }
};


class Ship extends Vehicle {
    constructor(name, speed) {
        super(name, false);
        this.speed = speed
    }

    move() {
        console.log(`${this.name} lift up`)
        super.move();
    }

    stopMachine() {
        this.stop();
        console.log(`${this.name} lift down`)
    }
}

const ship1 = new Ship('POBEDA', 300)
// console.log(ship1.move());
// console.log(ship1.stopMachine());


////////////////////////////////////////////////  Приватность       //////////////////////

class Wallet {
    /*constructor() {
        this._ballace = 0   // если значение не приходит извне, то можно constructor не писать а просто указать переменную со значением:
     }*/
    #ballace = 0

    getBallace() {
        return this.#ballace
    }

    deposit(amount) {
        this.#ballace += amount
    }

    withdrow(amount) {
        if (amount > this.#ballace) {
            alert(`insufficient funds`)
            console.log(`insufficient funds`)
            return
        }
        this.#ballace -= amount
    }
}

const wallet1 = new Wallet()

console.log(wallet1.getBallace())

wallet1.deposit(100)
console.log(wallet1.getBallace())

wallet1.withdrow(20)
console.log(wallet1.getBallace())

console.log(wallet1.#ballace)  // => error
















