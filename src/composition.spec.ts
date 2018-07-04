import {
    describe,
    it,
} from "mocha";

import {
    expect,
} from "chai";

import {
    availablePrices,
    averageDollarValue,
    fastestCar,
    isLastInStock,
    nameOfFirstCar,
    sanitizeNames,
} from "./composition";

// Example Data
const CARS = [
    {
        dollar_value: 700000,
        horsepower: 660,
        in_stock: true,
        name: "Ferrari FF",
    },
    {
        dollar_value: 648000,
        horsepower: 650,
        in_stock: false,
        name: "Spyker C12 Zagato",
    },
    {
        dollar_value: 132000,
        horsepower: 550,
        in_stock: false,
        name: "Jaguar XKR-S",
    },
    {
        dollar_value: 114200,
        horsepower: 525,
        in_stock: false,
        name: "Audi R8",
    },
    {
        dollar_value: 1850000,
        horsepower: 750,
        in_stock: true,
        name: "Aston Martin One-77",
    },
    {
        dollar_value: 1300000,
        horsepower: 700,
        in_stock: false,
        name: "Pagani Huayra",
    },
];

const santized = [
    "ferrari_ff",
    "spyker_c12_zagato",
    "jaguar_xkr_s",
    "audi_r8",
    "aston_martin_one_77",
    "pagani_huayra",
];

describe("when using composition", () => {

    it("the last car should not be in stock", () =>
        expect(isLastInStock(CARS)).to.be.false);

    it("name of the first car should be Ferrari FF", () =>
        expect(nameOfFirstCar(CARS)));

    it("average dollar value should equal 790700", () =>
        expect(averageDollarValue(CARS)).to.eq(790700));

    it("sanatized names should be lower case with underscores", () =>
        expect(sanitizeNames(CARS)).to.deep.equal(santized));

    it("available prices should be formated", () =>
        expect(availablePrices(CARS)).to.equal("$700,000.00, $1,850,000.00"));

    it("fastest car should be the Ason Martin ONe-77", () =>
        expect(fastestCar(CARS)).to.equal("Aston Martin One-77 is the fastest"));
});
