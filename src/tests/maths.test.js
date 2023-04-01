const{calculateTip,fahrenheitToCelsius,celsiusToFahrenheit } = require('../math')

test('F to C',   ()  =>  { 
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('C to F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})