const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${result}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    console.log(result)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task')