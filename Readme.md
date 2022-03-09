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
            "n": "१", // nepali date
            "e": "15", // english date
            "t": "एकादशी", // tithi
            "f": "मोहिनी एकादशी व्रत", // festival
            "h": false, // holiday
            "d": 4 // day: 1->sunday, 2-> monday ...
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
    
    // holiday and festivals
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
Currently available data was scrapped from nepalicalendar.rat32.com. Run the file scrapper_v1 to get the data yourself. As the source website chanegs or new sources are added new version of scrapper will be needed.

## to dos
- [ ] New data sources for more refined data
- [ ] Sample applications/widgets to illustrate the use of API

## Contribution
We are open to any kind of suggestions and improvements. Please feel free to contribute by any means possible 😀
