function createArrayOfArrays(array) {
    return array.map(value => [value, value.slice(0, 3), value.length])
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