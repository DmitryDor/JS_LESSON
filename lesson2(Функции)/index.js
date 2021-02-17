// Function declaration - доступна выше объявления

function getEvenOrOdd(number){
    if(number%2 === 0){
        return  ' => even'
    } else {
        return ' => odd'
    }
}
const res = getEvenOrOdd(10)
// alert(res)

/*const res1 = sum1(10,5)
const res2 = sum2(10,20)
console.log(res1)
console.log(res2)*/

function sum1(a,b){
    return a + b
}

//Function expretion
//ананимная функция  - присваивается какой-то переменной - НЕЕЕ  доступна выше объявления

const sum2 = function (a,b){
    return a + b
}
/*
const res1 = sum1(10,5)
const res2 = sum2(10,20)
console.log(res1)
console.log(res2)*/

// arrow function

const getSquare = num =>  num * num



console.log(getSquare(5))
