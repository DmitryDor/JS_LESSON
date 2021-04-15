// pinger(num, period)

const pinger = (num, period) => {
    const interval = setInterval((num) => {
        console.log('Ping')
    }, period)
    setTimeout(() => {
        clearInterval(interval)
    }, num * period)
}
// pinger(5, 1000)


const main = () => {
    console.log('Hi ')
    setTimeout(function cb(){
        console.log('there ')
    }, 0)
    console.log('JS-CRUT ')
}
main()