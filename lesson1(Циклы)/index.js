//  ---------   while   -------------

// сумма чисел от 1 до 10

let n = 0
let sum = 0 // для записи результата
while (n <= 10) {
    sum += n
    n++
}
// console.log(sum)

//  ---------   do .... while   -------------
// произведение нечётных чисел в промежутке от a до b

let a = 10
const b = 20
let mult = 1

do {
    if (a % 2 === 1) {
        mult *= a
    }
    a++
} while (a <= b)

// console.log(mult)

//  ---------------  for --------------------

// произведение нечётных чисел в промежутке от c до d

let mult1 = 1

for(let c = 10; c <= 20; c++){
    if (c % 2 === 1) {
        mult1 *= c
    }
}
// console.log(mult1)

//  Таблица умножения до 5 с помощью цикла for

for(let i = 1; i <= 5; i++) {
    // console.log('\n=> ' + i + ' <=\n ')
    for(let j = 1; j <= 10; j++) {
        // console.log(i + ' x ' + j + ' = ' + i * j)
    }
}

// произведение нечётных чисел в промежутке от e до f=20

let mul = 1
for(e = 10; e <= 20; e++){
    if(e % 2 === 1){
        mul *= e
    }
}
// console.log(mul)



