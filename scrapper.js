const axios = require('axios');
const fs = require("fs");
const { JSDOM } = require("jsdom");

const DAYS = ["आईतवार", "सोमवार", "मंगलवार", "बुधवार", "बिहीवार", "शुक्रवार", "शनिवार"];

const _fetchData = async (year, month) => {
    try {
        console.log("fetching", year, month);
        const { data } = await axios({
            method: 'post',
            url: 'https://nepalicalendar.rat32.com/index_nep.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: `selYear=${year}&selMonth=${month}&viewCalander=View+Calander`,
        });

        let dom = new JSDOM(data);

        // metadata
        let metadata = {
            en: dom.window.document.querySelector("#entarikYr").textContent.trim(),
            np: dom.window.document.querySelector("#yren").textContent.trim(),
        }

        // holidays & festivals
        dom.window.document.querySelector("#holi b").remove();
        dom.window.document.querySelector("#holi a").remove();
        let holiFest = dom.window.document.querySelector("#holi").textContent.trim().split('\n');

        // marriage date
        dom.window.document.querySelector("#bibah b").remove();
        let marriage = dom.window.document.querySelector("#bibah").textContent.trim().split('\n');

        // bratabandha date
        dom.window.document.querySelector("#bratabandha b").remove();
        let bratabandha = dom.window.document.querySelector("#bratabandha").textContent.trim().split('\n');

        let days = [];

        let dayCount = 1;
        let arr = Array.from(dom.window.document.querySelectorAll('.cells'));
        arr.forEach(cell => {
            dom = new JSDOM(cell.innerHTML);
            days.push({
                n: dom.window.document.querySelector('#nday').textContent.trim(),
                e: dom.window.document.querySelector('#eday').textContent.trim(),
                t: dom.window.document.querySelector('#dashi').textContent.trim(),
                f: dom.window.document.querySelector('#fest').textContent.trim(),
                h: dom.window.document.querySelector('#nday font').getAttribute('color').trim() == "red",
                d: dayCount
            });

            dayCount++;
            if (dayCount > 7) dayCount = 1;
        })

        // write to file
        if (!fs.existsSync(`./data/${year}`)) fs.mkdirSync(`./data/${year}`);
        fs.writeFileSync(`./data/${year}/${month}.json`, JSON.stringify({ metadata, days, holiFest, marriage, bratabandha }));
        console.log("Done", year, month);
    } catch (e) {
        console.log(e);
    }
}

const scrapeData = async (year, month) => {
    await _fetchData(year, month);
    console.log("Data fetch completed");
}


module.exports = { scrapeData };