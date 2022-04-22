const fs = require('fs')

console.log('start')

const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')

console.log(first)

fs.writeFileSync(
    './content/result.txt',
   first + second,
   {flag: 'a'},
   )

console.log('done')
console.log('starting new one')
