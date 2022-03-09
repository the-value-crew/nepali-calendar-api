# Nepali Calendar API

This repository contains Nepali calendar data from 1992 BS to till today. API contains information on Nepali date, tithi, festivals, holidays and monthly dates for marriage and bratabandha. This repo will be updated with new data on future.

Objective of this repository is to provide data to anyone looking to implement nepali calendar, date picker or any other calendar related tasks.

## API endpoints

- `/data/info` : Brief info on APIs
- `/data/{{YYYY}}/{{MM}}`: Data of particular year and month

## Examples

### [/data/2076/2.json](https://the-value-crew.github.io/nepali-calendar-api/data/2076/2.json)
```json
{
    "metadata": {
        "en": "May/Jun 2019",
        "np": "जेष्ठ २०७६"
    },
    "days": [
        {
            "n": "",
            "e": "",
            "t": "",
            "f": "",
            "h": false,
            "d": 1
        },
        {
            "n": "",
            "e": "",
            "t": "",
            "f": "",
            "h": false,
            "d": 2
        },
        {
            "n": "",
            "e": "",
            "t": "",
            "f": "",
            "h": false,
            "d": 3
        },
        {
            "n": "१",
            "e": "15",
            "t": "एकादशी",
            "f": "मोहिनी एकादशी व्रत",
            "h": false,
            "d": 4
        },
        {
            "n": "२",
            "e": "16",
            "t": "द्वादशी",
            "f": "",
            "h": false,
            "d": 5
        },
        {
            "n": "३",
            "e": "17",
            "t": "त्रयोदशी",
            "f": "",
            "h": false,
            "d": 6
        }
    ],
    "holiFest": [
        "१ गते मोहिनी एकादशी व्रत",
        "४ गते चण्डी पुर्णिमा, किराँत, राई, लिम्बु जातिको उर्भ्यौली पर्व, गौतम बुद्ध जयन्ती",
        "१५ गते गणतन्त्र दिवस",
        "१६ गते अपरा एकादशी व्रत",
        "२० गते हलो, निशि बार्ने, दर्श श्राद्द",
        "२१ गते गोसाईकुण्ड स्नान आरम्भ",
        "३० गते निर्जला एकादशी व्रत"
    ],
    "marriage": [
        "२ ,३ ,४ ,५ ,९ ,१४ ,१५ ,१६ ,२१ ,२५ ,२६ ,२७ ,२८ ,२९ ,३० ,३१ र ३२  गते"
    ],
    "bratabandha": [
        "९ र २९  गते"
    ]
}
```

## Scrape data yourself
Currently available data was scrapped from 

## to dos
- [ ] New data sources for more refined data
- [ ] Sample applications/widgets to illustrate the use of API

## Contribution
We are open to any kind of suggestions and improvements. Please feel free to contribute by any means possible 😀
