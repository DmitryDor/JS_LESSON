/*async function func  ()  {
    return 1
}
const result = func()*/


async function func() {
    const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(17)
            }, 1000)
        }
    )
    const result = await promise
    // console.log(result)               // 2
    // console.log('Hello')             // 3
    return 1
}

const result = func()
// console.log(5)                         // 1

const getUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`)
        if (!response.ok) {
            return null
        }
        const userData = await response.json()
        return userData
    } catch (err) {
        throw new Error('Failed to fetch user')
    }
}
getUser('facebook')
    .then(res => console.log(res))
    .catch(err => alert(err.message))

















