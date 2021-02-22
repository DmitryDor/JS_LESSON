const text = 'My new story'

const message = "I'm learn js"

const poem = `
This is multiline text,
with ${text}
`

text[3] //=> n
text[3] = 'N' //=> не сработает

const meMessage1 = ' The text is \n   ${text.toUpperCase()}'
// console.log(meMessage1)

const meMessage = `
        The text is 
    ${text.toUpperCase()} 
`
// console.log(meMessage)
// console.log(text[text.length - 1])
// console.log(text.length)
// console.log(text.charAt(text.length-1))


// console.log('text'.concat('qqq')); // =>  'textqqq'

// console.log('text'.split(''))   // => ["t", "e", "x", "t"]
// console.log('text'.split('e'))   // => ["t", "xt"]

' Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem'

// splitText

// splitString('abxc efgh', 4) => 'Abxc\n efg\nH

const splitText = (text, len) => {
    const strArr = []
    let startPosition = 0
    while (true) {
        let chunk = text.substr(startPosition, len)
        if (chunk.length === 0) {
            break
        }
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1))
        startPosition += len
    }
    return strArr.join('\n')
}

// console.log(splitText(' Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem', 4))

// 1 'adcsrege' => ['adcs', 'rege'] => ['Adcs', 'Rege'] => \n

//                      сортировка строк


// sort by name

const contacts = [
    {
        name: 'Dim',
        phoneNumber: "1881854"
    },
    {
        name: 'Tan',
        phoneNumber: "5544136"
    },
    {
        name: 'Jul',
        phoneNumber: "6057780"
    },
    {
        name: 'Mam',
        phoneNumber: "3225421"
    },
    {
        name: 'Pap',
        phoneNumber: "3225607"
    },
]

// isAsk - по возрастанию или убыванию

const sortContacts = (contactsArr, isAsk) => {
    const result = contactsArr
        .sort((a, b) => {
            if(isAsk){
                return a.name.localeCompare(b.name)
            } else {
                return b.name.localeCompare(a.name)
            }

        })
    return result
}

console.log(sortContacts(contacts, true))


// '1 + 2' => '1 + 2 = 3'

const calc = expession => {
    const a = expession.split(' ')
    let result

    switch (a[1]){
        case '+':
            result =  +a[0] + +a[2]
            break
        case '-':
            result =  a[0] - a[2]
            break
    }
    return `${expession} = ${result}`
}
console.log(calc('2 + 4'))

