 localStorage.setItem('name', ('Dima'))
const name = localStorage.getItem('name')
console.log(name)

localStorage.setItem('hon', JSON.stringify([1, 2, 3]))
console.log(localStorage.getItem('hon'));

localStorage.setItem('obj', JSON.stringify({
    1: 25,
    2: 26
}))  // [object Object]
console.log(JSON.parse(localStorage.getItem('obj')))
localStorage.setItem('str', JSON.stringify('OOOhhhhh'))
localStorage.setItem('num', JSON.stringify(50))


// getLocalStorageData - фу-ия для получения всех значений из LS

const getLocalStorageData = () => {
    for (let i = 0; i < localStorage.length; i++) {
        return Object.entries(localStorage)
            .reduce((acc, [key, value]) => {
                let newValue
                try {
                    newValue = JSON.parse(value)
                } catch (e){
                    newValue = value
                }
                return {
                    ...acc,
                    [key]: newValue,
                }
            }, {})
    }
}
console.log(getLocalStorageData())
