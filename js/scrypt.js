"use strict"

const dateInput = document.querySelector('.date__input');
const radioYesterday = document.getElementById('yesterday');
const radioToday = document.getElementById('today');
const radioTommorow = document.getElementById('tommorow');


const horoscopes = [
    { name: 'aquarius', month: '01, 02', date: '20, 18', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'pisces', month: '02, 03', date: '19, 20', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'aries', month: '03, 04', date: '21, 19', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'taurus', month: '04, 05', date: '20, 20', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'gemini', month: '05, 06', date: '21, 20', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'cancer', month: '06, 07', date: '21, 22', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'leo', month: '07, 08', date: '23, 22', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'virgo', month: '08, 09', date: '23, 22', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'libra', month: '09, 10', date: '23, 22', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'scorpio', month: '10, 11', date: '23, 21', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'Sagittarius', month: '11, 12', date: '22, 21', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'Capricorn', month: '12, 01', date: '22, 19', today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
]

function findTest(e) {
    for (let i of horoscopes) {
        // console.log(i.month)
        if (i.month.includes(e)) {
            console.log(i)
        }
    }
}

function whatZodiac(m) {

}

// const dateTest = '14.12.2000'
// const monthth = dateTest[3] + dateTest[4] 
// const dayTest = dateTest[0] + dateTest[1]
// console.log(dayTest)
// console.log(monthth)
// console.log(typeof (monthth))

// findTest(monthth)

dateInput.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        const inputMonth = Number(dateInput.value[3] + dateInput.value[4])
        const inputDay = Number(dateInput.value[0] + dateInput.value[1])
        // console.log(inputDay)
        // console.log(typeof (inputMonth))
        // console.log(inputMonth)
        // findTest(inputMonth)

        if (inputMonth == 12 && inputDay > 22 || inputMonth == 1 && inputDay < 20) {
            console.log('Capricorn')
        } else if (inputMonth == 1 && inputDay >= 20 || inputMonth == 2 && inputDay <= 18) {
            console.log('aquarius')
        } else if (inputMonth == 2 && inputDay >= 19 || inputMonth == 3 && inputDay <= 20) {
            console.log('pisces')
        } else if (inputMonth == 3 && inputDay >= 21 || inputMonth == 4 && inputDay <= 19) {
            console.log('aries')
        } else if (inputMonth == 4 && inputDay >= 20 || inputMonth == 5 && inputDay <= 20) {
            console.log('taurus')
        } else if (inputMonth == 5 && inputDay >= 21 || inputMonth == 6 && inputDay <= 20) {
            console.log('gemini')
        } else if (inputMonth == 6 && inputDay >= 21 || inputMonth == 7 && inputDay <= 22) {
            console.log('cancer')
        } else if (inputMonth == 7 && inputDay >= 23 || inputMonth == 8 && inputDay <= 22) {
            console.log('leo')
        } else if (inputMonth == 8 && inputDay >= 23 || inputMonth == 9 && inputDay <= 22) {
            console.log('virgo')
        } else if (inputMonth == 9 && inputDay >= 23 || inputMonth == 10 && inputDay <= 22) {
            console.log('libra')
        } else if (inputMonth == 10 && inputDay >= 23 || inputMonth == 11 && inputDay <= 21) {
            console.log('scorpio')
        } else if (inputMonth == 11 && inputDay >= 22 || inputMonth == 12 && inputDay <= 21) {
            console.log('Sagittarius')
        }

    }
})