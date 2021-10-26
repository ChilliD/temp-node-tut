const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;
        writeFile('./content/result-async.txt', `The result is: ${first}, ${second}`,
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done');
            //undefined expected in terminal, this writes to the async file
        })
    })
})
console.log('starting next');

