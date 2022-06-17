"use strict"

const dateInput = document.querySelector('.date__input');
const radioYesterday = document.getElementById('yesterday');
const radioToday = document.getElementById('today');
const radioTommorow = document.getElementById('tommorow');


const horoscopes = [
    { name: 'aquarius', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'pisces', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'aries', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'taurus', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'gemini', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'cancer', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'leo', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'virgo', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'libra', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'scorpio', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
    { name: 'Sagittarius', month: 00, today: 'lorem', yesterday: 'lorem input', tommorow: 'lorem input insup' },
]