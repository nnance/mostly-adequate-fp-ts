import {
  compose,
  prop,
  reduce,
  add,
  map,
  join,
  filter,
  last,
  head,
  replace,
  toLower,
  sortBy,
} from "ramda"
import accounting from "accounting"

interface ICar {
    name: string
    horsepower: number
    dollar_value: number
    in_stock: boolean
}

// Exercise 1:
// ============
// Use _.compose() to rewrite the function below. Hint: _.prop() is curried.
export const isLastInStock = compose<ICar[], ICar, boolean>(prop("in_stock"), last)

// Exercise 2:
// ============
// Use _.compose(), _.prop() and _.head() to retrieve the name of the first car.
export const nameOfFirstCar = compose<ICar[], ICar, string>(prop("name"), head)

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition.
const _average = (xs: number[]) => reduce<number, number>(add, 0, xs) / xs.length
// <- leave be

export const averageDollarValue = compose<ICar[], number[], number>(_average, map(c => c.dollar_value))


// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true}]) ”
//=> ['ferrari_ff'].

const _underscore = replace(/\W+/g, "_") //<-- leave this alone and use to sanitize

export const sanitizeNames = map(compose<ICar, string, string, string>(
    _underscore,
    toLower,
    prop("name"))
)

// Bonus 1:
// ============
// Refactor availablePrices with compose.

export const availablePrices = compose<ICar[], ICar[], string[], string>(
    join(", "),
    map(x => accounting.formatMoney(x.dollar_value)),
    filter<ICar>(prop("in_stock"))
)

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip().

export const fastestCar = compose<ICar[], ICar[], ICar, string, string>(
    (name) => `${name} is the fastest`,
    prop("name"),
    last,
    sortBy(car => car.horsepower)
)
