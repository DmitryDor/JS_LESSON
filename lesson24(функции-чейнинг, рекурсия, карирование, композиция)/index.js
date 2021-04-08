//   Чейнинг  calc(3).add(2).mult(4).div(10).substract(5).result() // -3



const calc = initialValue => {

    let result = initialValue

    const calculator = {
        add(value) {
            result += value
            return this   // return this calculator
        },
        mult(value) {
            result *= value
            return this
        },
        div(value) {
            result /= value
            return this
        },
        substract(value) {
            result -= value
            return this
        },
        result() {
            return result
        }
    }
    return calculator
}

const result1 = calc(3).add(2).mult(4).div(10).substract(5).result()

// console.log(result1)   // -3


// ---------------   Рекурсия   -------------------


// Если узел isFavorit добавить true, иначе false

const favorites = ['id-6', 'id-17']

const tree = {
    id: 'id-1',
    name: 'Products',
    nodes: [
        {
            id: 'id-2',
            name: 'Food',
            nodes: [
                {
                    id: 'id-6',
                    name: 'Drinks',
                    nodes: []
                }
            ]
        },
        {
            id: 'id-17',
            name: 'Vehicles',
            nodes: []
        }
    ]
}

const markFavorites = (tree, favorites) => {
    const isFavorite = favorites.includes(tree.id)

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites))
    }
}

const result = markFavorites(tree, favorites)
// console.log(result)


//       --------------------   Карирование------------------

// const sum = (a, b) => a + b

const sum = a => b => a + b

const add3 = sum(3)

const res = add3(7)
// console.log(res)

//       --------------------   Комрозиция(compose)------------------

// f
// g
// f(g(value))
//
// f*g(value)    // Комрозиция(compose) - тот же результат, что и f(g(value))

// compose(funk1, funk1, ...) =>

const add5 = value => value + 5
const mult2 = value => value * 2
const div4 = value => value / 4

const compose = (...funcs) => value => {
    return funcs.reduce((acc, func) => func(acc), value )
}

const doEverything = compose(
    add5,
    mult2,
    div4
)

console.log(doEverything(15));

