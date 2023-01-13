const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const arrayPairs = [
    "BNBUSDT",
    "ETHUSDT",
    "BTCUSDT",
    "SHIBUSDT"
]

const notifier = require('node-notifier');
var check = false;

const arrayInfo = [], numObjects = 0;

// notifier.notify({
//     title: 'Notificaci',
//     message: 'Probando123francoputo'
//   });

const checkDifPercentage = (actPrice) => {
    if (numObjects > 0) {
        arrayInfo.map( (info, index) => {
            
        });
    }
}

// setInterval(() => {
//     arrayPairs.map( async (pair) => {
//         await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${pair}`).then( async (res) => {
        
//             const priceData = await res.json();
//             console.log(priceData);
//             // arrayInfo.push(priceData);
//             // numObjects++;

//         })
//     })
// }, 1000);

// arrayPairs.map( async (pair) => {
    const dataNow = Date.now();
    fetch(`https://api.binance.com/api/v3/klines?symbol=BNBUSDT&interval=5m&limit=1`).then( async (res) => {
    
        const test = await res.json();
        console.log(test);
        console.log(dataNow);
    })

// })