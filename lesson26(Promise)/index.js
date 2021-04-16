// requestUserData

const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {

        if (userId === 'lose') {
            setTimeout(() => {
                reject(new Error(`${userId} is invalid`))
            }, 2000)
        }
        setTimeout(() => {
            resolve({
                name: 'Dima',
                age: 40,
                email: `${userId}@tut.by`,
                userId
            })
        }, 2000)
    })
    return request
}


requestUserData('lose')
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally( () => console.log('finally'))

// asyncCalculator

const asyncCalculator = num =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log(` Initial value ${num}`)
            resolve(num)
        }, 3000)
    })
        .then(value =>
            new Promise((resolve) => {
                setTimeout(() => {
                    const result = value * value
                    console.log(` Squared value: ${result}`)
                    resolve(result)
                }, 3000)
            }))
        .then(value => {
            const result = value * 2
            console.log(`  value * 2: ${result}`)
            return result
        })


/*asyncCalculator(4)
    .then(value => console.log(value))*/


















