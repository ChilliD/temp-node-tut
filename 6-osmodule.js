const os = require('os');

const user = os.userInfo();

// return system uptime
console.log(`System Uptime: ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);