/* Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name */

function createArrayOfArrays(array) {
    return array.map(value => [value, value.slice(0,3), value.length])
}
const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
]
console.log(createArrayOfArrays(countries))

