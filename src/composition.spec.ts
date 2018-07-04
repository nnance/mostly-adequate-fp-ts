import {
    describe,
    before,
    it,
} from 'mocha'

import {
    expect,
} from 'chai'

import {
    isLastInStock,
    nameOfFirstCar,
    averageDollarValue,
    sanitizeNames,
    availablePrices,
    fastestCar,
} from './composition'

// Example Data
const CARS = [
    {
        name: "Ferrari FF",
        horsepower: 660,
        dollar_value: 700000,
        in_stock: true
    },
    {
        name: "Spyker C12 Zagato",
        horsepower: 650,
        dollar_value: 648000,
        in_stock: false
    },
    {
        name: "Jaguar XKR-S",
        horsepower: 550,
        dollar_value: 132000,
        in_stock: false
    },
    {
        name: "Audi R8",
        horsepower: 525,
        dollar_value: 114200,
        in_stock: false
    },
    {
        name: "Aston Martin One-77",
        horsepower: 750,
        dollar_value: 1850000,
        in_stock: true
    },
    {
        name: "Pagani Huayra",
        horsepower: 700,
        dollar_value: 1300000,
        in_stock: false
    }
]

const santized = [
    'ferrari_ff',
    'spyker_c12_zagato',
    'jaguar_xkr_s',
    'audi_r8',
    'aston_martin_one_77',
    'pagani_huayra'
]

describe('when using composition', () => {
    it('the last car should not be in stock', () => {
        expect(isLastInStock(CARS)).to.be.false
    })
    it('name of the first car should be Ferrari FF', () => {
        expect(nameOfFirstCar(CARS))
    })
    it('average dollar value should equal 790700', () => {
        expect(averageDollarValue(CARS)).to.eq(790700)
    })
    it('sanatized names should be lower case with underscores', () => {
        expect(sanitizeNames(CARS)).to.deep.equal(santized)
    })
    it('available prices should be formated', () => {
        expect(availablePrices(CARS)).to.equal('$700,000.00, $1,850,000.00')
    })
    it('fastest car should be the Ason Martin ONe-77', () => {
        expect(fastestCar(CARS)).to.equal('Aston Martin One-77 is the fastest')
    })
})