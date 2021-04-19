// window.addEventListener('error', (e) =>  console.log(e))  //глобальная обработка  синхронных ошибок ошибок


try {
    const jsonString = '{"name": "Tom"}'
    // throw new ReferenceError()
    const userData = JSON.parse(jsonString)
    // console.log(userData)
} catch (e) {
    if (e instanceof SyntaxError) {
        console.error('Handled')
    } else {
        throw e
    }
} finally {
    // console.log('Some actions')
}

// ======= асинхронная обработка ошибок(в промисах)

const successRequest = Promise.resolve({name: 'Dim'})

successRequest
    .then(data => {
        // console.log(data)
        throw new Error('Unexpected error')
    })
    .catch(err => {
        // console.warn(err.message)
    })

const failedRequest = Promise.reject(new Error('Fail'))
failedRequest
    .then(data => console.log(data))
    .catch(err => console.warn(err.message))


window.addEventListener("unhandledrejection", function () {
    // console.log(e)
})  //глобальная обработка  асинхронных ошибок ошибок


fetch('https://api.github.com/users/github')
    .then(response => {
        return response.json()
    })
    .then(data => console.log(data))