// const p = new Promise()

const resolvedPromise = Promise.resolve(17)       //  одно и тоже

const resolvedPromise1 = new Promise(resolve => resolve(17))//  одно и тоже

/*const rejectedPromise = Promise.reject(new Error('Error')).catch(err => console.error(err))       //  одно и тоже

const rejectedPromise1 = new Promise((resolve, reject) => reject(new Error('Error')))//  одно и тоже*/

// asyncSum(asyncNum1, asyncNum1, ...)

const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value)
        resolve(value)
    }, delay)
})

// const asyncNum1 = getValueWithDelay(56, 1000)
// const asyncNum2 = getValueWithDelay(undefined, 2000)
// const asyncNum3 = getValueWithDelay('10', 3000)

/*getValueWithDelay(56, 1000)
    .then(value => console.log(value))*/

const getSum = numbers =>
    numbers
        .filter(value => !isNaN(value))
        .reduce((acc, num) => acc + Number(num), 0)

/*const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error(`Can't calculate`)))
}

asyncSum(asyncNum1, asyncNum2, asyncNum3)
    .then(res => console.log(res))

asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
    .then(res => console.log(res))
    .catch(err => console.error(err))*/

/*const asyncSum = (...asyncNumbers) => {
    return Promise.allSettled(asyncNumbers)
        .then(numbers => console.log(numbers))
}

asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
    .then(res => console.log(res))
    .catch(err => console.error(err))*/

// ================================  Promise.race  ======================


const getRandomNumber = (from, to) => {
    from + Math.random() * (to - from)
}

const request = url => new Promise(resolve => {
    let rendomDelay = getRandomNumber(1000, 3000)
    setTimeout(() => {
        resolve({
            userData: {
                name: 'Dim',
                age: 40,
            },
            source: url
        })
    }, rendomDelay)
})

const servers = [
    'tttps://server.com/us/users/usersId',
    'tttps://server.com/eu/users/usersId',
    'tttps://server.com/au/users/usersId',
]

const getUserASAP = userId => {
    const userUrls = servers.map(serverUrl => `${serverUrl}/users/${userId}`)

    const requests = userUrls
        .map(userUrl => request(userUrl))

    return Promise.race(requests)
}

getUserASAP('user-id-1')
    .then(res => console.log(res))
