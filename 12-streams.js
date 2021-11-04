const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
    encoding: 'utf-8'
});

stream.on('data', (res) => {
    console.log(res);
})

stream.on('error', (err) => {
    console.log(err)
})
