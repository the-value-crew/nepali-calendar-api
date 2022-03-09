const { scrapeData } = require("./scrapper");

async function run() {
    for (let i = 1992; i <= 2080; i++) {
        for (let j = 1; j <= 12; j++) {
            await scrapeData(i, j);
        }
    }
}

run();