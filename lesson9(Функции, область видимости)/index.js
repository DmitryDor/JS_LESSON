// sendMessage

/*let message = 'Just learn IT'
const sendMessage = (name) => {
    const sender = 'GromCode'
    console.log(`${name}, ${message}. You ${sender}`)
}*/


/*function setMessage(text) {
    message = text
}*/

// sendMessage('Dim')

// setMessage('Nanya')

// sendMessage('Dim')

// messanger

// let message = 'Hi!';

const createMessager = () => {

    let message = 'Hi!'

    const sendMessage = (name) => {
        const sender = 'GromCode'
        console.log(`${name}, ${message}. You ${sender}`)
    }
    const setMessage = (text) => {
        message = text
    }

    return {
        sendMessage: sendMessage,
        setMessage: setMessage
    }
}
/*const messanger = createMessager()
messanger.sendMessage('Bob')

const messanger2 = createMessager()
messanger2.sendMessage('Len')
messanger2.setMessage('Ura')
messanger2.sendMessage('Len2')
messanger.sendMessage('Ira')*/

//   циклы  counter

// let count = 0   //   !!!!!!!!!!!!!!!!

const makeCounter = () => {
    let count = 0  // !!!!!!!!!!!!!!!!!!
    return () => {
        return count++
    }
}

const counter1 = makeCounter()
const counter2 = makeCounter()

// console.log(counter1())   // 0
// console.log(counter1())   // 1
// console.log(counter1())   // 2
// console.log(counter1())   // 3
//
// console.log(counter2())   // 0
// console.log(counter2())   // 1
// console.log(counter2())   // 2


const message = 'Have a good day!'

const sendMessage = (name) => {
    let greeting = 'Hi, '

    if(name){
        console.log(greeting + name)
    } else {
        console.log(message)
    }
}
// sendMessage('Ann')
// sendMessage()


for(let i = 0; i<=10; i++){
    console.log(i)
}
